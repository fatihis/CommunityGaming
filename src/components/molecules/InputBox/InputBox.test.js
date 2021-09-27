import { render } from "@testing-library/react";
import { InputBox } from ".";

test("InputBox component should render correctly with props", () => {
  const { getByText } = render(
    <InputBox onChange={() => console.log("s")} header={"testtext"} />
  );

  expect(getByText("testtext")).toBeInTheDocument();
});
