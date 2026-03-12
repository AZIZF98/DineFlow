import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
    return (
        <div className="flex items-center gap-3 bg-orange-50 p-1 rounded-xl border border-orange-100">
            <button 
                onClick={onDecrease}
                className="w-8 h-8 flex items-center justify-center bg-white text-orange-600 rounded-lg shadow-sm active:scale-90 transition-transform"
            >
                {quantity === 1 ? <Trash2 size={16} className="text-red-500" /> : <Minus size={16} />}
            </button>

            <span className="font-bold text-gray-800 min-w-[20px] text-center">
                {quantity}
            </span>

            <button 
                onClick={onIncrease}
                className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-lg shadow-sm active:scale-90 transition-transform"
            >
                <Plus size={16} />
            </button>
        </div>
    )
}