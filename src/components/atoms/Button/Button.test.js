import { render } from "@testing-library/react";
import { Button } from ".";

test("button component should render correctly with props", () => {
  const { getByText } = render(
    <Button classes="testclass" onClick={() => console.log("test")}>
      testtext
    </Button>
  );

  expect(getByText("testtext")).toBeInTheDocument();
});

test("activated label should be blue", () => {
  const { getByText } = render(
    <Button classes="testclass" onClick={() => console.log("test")}>
      testtext
    </Button>
  );

  expect(getByText("testtext")).toHaveClass("testclass");
});
