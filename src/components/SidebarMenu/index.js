"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const SidebarMenu = () => {
  const pathname = usePathname();
  const date = new Date().toDateString();
  // const isActive = false;

  const styleLink =
    "h-10 flex items-center px-8 font-medium text-lg hover:text-primary hover:border-r-4 hover:border-primary duration-200 transition";

  const isActive = (path) =>
    pathname === path ? "text-primary border-r-4 border-primary" : "";

  return (
    <div className="max-h-screen fixed bottom-0 top-0 left-0 w-72 border-r border-r-gray-200 ">
      <div className="h-28 flex flex-col items-center pt-4 gap-2 mb-10 ">
        <h1 className="text-3xl font-semibold">
          <span className="text-primary">POS.</span>COFFEE
        </h1>
        <p className="text-sm text-slate-400">{date}</p>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href={"/order/dashboard"}
          className={`${styleLink} ${isActive("/order/dashboard")}`}
        >
          Dashboard
        </Link>
        <Link
          href={"/order/menu"}
          className={`${styleLink} ${isActive("/order/menu")}`}
        >
          Menu
        </Link>
        {/* <Link href={"/order/my-order"} className={`${styleLink} ${isActive("/order/my-order")}`}>
          My Orders
        </Link> */}
        <Link
          href={"/order/history"}
          className={`${styleLink} ${isActive("/order/history")}`}
        >
          History
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
