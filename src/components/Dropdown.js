import React from "react";

//Common Component for dropdown
function Dropdown({ label }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">{label}</label>
      <select className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50">
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
      </select>
    </div>
  );
}

export default Dropdown;
