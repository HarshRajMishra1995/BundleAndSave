import React, { useState } from "react";
import { AddToCartButton, BundleOption, BundleDropdowns } from "./components";

function App() {
  const [selectedOption, setSelectedOption] = useState(2);
  const [expandedOption, setExpandedOption] = useState(2); // State To Tracks the expanded box
  const [totalPrice, setTotalPrice] = useState(360);

  const handleOptionChange = (option, price) => {
    setSelectedOption(option);
    setTotalPrice(price);
    setExpandedOption(option); // Setting the expanded box to the clicked one
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white">
      <div className="relative flex items-center w-full max-w-md mb-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink px-2 text-lg font-semibold text-green-600">
          Bundle & Save
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="space-y-4 w-full max-w-md">
        <BundleOption
          option={1}
          price={195}
          discount="50% OFF"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          isExpanded={expandedOption === 1}
        >
          <BundleDropdowns pairs={2} />
        </BundleOption>
        <BundleOption
          option={2}
          price={345}
          discount="40% OFF"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          isExpanded={expandedOption === 2}
          mostPopular
        >
          <BundleDropdowns pairs={2} />
        </BundleOption>
        <BundleOption
          option={3}
          price={528}
          discount="60% OFF"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          isExpanded={expandedOption === 3}
        >
          <BundleDropdowns pairs={2} />
        </BundleOption>
      </div>
      <div className="w-full max-w-md mt-4">
        <div className="flex justify-between text-green-600">
          <span className="font-medium">Free 2 Day Shipping</span>
          <span className="font-medium text-black">
            Total: DKK {totalPrice}.00
          </span>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
}

export default App;
