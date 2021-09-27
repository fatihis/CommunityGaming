import { render } from "@testing-library/react";
import { DetailContainer } from ".";
import { NomineeContextProvider } from "../../../utils/contexts/NomineeContext";
import nominees from "../../../utils/@db/tournaments.json";

test("DetailContainer component should render correctly with props", () => {
  localStorage.setItem("NomineeList", JSON.stringify(nominees));
  const { getByText } = render(
    <NomineeContextProvider>
      <DetailContainer id={1}></DetailContainer>
    </NomineeContextProvider>
  );

  expect(getByText("Winner :")).toBeInTheDocument();
});
test("DetailContainer component should include prescribed data", () => {
  localStorage.setItem("NomineeList", JSON.stringify(nominees));
  const { getByText } = render(
    <NomineeContextProvider>
      <DetailContainer id={1}></DetailContainer>
    </NomineeContextProvider>
  );

  expect(getByText("Valorant Tournament by RIOT")).toBeInTheDocument();
});
