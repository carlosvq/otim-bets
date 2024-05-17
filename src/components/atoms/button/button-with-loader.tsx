import type { ButtonProps } from "./button";
import type { BaseComponentProps } from "@common/types/component";

import { LoaderIntent, Loader } from "@atoms/loader";

import { Button } from "./button";
import { ButtonIntent } from "./button.styles";

export interface ButtonWithLoaderProps extends ButtonProps, BaseComponentProps {
  isLoading?: boolean;
}

const ButtonWithLoader = ({
  "data-testid": testId = "default.button-with-loader",
  isLoading,
  children,
  ...props
}: ButtonWithLoaderProps) => {
  return (
    <Button {...props} data-testid={testId}>
      {isLoading ? (
        <Loader
          data-testid={`${testId}.loader`}
          intent={getLoaderIntentForButton(props.intent)}
        />
      ) : (
        children
      )}
    </Button>
  );
};

const getLoaderIntentForButton = (
  buttonIntent: ButtonIntent = ButtonIntent.Default,
): LoaderIntent => {
  switch (buttonIntent) {
    case ButtonIntent.Default:
    case ButtonIntent.Destructive:
      return LoaderIntent.Background;
    default:
      return LoaderIntent.Secondary;
  }
};

export { ButtonWithLoader };
