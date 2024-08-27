import React from "react";

function BundleOption({
  option,
  price,
  discount,
  selectedOption,
  handleOptionChange,
  isExpanded,
  mostPopular,
  children,
}) {
  return (
    <div
      className={`border p-4 rounded-lg cursor-pointer transition-all ${
        isExpanded ? "border-green-600 bg-green-50" : "border-gray-300"
      }`}
      onClick={() => handleOptionChange(option, price)}
    >
      <div className="flex items-center justify-between">
        <input
          type="radio"
          checked={selectedOption === option}
          onChange={() => handleOptionChange(option, price)}
          className="form-radio text-green-600"
        />
        <div className="flex flex-col ml-4">
          <p className="font-medium">{option} Pair</p>
          <p className="font-semibold text-green-600">DKK {price}.00</p>
        </div>
        {mostPopular && (
          <span className="bg-yellow-500 text-white text-xs py-1 px-2 rounded-full">
            Most Popular
          </span>
        )}
        <span className="text-green-600 font-semibold">{discount}</span>
      </div>
      {isExpanded && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default BundleOption;
