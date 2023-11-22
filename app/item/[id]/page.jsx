/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/app/components/Navbar";
import { usePathname } from "next/navigation";
import { itemstore } from "@/public/store/itemstore";
import { artStore } from "@/public/store/artStore";
import { gameStore } from "@/public/store/gameStore";
import { photoStore } from "@/public/store/photoStore";

export default function Item() {
  const path = usePathname();
  const id = path.slice(6) - 1001;
  const img = itemstore[id].img;
  const price = itemstore[id].price;
  const pid = itemstore[id].pid - 1;
  let title = "";

  if (id < 95) {
    title = artStore.data[pid].title;
  } else if (id < 191) {
    title = gameStore.data[pid].title;
  } else {
    title = photoStore.data[pid].title;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 py-4 px-8 text-white text-2xl font-bold pb-10">
        <div className="sm:flex">
          <div className=" bg-slate-700 sm:mr-10 rounded-xl">
            <img src="/img/coins.png" alt="Eth" className="w-8 m-2" />
            <img src={img} alt={price} className="rounded-b-xl" />
          </div>
          <div className="">
            <h1 className="pb-6 sm:pt-0 pt-4">
              {title} <span className="text-gray-500">#{id + 1001}</span>
            </h1>
            <div className="bg-slate-700 p-4 rounded-xl">{price} ETH</div>
            <div className="bg-blue-700 p-4 rounded-xl mt-4">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
