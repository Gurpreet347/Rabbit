import React from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div 
      className={`fixed top-0 right-0 w-[30rem] sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform
      transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer} aria-label="Close Cart Drawer">
          <IoMdClose className="h-6 w-6 text-gray-600"/>
        </button>
      </div>

      {/* Cart Contents */}
      <div className="flex-grow overflow-y-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContents />
      </div>

      {/* Checkout Section */}
      <div className="p-4 bg-white">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
