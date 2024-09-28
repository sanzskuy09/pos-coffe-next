// "use client";
import React from "react";
import Image from "next/image";

import dataMenuCoffe from "@/config/data-menu.json";

const Menu = () => {
  const convertToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-semibold mb-8">Menu List</h1>

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
              className="bg-white h-52 rounded-xl p-4 flex gap-4 max-w-[400px]"
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
              </div>
            </div>
          ))}

          {/* End Menu List */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
