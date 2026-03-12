import React from "react";
import { Plus } from 'lucide-react';
import QuantityControl from "./QuantityControl";

export default function FoodCard({ item, addToCart, removeFromCart, cart }) {
    const cartItem = cart.find(cartItem => cartItem.id === item.id);

    return (
        <div key={item.id} className="bg-white rounded-2xl p-3 flex gap-4 shadow-sm border border-gray-100">
            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-orange-600 font-bold mt-1">Rp {item.price.toLocaleString()}</p>
                </div>
                <div className="self-end">
                    {cartItem ? (
                        <QuantityControl
                            quantity={cartItem.qty}
                            onIncrease={() => addToCart(item)}
                            onDecrease={() => removeFromCart(item)}
                        />
                    ) : (
                        <button
                            onClick={() => addToCart(item)}
                            className="bg-orange-500 text-white p-1.5 rounded-lg flex items-center gap-1 text-xs active:bg-orange-600"
                        >
                            <Plus size={16} /> Add
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}