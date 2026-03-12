import React from "react";

export default function CategoryBar({ categories, activeCategory, onSelect }) {
    return (
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
                <button 
                key={cat} 
                onClick={() => onSelect(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap active:scale-95 ${
                    activeCategory === cat
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
                      : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  }`}>
                    {cat}
                </button>
            ))}
        </div>
    )
}