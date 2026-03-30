export default function CategoryTabs() {
  const tabs = [
    "All",
    "Ice Coffee",
    "American",
    "Café Noir",
    "Brewed Coffee",
  ];

  return (
    <div className="flex gap-2 mb-4 flex-wrap bg-white p-4 rounded-2xl shadow">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className={`px-4 py-1 rounded-full text-sm ${
            i === 0
              ? "bg-orange-100 text-orange-500"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}