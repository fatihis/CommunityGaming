import react from "react";

export const InputBox = ({ header, onChange }) => {
  return (
    <div className="simple-input-box-container flex flex-col">
      <p className="text-xl text-left blooming-elegant">{header}</p>
      <input
        className="border-2 min-w-full h-10 px-2"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
