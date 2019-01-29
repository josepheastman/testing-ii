import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Players from "./Dashboard.js";

describe("<Players />", () => {
  it("renders the player name", () => {
    const { getByTestId } = render(<Players />);

    const title = getByTestId("title");

    expect(title).toHaveTextContent("1");
  });

  describe("Select button", () => {
    it("should select the player", () => {
      const { getByText, getByTestId } = render(<Players />);

      const selected = getByTestId("selected-player");
      const button = getByText(/select/i);

      fireEvent.click(button);

      expect(selected).toHaveTextContent(/pedro martinez/i);
    });
  });
});
