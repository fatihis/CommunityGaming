import react from "react";
import { SimpleImage } from "../../atoms/SimpleImage";
import logo from "../../../assets/logo/logo-bg-removed-cropped.png";

export const Header = () => {
  return (
    <div className="w-full flex items-center justify-center h-12 bg-gray-300 mb-10 py-2">
      <SimpleImage classes={"img-fluid max-h-full"} image={logo} />
    </div>
  );
};
