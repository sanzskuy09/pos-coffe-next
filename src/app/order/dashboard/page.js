"use client";
import React from "react";
import Image from "next/image";

import useCartStore from "@/store/useCartStore";

import dataMenuCoffe from "@/config/data-menu.json";

const Dashboard = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const { cart, totalItems, removeFromCart } = useCartStore();

  const handleAddToCart = (item) => {
    addToCart(item); // Tambah item ke state cart
  };

  const convertToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-8">
        <button className="bg-primary text-white py-3 px-8 rounded-full font-semibold">
          Coffee
        </button>
        <button className="border border-slate-400 text-slate-500 py-3 px-8 rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary">
          Non Coffee
        </button>
        <button className="border border-slate-400 text-slate-500 py-3 px-8 rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary">
          Food
        </button>
        <button className="border border-slate-400 text-slate-500 py-3 px-8 rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary">
          Dessert
        </button>
      </div>

      <div>
        <h1 className="text-3xl font-semibold mb-8">Coffe Menu</h1>

        <div
          style={{
            display: "grid",
            gridGap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, auto))",
          }}
        >
          {/* Menu List */}
          {dataMenuCoffe.map((item) => (
            <div
              key={item.id}
              className="bg-white h-56 rounded-xl p-4 flex gap-4 max-w-[400px]"
            >
              <div className="relative w-32 h-full rounded-xl">
                <Image
                  src={item.image}
                  alt="coffe-img"
                  fill
                  priority
                  // unoptimized
                  style={{
                    objectFit: "cover", // cover, contain, none
                    borderRadius: "12px",
                  }}
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <h5 className="text-sm text-gray-500">{item.desc}</h5>
                  <p className="font-medium">{convertToRupiah(item.price)}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-primary text-white py-3 px-8 rounded-xl font-semibold hover:bg-secondary"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}

          {/* End Menu List */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
