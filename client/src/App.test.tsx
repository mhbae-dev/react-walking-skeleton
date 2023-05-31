import React from "react";
import App from "./App";
import { render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("App", () => {
  test("renders hello world on button click", async() => {
    render(<App/>);

    await act(async() => {
      await userEvent.click(screen.getByRole("button"))
    })

    expect(screen.getByText("hello world")).toBeInTheDocument()
  })
})