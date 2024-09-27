"use client";
import Image from "next/image";

import React from "react";

import ImageContoh from "@/assets/image/contoh.jpg";
import CardOrderItem from "../CardOrderItem";
import useCartStore from "@/store/useCartStore";

const SidebarCart = () => {
  // const arrayList = [1, 2, 2, 2, 2];

  return (
    <div className="max-h-screen w-96 border-l border-l-gray-200 flex flex-col overflow-y-hidden">
      <div className="min-h-28 flex items-center px-8 gap-2 border-b-2">
        <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center">
          I
        </div>
        <div>
          <h1 className="text-lg font-semibold">User Admin</h1>
          <p className="text-sm text-slate-400">user@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Cart Header */}
        <div className="flex justify-between px-8 py-4">
          <h3 className="text-xl font-semibold">Cart</h3>
          <p className="font-semibold text-slate-400">Order #1234</p>
        </div>
        <hr />

        {/* List Order */}
        <div className="overflow-y-auto flex flex-col flex-1 gap-6 px-8 h-2/4 py-8">
          {/* {arrayList.map((item) => (
            ))} */}
          <CardOrderItem />
        </div>

        {/* Order Payment */}
        <div className="flex flex-col gap-4 pb-8 flex-auto">
          <hr />
          <div className="flex justify-between px-8">
            <p className="text-gray-400 font-medium">Items</p>
            <p className="font-medium">Rp. 40000</p>
          </div>
          <div className="flex justify-between px-8">
            <p className="text-gray-400 font-medium">Discount</p>
            <p className="font-medium">Rp. 40000</p>
          </div>
          <hr className="px-8" />
          <div className="flex justify-between px-8">
            <p className="text-gray-400 font-semibold">Total</p>
            <p className="font-semibold text-primary">Rp. 40000</p>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-primary w-[80%] text-white font-medium px-8 py-2 rounded-xl hover:bg-secondary">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCart;
