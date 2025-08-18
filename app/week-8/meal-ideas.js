"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.meals ?? [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const list = await fetchMealIdeas(ingredient);
      if (isMounted) setMeals(list);
    })();
    return () => { isMounted = false; };
  }, [ingredient]);

  return (
    <div className="p-4 bg-[#1f1f2e] border border-purple-600 rounded-lg text-purple-100">
      <h2 className="font-semibold text-lg mb-3 text-purple-300">
        Meal Ideas{ingredient ? `: ${ingredient}` : ""}
      </h2>

      {!ingredient && <p className="text-purple-200/80">Select an item to see ideas.</p>}
      {ingredient && meals.length === 0 && <p className="text-purple-200/80">No meals found.</p>}

      <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
        {meals.map((m) => (
          <li
            key={m.idMeal}
            className="flex items-center gap-3 p-2 rounded hover:bg-purple-900/30"
          >
            <img
              src={m.strMealThumb}
              alt={m.strMeal}
              className="w-12 h-12 rounded object-cover border border-purple-700"
            />
            <span className="text-purple-100">{m.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
