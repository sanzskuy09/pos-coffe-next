"use client";
import React from "react";

import useStore from "@/store/useStore";

const Dashboard = () => {
  const { count, increaseCount, resetCount } = useStore();

  return (
    <div>
      ini dashboard
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Dashboard;
