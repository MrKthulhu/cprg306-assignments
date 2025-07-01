"use client";

import { useState } from 'react';
import items from './items.json';
import ItemList from './item-list';
import NewItem from './new-item';

export default function Page() {
  const [sortBy, setSortBy] = useState("category");
  const [itemsList, setItemsList] = useState(items);

  function handleAddItem(newItem) {
    setItemsList((prevItems) => [...prevItems, newItem]);
  }

  const sortedItems = [...itemsList].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">🛒 Shopping List</h1>

        <div className="mb-6">
          <p className="mb-2 text-sm text-purple-300">Sort by:</p>
          <div className="flex gap-4">
            <button
              onClick={() => setSortBy("name")}
              className={`px-4 py-2 rounded ${
                sortBy === "name" ? "bg-purple-700" : "bg-purple-900"
              }`}
            >
              Name
            </button>
            <button
              onClick={() => setSortBy("category")}
              className={`px-4 py-2 rounded ${
                sortBy === "category" ? "bg-purple-700" : "bg-purple-900"
              }`}
            >
              Category
            </button>
          </div>
        </div>

        <div className="mb-10">
          <NewItem onAddItem={handleAddItem} />
        </div>

        <ItemList items={sortedItems} />
      </div>
    </main>
  );
}
