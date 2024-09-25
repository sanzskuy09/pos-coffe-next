import Image from "next/image";
import React from "react";

import ImageContoh from "@/assets/image/contoh.jpg";

const SidebarCart = () => {
  return (
    <div className="h-screen w-96 border-l border-l-gray-200 flex flex-col">
      <div className="h-28 flex items-center px-8 gap-2 mb-10 border-b-2">
        <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center">
          I
        </div>
        <div>
          <h1 className="text-lg font-semibold">User Admin</h1>
          <p className="text-sm text-slate-400">user@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between px-8 mb-6">
          <h3 className="text-xl font-semibold">Cart</h3>
          <p className="font-semibold text-slate-400">Order #1234</p>
        </div>

        {/* list Order */}
        <div className=" flex-grow overflow-y-auto flex flex-col gap-6">
          <div className="flex items-center px-8 ">
            <Image
              src={ImageContoh}
              alt="asd"
              // width={100}
              // height={100}
              className="bg-slate-500 rounded-xl object-cover w-32 h-32"
            />

            <div className="flex flex-col justify-between p-4 h-full w-full">
              <div>
                <h2 className="text-lg font-semibold">Cappucino</h2>
                <p className="text-sm text-slate-400">Small - 200g</p>
              </div>

              <div className="flex justify-between w-full">
                <p className="font-medium">Rp. 40K</p>
                <div className="flex items-center gap-3">
                  <p className="border border-slate-400 px-2 rounded-full">-</p>
                  <p>1</p>
                  <p className="border border-slate-400 px-2 rounded-full">+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* order payment */}
        <div className="flex flex-col gap-4 py-8">
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
