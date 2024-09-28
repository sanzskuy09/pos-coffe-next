"use client";
import Image from "next/image";

import React from "react";

import ImageContoh from "@/assets/image/contoh.jpg";
import CardOrderItem from "../CardOrderItem";
import useCartStore from "@/store/useCartStore";

const SidebarCart = () => {
  const { totalDisc, totalPrice } = useCartStore();

  const convertToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="h-screen fixed top-0 bottom-0 right-0 w-96 border-l border-l-gray-200 flex flex-col overflow-y-hidden">
      <div className="min-h-28 flex items-center px-8 gap-2 border-b-2">
        <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center">
          UC
        </div>
        <div>
          <h1 className="text-lg font-semibold">User Cashier</h1>
          <p className="text-sm text-slate-400">user@gmail.com</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between px-8 py-4">
          <h3 className="text-xl font-semibold">Cart</h3>
          <p className="font-semibold text-slate-400">Order #1234</p>
        </div>

        <div className="flex flex-col  h-full">
          <div className="px-8 h-[calc(100vh-28rem)] overflow-y-auto">
            <CardOrderItem />
          </div>

          <div className="flex flex-col gap-4 py-8">
            <div className="flex justify-between px-8">
              <p className="text-gray-400 font-medium">Items</p>
              <p className="font-medium">{convertToRupiah(totalPrice)}</p>
            </div>
            <div className="flex justify-between px-8">
              <p className="text-gray-400 font-medium">Discount</p>
              <p className="font-medium">{convertToRupiah(totalDisc)}</p>
            </div>
            <hr className="px-8" />
            <div className="flex justify-between px-8">
              <p className="text-gray-400 font-semibold">Total</p>
              <p className="font-semibold text-primary">
                {convertToRupiah(totalPrice - totalDisc)}
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-primary w-[80%] text-white font-medium px-8 py-2 rounded-xl hover:bg-secondary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col">
        <div className="flex justify-between px-8 py-4">
          <h3 className="text-xl font-semibold">Cart</h3>
          <p className="font-semibold text-slate-400">Order #1234</p>
        </div>
        <hr />

        <div className="overflow-y-auto flex flex-col flex-1 gap-6 px-8 h-2/4 py-8">
          <CardOrderItem />
        </div>

        <div className="flex flex-col gap-4 pb-8 flex-auto">
          <hr />
          <div className="flex justify-between px-8">
            <p className="text-gray-400 font-medium">Items</p>
            <p className="font-medium">{convertToRupiah(totalPrice)}</p>
          </div>
          <div className="flex justify-between px-8">
            <p className="text-gray-400 font-medium">Discount</p>
            <p className="font-medium">{convertToRupiah(totalDisc)}</p>
          </div>
          <hr className="px-8" />
          <div className="flex justify-between px-8">
            <p className="text-gray-400 font-semibold">Total</p>
            <p className="font-semibold text-primary">
              {convertToRupiah(totalPrice - totalDisc)}
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-primary w-[80%] text-white font-medium px-8 py-2 rounded-xl hover:bg-secondary">
              Checkout
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SidebarCart;
