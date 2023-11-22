"use client";
// import Navbar from "@/app/components/Element/Navbar";
import { usePathname } from "next/navigation";
import { photoStore } from "@/public/store/photoStore";
import Navbar from "@/app/components/Navbar";
import Card from "@/app/components/elements/Card";

export default function ArtId() {
  const path = usePathname();
  const id = path.slice(7) - 1;
  const photopiece = photoStore.data[id].subitems;

  return (
    <div>
      <Navbar />
      <div className="sm:flex py-4 px-8 bg-slate-900">
        <div className="bg-slate-900 pr-8 pb-4">
          <button className="py-2 px-4  bg-slate-700 rounded-xl text-white font-semibold">
            All
          </button>
        </div>
        <div className=" flex flex-wrap bg-slate-900">
          {photopiece.map((photo) => (
            <Card
              key={photo.id}
              id={photo.id}
              pid={photo.pid}
              price={photo.price}
              img={photo.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
