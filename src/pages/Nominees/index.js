import React from "react";
import { useParams } from "react-router";
import { Header } from "../../components/organisms/Header";
import { ItemList } from "../../components/organisms/ItemList";
import { SortAddButtonContainer } from "../../components/organisms/SortAddButtonContainer";
export default function Nominees() {
  let { page } = useParams();
  return (
    <div className="w-full h-screen">
      <Header />
      <SortAddButtonContainer />
      <ItemList page={page}></ItemList>
    </div>
  );
}
