import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";

import { RollButton } from "./roll-button";

describe("RollButton", () => {
  const commonProps = {
    children: "Roll",
    disabled: false,
    isBetSelected: true,
    isPending: false,
    onRoll: vi.fn(),
  };

  test("renders without crashing", () => {
    render(<RollButton {...commonProps} />);
    expect(screen.getByText("Roll")).toBeInTheDocument();
  });

  test("displays the disabled state when disabled is true", () => {
    render(<RollButton {...commonProps} disabled={true} />);
    const button = screen.getByText("Roll");

    expect(button.closest("button")).toBeDisabled();
  });

  test("displays the disabled state when isBetSelected is false", () => {
    render(<RollButton {...commonProps} isBetSelected={false} />);
    const button = screen.getByText("Roll");
    expect(button.closest("button")).toBeDisabled();

    expect(
      screen.getByText("Please choose a bet before rolling..."),
    ).toBeInTheDocument();
  });

  test("calls onRoll when the button is clicked", () => {
    render(<RollButton {...commonProps} />);
    fireEvent.click(screen.getByText("Roll"));
    expect(commonProps.onRoll).toHaveBeenCalledTimes(1);
  });
});
