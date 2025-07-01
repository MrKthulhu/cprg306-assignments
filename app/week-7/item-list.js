import Item from './item';

export default function ItemList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
