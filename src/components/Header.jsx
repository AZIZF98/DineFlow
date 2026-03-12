import { React } from 'react';

export default function Header({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <header className="sticky top-0 bg-white p-4 shadow-sm z-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-orange-600">DineFlow</h1>
        <div className="bg-gray-100 p-2 rounded-full"><Search size={20} /></div>
      </div>
      <CategoryBar
        categories={categories}
        activeCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </header>
  )
}