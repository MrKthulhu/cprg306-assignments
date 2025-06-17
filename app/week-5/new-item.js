'use client';
import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  function increase() { if (quantity < 20) setQuantity(q => q + 1); }
  function decrease() { if (quantity > 1) setQuantity(q => q - 1); }

  function handleSubmit(e) {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName(''); setQuantity(1); setCategory('produce');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-12 p-6 bg-purple-50 rounded-lg shadow-lg text-black"
    >
      <label className="block mb-5">
        <span className="font-semibold">Item Name</span>
        <input
          type="text"
          value={name}
          required
          onChange={e => setName(e.target.value)}
          className="mt-1 w-full px-4 py-2 border border-purple-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
        />
      </label>

      <label className="block mb-5">
        <span className="font-semibold">Category</span>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="mt-1 w-full px-4 py-2 border border-purple-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
        >
          {[
            'Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods',
            'Canned Goods', 'Dry Goods', 'Beverages', 'Snacks',
            'Household', 'Other'
          ].map(cat => (
            <option
              key={cat.toLowerCase()}
              value={cat.toLowerCase()}
            >
              {cat}
            </option>
          ))}
        </select>
      </label>

      <div className="flex items-center justify-center mb-6">
        <button
          type="button"
          onClick={decrease}
          disabled={quantity <= 1}
          className="px-5 py-2 bg-purple-400 text-white rounded-l-lg hover:bg-purple-500 disabled:opaciy-50"
        >
          −
        </button>
        <span className="px-6 py-2 bg-white border-t border-b border-purple-300 text-black">
          {quantity}
        </span>
        <button
          type="button"
          onClick={increase}
          disabled={quantity >= 20}
          className="px-5 py-2 bg-purple-400 text-white rounded-r-lg hover:bg-purple-500 disabled:opacity-50"
        >
          +
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
      >
        Add Item
      </button>
    </form>
  );
}
