import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CategoryBar from '../components/CategoryBar';
import MenuList from '../components/MenuList';
import CartSheet from '../components/CartSheet';
import Items from '../Items.js';

const FoodMenu = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Main', 'Pasta', 'Drink', 'Snack'];
  
  const menuItems = Items;

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing.qty === 1) {
        return prev.filter(i => i.id !== item.id);
      }
      return prev.map(i => i.id === item.id ? { ...i, qty: i.qty - 1 } : i);
    });
  }

  const totalHarga = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalItem = cart.reduce((acc, item) => acc + item.qty, 0);

  const filteredMenuItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Header - Component 1 */}
      <header className="sticky top-0 bg-white p-4 shadow-sm z-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-orange-600">DineFlow</h1>
          <div className="bg-gray-100 p-2 rounded-full"><Search size={20} /></div>
        </div>
        {/* Categories - Component 2 */}
        <CategoryBar
          categories={categories}
          activeCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </header>

      {/* Menu List */}
      <MenuList
        menuItems={filteredMenuItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
      />

      {/* Floating Cart - Component 4 */}
      <CartSheet
        cart={cart}
        totalHarga={totalHarga}
        totalItem={totalItem}
      />
    </div>
  );
};

export default FoodMenu;