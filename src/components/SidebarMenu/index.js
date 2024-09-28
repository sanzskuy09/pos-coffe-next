import React from "react";

import Link from "next/link";

const SidebarMenu = () => {
  const date = new Date().toDateString();

  const styleLink =
    "h-10 flex items-center px-8 font-medium text-lg hover:text-primary hover:border-r-4 hover:border-primary duration-200 transition";

  return (
    <div className="max-h-screen fixed bottom-0 top-0 left-0 w-72 border-r border-r-gray-200 ">
      <div className="h-28 flex flex-col items-center pt-4 gap-2 mb-10 border-b-2">
        <h1 className="text-3xl font-semibold">
          <span className="text-primary">POS.</span>COFFEE
        </h1>
        <p className="text-sm text-slate-400">{date}</p>
      </div>

      <div className="flex flex-col gap-4">
        <Link href={"/order/dashboard"} className={styleLink}>
          Dashboard
        </Link>
        <Link href={"/order/menu"} className={styleLink}>
          Menu
        </Link>
        <Link href={"/order/my-order"} className={styleLink}>
          My Orders
        </Link>
        <Link href={"/order/history"} className={styleLink}>
          History
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
