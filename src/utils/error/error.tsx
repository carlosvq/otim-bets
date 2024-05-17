import { Alert, AlertIntent } from "@molecules/alert";
import { useState } from "react";
import { z } from "zod";

import { errorDictionary } from "./error-dictionary";

const ErrorResponseSchema = z.object({
  // top level messages are returned by the default error type in wagmi.
  message: z.string().nullish(),
  // name field is returned by the wagmi error type.
  name: z.string(),
});

export const defaultErrorMessage =
  "Unexpected error. Please try again later or reach out to support.";

/**
 * returns attempts to unfurl the error message from the API response.
 * @param maybeError { Error }
 * @param fallbackMessage { fallback message created in case missing it. }
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is a generic error handler, so we don't know the shape of the error. :-D
function getErrorMessage(maybeError: any, fallbackMessage?: string): string {
  const errorMessage = fallbackMessage || defaultErrorMessage;

  const result = ErrorResponseSchema.safeParse(maybeError);

  if (!result.success) {
    console.error(maybeError);
    return errorMessage;
  }

  const { message, name } = result.data;
  console.error({ message, name });

  /**
   * Note:
   * I'm not using the default output error message from the error response
   * cause it's not user friendly, instead of that, I'm using the name field
   * to get the error message from the an error dictionary.
   */

  const errorMessageFromDictionary = errorDictionary[name];

  return errorMessageFromDictionary || message || errorMessage;
}

/**
 * useError hook
 */

type RenderErrorParameters = {
  message: string;
} | null;

const useError = (initialState: RenderErrorParameters = null) => {
  const [error, setError] = useState<RenderErrorParameters>(initialState);

  const renderError = (args: RenderErrorParameters) => {
    setError(args);
  };

  const clearError = () => {
    setError(null);
  };

  const ErrorOutlet = () => {
    if (!error) {
      return null;
    }

    return (
      <Alert
        intent={AlertIntent.Error}
        message={error.message}
        onRequestClose={() => {
          setError(null);
        }}
      />
    );
  };

  return {
    isErrorActive: Boolean(error),
    clearError,
    renderError,
    ErrorOutlet,
  };
};

export { useError, getErrorMessage };
