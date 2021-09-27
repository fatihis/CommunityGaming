import { render } from "@testing-library/react";
import { Paginationator } from ".";

test("Paginationator component should render correctly with props", () => {
  const { getByText } = render(
    <Paginationator nomineePerPage={6} currentPage={1} totalNominees={100} />
  );
  expect(getByText("6")).toBeInTheDocument();
});

test("Paginationator component should render correctly with 1000 Total Nominees and 6 nomineesPerPage", () => {
  const { getByText } = render(
    <Paginationator nomineePerPage={6} currentPage={1} totalNominees={1000} />
  );
  expect(getByText("16")).toBeInTheDocument();
});
