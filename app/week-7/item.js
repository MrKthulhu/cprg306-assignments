export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-[#1f1f2e] rounded-lg shadow flex justify-between items-center border border-purple-600">
      <div>
        <p className="font-medium text-purple-200">{name}</p>
        <p className="text-sm text-gray-400">
          Quantity: {quantity}
        </p>
      </div>
      <span className="px-2 py-1 bg-purple-700 text-white rounded text-xs capitalize">
        {category}
      </span>
    </li>
  );
}
