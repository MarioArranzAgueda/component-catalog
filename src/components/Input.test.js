import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Input from "./Input";
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Not exists label", () => {
  act(() => {
    render(<Input />, container);
    expect(container.querySelector("label")).toBeNull();
  });
});
it("Exists label", () => {
  act(() => {
    render(<Input label="Hello" />, container);
    expect(container.querySelector("label").textContent).toBe("Hello");
    expect(container.querySelector(".focus")).toBeNull();
  });
});
it("Focus is active", () => {
  act(() => {
    render(<Input autoFocus={true} />, container);
    expect(container.querySelector(".focus")).toBeDefined();
  });
});
it("Is required", () => {
  act(() => {
    render(<Input required />, container);
    expect(container.querySelector(".error")).toBeDefined();
  });
});
