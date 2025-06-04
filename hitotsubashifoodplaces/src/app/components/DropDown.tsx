import { JSX } from "react";

interface DropDownProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  multiple?: boolean;
  value?: string | string[];
}

function DropDown({
  handleChange,
  multiple = false,
  value,
}: DropDownProps): JSX.Element {
  return (
    <div className="w-full p-5 ">
      <select
        onChange={handleChange}
        value={value?.[0] ?? ""}
        className="w-full bg-black text-white border border-white rounded-md px-5 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
      >
        <option value="ALL">All</option>
        <option value="italian">Italian</option>
        <option value="japanese">Japanese</option>
        <option value="chinese">Chinese</option>
      </select>
    </div>
  );
}

export default DropDown;
