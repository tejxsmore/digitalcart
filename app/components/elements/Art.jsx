import { artStore } from "@/public/store/artStore";
import ArtCard from "./ArtCard";
import Link from "next/link";

export default function Art() {
  const { data } = artStore;
  return (
    <div className="py-4 px-8 bg-slate-900">
      <Link href="/art">
        <h3 className="text-white text-lg font-semibold pb-4">
          Trending in Art
        </h3>
      </Link>
      <div className="flex gap-4 w-auto overflow-x-auto overflow-y-hidden">
        {data.map((art) => (
          <ArtCard
            key={art.id}
            id={art.id}
            title={art.title}
            img={art.img}
            floor={art.floor}
            vol={art.vol}
            sub={art.subitems}
          />
        ))}
      </div>
    </div>
  );
}
