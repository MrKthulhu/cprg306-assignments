"use client";

import { useState } from "react";
import items from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

function cleanName(raw) {
  if (!raw) return "";
  let name = String(raw);
  name = name.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");
  name = name.split(",")[0];
  return name.trim().toLowerCase();
}

export default function Page() {
  const [sortBy, setSortBy] = useState("category");
  const [itemsList, setItemsList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItemsList((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item) {
    setSelectedItemName(cleanName(item?.name));
  }

  const sortedItems = [...itemsList].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">🛒 Shopping List</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/*controls + list */}
          <div>
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

            <ItemList items={sortedItems} onItemSelect={handleItemSelect} />
          </div>

          {/* meal ideas */}
          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
