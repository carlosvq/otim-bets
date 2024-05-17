import { fireEvent, render, screen } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";

import { BlackShark, RedCobra } from "./bet-card";

describe("@molecules/bet-card", () => {
  const commonProps = {
    isSelected: false,
    onSelect: vi.fn(),
  };

  describe("BlackShark", () => {
    test("renders BlackShark button and calls onSelect when clicked", () => {
      render(<BlackShark {...commonProps} />);
      const button = screen.getByText("Black Sharks");
      expect(button).toBeInTheDocument();

      fireEvent.click(button);

      expect(commonProps.onSelect).toHaveBeenCalledTimes(1);
    });

    test("disables the BlackShark button when isSelected is true", () => {
      render(<BlackShark {...commonProps} isSelected={true} />);
      expect(screen.getByText("Black Sharks")).toBeDisabled();
    });
  });

  describe("RedCobra", () => {
    test("renders RedCobra button and calls onSelect when clicked", () => {
      render(<RedCobra {...commonProps} />);
      const button = screen.getByText("Red Cobras");

      expect(button).toBeInTheDocument();
      fireEvent.click(button);

      expect(commonProps.onSelect).toHaveBeenCalledTimes(1);
    });

    test("disables the RedCobra button when isSelected is true", () => {
      render(<RedCobra {...commonProps} isSelected={true} />);
      expect(screen.getByText("Red Cobras")).toBeDisabled();
    });
  });
});
