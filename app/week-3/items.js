export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-purple-100 text-purple-900 p-4 mb-3">
      <p className="font-semibold text-lg">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
