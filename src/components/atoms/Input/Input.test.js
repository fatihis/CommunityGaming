import { render } from "@testing-library/react";
import { Input } from ".";

test("input component should render correctly with props", () => {
  const { getByPlaceholderText } = render(
    <Input
      classes="testclass"
      placeholder="testplaceholder"
      onChange={() => console.log("test")}
    ></Input>
  );

  expect(getByPlaceholderText("testplaceholder")).toBeInTheDocument();
});
