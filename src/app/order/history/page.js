"use client";
import React from "react";
import useHistoryStore from "@/store/useHistoryStore";
import convertToRupiah from "@/utils/formatRupiah";

const History = () => {
  const { history } = useHistoryStore();

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
          <h1 className="text-3xl font-semibold mb-8">History Order</h1>
        </div>

        <div>
          <table className="w-full border-collapse bg-white shadow-md">
            <thead>
              <tr className="text-left bg-primary text-white">
                <th className="p-3">No.</th>
                <th className="p-3">Transaksi ID</th>
                <th className="p-3">Order ID</th>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Status</th>
                <th className="p-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-50 transition-all"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.trxId}</td>
                  <td className="p-3">{item.orderId}</td>
                  <td className="p-3">{item.tanggal}</td>
                  <td
                    className={`p-3 ${
                      item.status === "Completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="p-3">{convertToRupiah(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
