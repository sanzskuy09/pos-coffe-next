"use client";
import React from "react";

import Image from "next/image";
import useCartStore from "@/store/useCartStore";
import convertToRupiah from "@/utils/formatRupiah";

const CardOrderItem = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const { cart, totalItems, removeFromCart } = useCartStore();

  const handleAddToCart = (item) => {
    addToCart(item); // Tambah item ke state cart
  };

  return (
    <div>
      {totalItems === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 mt-12">
          <div className="w-32 h-32 relative">
            <Image
              src={"/icon/empty.svg"}
              alt="empty-cart"
              fill // Pertahankan rasio aspek
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="text-gray-400">Cart is empty</p>
        </div>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="relative w-32 h-32">
                <Image
                  src={item.image}
                  alt="coffe-img"
                  fill
                  priority
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="bg-slate-500 rounded-xl object-cover"
                />
              </div>

              <div className="flex flex-col justify-between p-4 h-full w-full">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-slate-400">Small - 200g</p>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <p className="font-medium">
                    {convertToRupiah(item.price * item.quantity)}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeFromCart(item)}
                      className="border border-slate-400 px-2 rounded-full"
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="border border-slate-400 px-2 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CardOrderItem;
