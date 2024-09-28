// "use client";
import React from "react";
import Image from "next/image";

import convertToRupiah from "@/utils/formatRupiah";
import dataMenuCoffe from "@/config/data-menu.json";

const Menu = () => {
  return (
    <div>
      <div className="h-28 flex items-center px-8 gap-2 bg-white border-b">
        <div className="bg-gray-200 py-4 px-8 w-96 rounded-full relative ">
          <p className="text-slate-400">Search</p>

          <div className="bg-primary absolute top-0 bottom-0 right-0 w-28 flex justify-center items-center rounded-full font-semibold text-white">
            Filter
          </div>
        </div>
      </div>
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <p className="font-medium">
                      {convertToRupiah(item.price, 2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* End Menu List */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
