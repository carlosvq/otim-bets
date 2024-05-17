import type { AlertProps } from "./alert";

import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Alert } from "./alert";

const testId = "default.alert";

const renderAlert = (props: AlertProps) => {
  return render(
    <Alert {...props} data-testid={testId}>
      {props.children}
    </Alert>,
  );
};

describe("@molecules/alert", () => {
  test("renders without crashing", () => {
    renderAlert({});
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("renders with a message", () => {
    const message = "This is an alert message";
    renderAlert({ message });
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test("renders with custom class name", () => {
    const customClass = "custom-class";
    renderAlert({ className: customClass });
    const alert = screen.getByTestId(testId);
    expect(alert).toHaveClass(customClass);
  });

  test("renders with children", () => {
    const children = <span>Child content</span>;
    renderAlert({ children });
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
