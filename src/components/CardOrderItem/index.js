"use client";
import React from "react";

import Image from "next/image";
import ImageContoh from "@/assets/image/contoh.jpg";

const CardOrderItem = () => {
  return (
    <div className="flex items-center">
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
  );
};

export default CardOrderItem;
