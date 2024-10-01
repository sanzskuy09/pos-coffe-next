"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import CardOrderItem from "../CardOrderItem";
import useCartStore from "@/store/useCartStore";
import useHistoryStore from "@/store/useHistoryStore";

import convertToRupiah from "@/utils/formatRupiah";
import { toast } from "react-toastify";

const SidebarCart = () => {
  const router = useRouter();

  const [isShow, setIsShow] = useState(false);
  const [orderID, setOrderID] = useState("");

  const { cart, totalDisc, totalPrice, resetCart } = useCartStore();
  const addToHistory = useHistoryStore((state) => state.addHistory);

  const time = new Date();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");
  const year = time.getFullYear();
  const formattedDate = `${month}${day}${year}`;

  const notify = () =>
    toast.success("Succeess to order!", {
      position: "top-right",
      autoClose: 2000, // Auto-close dalam 2 detik
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const historyData = {
    trxId: "TRX" + formattedDate + Math.floor(Math.random() * 1000),
    orderId: "#" + orderID,
    tanggal: `${day}-${month}-${year}`,
    status: "Completed",
    amount: totalPrice - totalDisc,
  };

  const handleAddHistory = (item) => {
    addToHistory(item);
    setOrderID(Math.floor(Math.random() * 10000));
    resetCart();
    setIsShow(!isShow);
    router.push("/order/history");

    notify();
  };

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleAddTransaction = async () => {
    try {
      await fetch("/api/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trxId: "TRX" + formattedDate + Math.floor(Math.random() * 1000),
          orderId: "#" + orderID,
          salesDate: `${day}-${month}-${year}`,
          status: "Completed",
          totalAmount: totalPrice - totalDisc,
        }),
      });

      resetCart();
      setIsShow(!isShow);
      // router.push("/order/history");
      notify();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setOrderID(Math.floor(Math.random() * 10000));
  }, []);

  return (
    <div className="bg-white h-screen fixed top-0 bottom-0 right-0 w-96 border-l border-l-gray-200 flex flex-col overflow-y-hidden">
      <div className="min-h-28 flex items-center px-8 gap-2 border-b">
        <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center">
          UC
        </div>
        <div>
          <h1 className="text-lg font-semibold">User Cashier</h1>
          <p className="text-sm text-slate-400">user@gmail.com</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between px-8 py-4">
          <h3 className="text-xl font-semibold">Cart</h3>
          <p className="font-semibold text-slate-400">Order #{orderID}</p>
        </div>

        <div className="flex flex-col h-full">
          <div className="px-8 h-[calc(100vh-28rem)] overflow-y-auto">
            <CardOrderItem />
          </div>

          <div className="flex flex-col gap-4 py-8">
            <div className="flex justify-between px-8">
              <p className="text-gray-400 font-medium">Items</p>
              <p className="font-medium">{convertToRupiah(totalPrice)}</p>
            </div>
            <div className="flex justify-between px-8">
              <p className="text-gray-400 font-medium">Discount</p>
              <p className="font-medium">{convertToRupiah(totalDisc)} -</p>
            </div>
            <hr className="px-8" />
            <div className="flex justify-between px-8">
              <p className="text-gray-400 font-semibold">Total</p>
              <p className="font-semibold text-primary">
                {convertToRupiah(totalPrice - totalDisc)}
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 justify-center mt-4">
              <button
                onClick={() => handleShow()}
                // onClick={notify}
                className="bg-primary w-[80%] text-white font-medium px-8 py-2 rounded-xl hover:bg-secondary disabled:bg-gray-400"
                disabled={cart.length === 0}
              >
                Checkout
              </button>
              <button onClick={() => resetCart()} className="text-gray-400">
                Batalkan Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>

      {isShow && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 capitalize">
                Konfirmasi Order
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-lg text-gray-500">
                  Apa kamu yakin ingin konfirmasi?
                </p>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <button
                  onClick={() => handleShow()}
                  className="px-4 py-2 bg-white text-gray-500 text-base font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Close
                </button>
                <button
                  // onClick={() => handleAddHistory(historyData)}
                  onClick={handleAddTransaction}
                  className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function Modal() {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 capitalize">
            Konfirmasi Order
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">
              Apa kamu yakin ingin konfirmasi?
            </p>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            {/* Navigates back to the base URL - closing the modal */}
            <button
              onClick={() => handleShow()}
              className="px-4 py-2 bg-white text-gray-500 text-base font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
            <button className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCart;
