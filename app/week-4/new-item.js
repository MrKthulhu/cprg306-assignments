"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-white mb-4 text-lg">{quantity}</div>

      <div className="flex gap-4">
        <button
          onClick={decrease}
          disabled={quantity <= 1}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          −
        </button>
        <button
          onClick={increase}
          disabled={quantity >= 20}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}
