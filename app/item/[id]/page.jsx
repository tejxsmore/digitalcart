/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/app/components/Navbar";
import { usePathname } from "next/navigation";
import { itemstore } from "@/public/store/itemstore";

export default function Item() {
  const path = usePathname();
  const id = path.slice(6) - 1001;
  const img = itemstore[id].img;
  const price = itemstore[id].price;

  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 py-4 px-8 text-white text-2xl font-bold">
        <img src={img} alt={price} className="rounded-xl" />
        <h1 className="py-8">
          <span className="text-gray-500">Price - </span> {price} ETH
        </h1>
      </div>
    </div>
  );
}
