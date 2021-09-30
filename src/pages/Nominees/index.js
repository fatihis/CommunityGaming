import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/organisms/Header";
import { ItemList } from "../../components/organisms/ItemList";
import { SortAddButtonContainer } from "../../components/organisms/SortAddButtonContainer";
import { NomineeContext } from "../../utils/contexts/NomineeContext";
export default function Nominees() {
  const { page } = useParams();
  const nomineeCtx = useContext(NomineeContext);
  useEffect(() => {
    nomineeCtx.setCurrentPage(page);
  }, [page]);
  return (
    <div className="w-full h-screen">
      <Header />
      <SortAddButtonContainer />
      <ItemList page={page}></ItemList>
    </div>
  );
}
