import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartSheet({ totalItem, totalHarga }) {
  const cartCtx = useCart();
  return (
    cartCtx.cart.length > 0 && (
      <div className="fixed bottom-6 left-4 right-4 bg-gray-900 text-white p-4 rounded-2xl shadow-2xl flex justify-between items-center animate-bounce-short">
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItem}
            </span>
          </div>
          <div>
            <p className="text-xs text-gray-400">Total Pembelian</p>
            <p className="font-bold text-sm text-orange-400">
              Rp {totalHarga.toLocaleString()}
            </p>
          </div>
        </div>
        <button className="bg-orange-500 px-6 py-2 rounded-xl font-bold text-sm">
          Cek Keranjang
        </button>
      </div>
    )
  );
}
