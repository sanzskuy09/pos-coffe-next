import React from "react";

import Link from "next/link";

const SidebarMenu = () => {
  const date = new Date().toDateString();
  return (
    <div className="h-screen w-72 border-r-2 border-r-gray-400">
      <div className="h-40 flex flex-col items-center pt-4 gap-2">
        <h1 className="text-3xl font-semibold">POS COFFEE</h1>
        <p className="text-sm">{date}</p>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href={"/order/dashboard"}
          className="bg-red-400 h-14 flex items-center px-8"
        >
          Dashboard
        </Link>
        <Link href={"/order/menu"}>Menu</Link>
        <Link href={"/order/my-order"}>My Orders</Link>
        <Link href={"/order/history"}>History</Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
