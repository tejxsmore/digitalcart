import { artStore } from "@/public/store/artStore";
import ArtCard from "./ArtCard";

export default function Art() {
  const { data } = artStore;
  return (
    <div className="p-4 bg-slate-900">
      <h1 className="text-white text-lg font-semibold pb-4">Trending in Art</h1>
      <div className="flex gap-4 w-auto overflow-x-auto overflow-y-hidden">
        {data.map((art) => (
          <ArtCard
            key={art.id}
            title={art.title}
            img={art.img}
            floor={art.floor}
            vol={art.vol}
          />
        ))}
      </div>
    </div>
  );
}
