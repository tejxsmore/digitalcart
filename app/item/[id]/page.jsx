/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
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
  const inr = price * 170162;
  const pid = itemstore[id].pid - 1;
  let title = "";
  let link = "";
  let description = "";

  if (id < 95) {
    title = artStore.data[pid].title;
    description = artStore.data[pid].description;
    link = `/art/${pid + 1}`;
  } else if (id < 191) {
    title = gameStore.data[pid].title;
    description = gameStore.data[pid].description;
    link = `/game/${pid + 1}`;
  } else {
    title = photoStore.data[pid].title;
    description = photoStore.data[pid].description;
    link = `/photo/${pid + 1}`;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 py-4 px-8 text-white text-2xl ">
        <div className="sm:flex">
          <div className="sm:mr-10 rounded-xl sm:w-1/2 sm:mb-14">
            <div className="bg-slate-700 rounded-t-xl">
              <img src="/img/coins.png" alt="Eth" className="w-12 p-2" />
            </div>

            <img
              src={img}
              alt={price}
              className="rounded-b-xl border-slate-700 border-2"
            />
          </div>
          <div className="w-full">
            <Link href={link}>
              <div className="pb-6 sm:pt-0 pt-4 font-bold text-4xl">
                {title} <span className="text-gray-500">#{id + 1001}</span>
              </div>
            </Link>
            <div className="sm:flex w-full sm:gap-x-4 font-bold">
              <div className="bg-slate-700 p-4 rounded-xl sm:w-1/2 w-full sm:mb-0 mb-4">
                {price} ETH
              </div>
              <div className="bg-slate-700 p-4 rounded-xl sm:w-1/2 w-full">
                ₹ {Number(inr).toFixed(2)}
              </div>
            </div>
            <div className="bg-blue-700 p-4 rounded-xl mt-4 text-center font-bold">
              Buy Now
            </div>
            <div className="bg-slate-700 text-white p-4 rounded-xl mt-4 font-md text-lg">
              <p className="pb-4">By {title},</p>
              <p className="text-justify">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
