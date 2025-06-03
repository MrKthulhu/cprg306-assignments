import ItemList from './items-list';

export default function Page() {
  return (
    <main className="p-6 bg-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">🛒 Shopping List</h1>
      <ItemList />
    </main>
  );
}
