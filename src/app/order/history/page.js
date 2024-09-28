"use client";
import React from "react";
import useHistoryStore from "@/store/useHistoryStore";

const History = () => {
  const { history } = useHistoryStore();

  const convertToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  console.log("history >>>", history);
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-semibold mb-8">HIstory Order</h1>
      </div>

      <div className="">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>No.</th>
              <th>Transaksi ID</th>
              <th>Order ID</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.trxId}</td>
                <td>{item.orderId}</td>
                <td>{item.tanggal}</td>
                <td>{item.status}</td>
                <td>{convertToRupiah(item.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
