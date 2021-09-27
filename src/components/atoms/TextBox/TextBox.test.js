import { render } from "@testing-library/react";
import { TextBox } from ".";

test("TextBox component should render correctly with props", () => {
  const { getByText } = render(<TextBox classes="testclass">testtext</TextBox>);

  expect(getByText("testtext")).toBeInTheDocument();
});
