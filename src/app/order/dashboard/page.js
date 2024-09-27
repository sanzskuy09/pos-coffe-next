"use client";
import React from "react";

import useStore from "@/store/useStore";
import useCartStore from "@/store/useCartStore";

const Dashboard = () => {
  // const addToCart = useCartStore((state) => state.addToCart);

  const dataCoffe = [
    { id: 1, name: "Cappucino", price: 5000 },
    { id: 2, name: "Latte", price: 5000 },
    { id: 3, name: "Mocca", price: 5000 },
  ];
  return (
    // <div>
    //   ini dashboard
    //   <h1>Count: {count}</h1>
    //   <button onClick={increaseCount}>Increase</button>
    //   <button onClick={resetCount}>Reset</button>
    // </div>
    <div>
      <h1>Menu Coffe</h1>

      <div>
        {dataCoffe.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
