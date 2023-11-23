"use client";
// import Navbar from "@/app/components/Element/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { artStore } from "@/public/store/artStore";
import Navbar from "@/app/components/Navbar";
import Card from "@/app/components/elements/Card";

export default function ArtId() {
  const path = usePathname();
  const id = path.slice(5) - 1;
  const artpiece = artStore.data[id].subitems;

  return (
    <div>
      <Navbar />
      <div className="sm:flex py-4 px-8 bg-slate-900">
        <div className="bg-slate-900 pr-4 sm:pb-4 pb-8">
          <button className="py-2 px-4  bg-slate-700 rounded-xl text-white font-semibold">
            All
          </button>
        </div>
        <div className=" flex flex-wrap bg-slate-900">
          {artpiece.map((art) => (
            <Card
              key={art.id}
              id={art.id}
              pid={art.pid}
              price={art.price}
              img={art.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
