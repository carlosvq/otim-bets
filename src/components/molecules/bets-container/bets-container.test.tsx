import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { BetsContainer, BetsContainerProps } from "./bets-container";

const renderBetsContainer = (props: BetsContainerProps) => {
  return render(<BetsContainer {...props} />);
};

describe("@atoms/bets-container", () => {
  test("renders without crashing", () => {
    renderBetsContainer({ children: <div>Test Child</div> });
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  test("renders multiple children", () => {
    renderBetsContainer({
      children: (
        <>
          <div>Child 1</div>
          <div>Child 2</div>
        </>
      ),
    });
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });
});
