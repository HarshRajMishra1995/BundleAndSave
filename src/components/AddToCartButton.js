import React from "react";

//Button Component for Adding cart
function AddToCartButton() {
  return (
    <button className="w-full py-3 mt-4 text-white bg-green-700 hover:bg-green-600 rounded-lg transition duration-300 ease-in-out focus:outline-none">
      + Add to Cart
    </button>
  );
}

export default AddToCartButton;
