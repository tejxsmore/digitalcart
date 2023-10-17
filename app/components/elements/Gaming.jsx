import { gameStore } from "@/public/store/gameStore";
import ArtCard from "./ArtCard";

export default function Gaming() {
  const { data } = gameStore;
  return (
    <div className="py-4 px-8 bg-slate-900">
      <h1 className="text-white text-lg font-semibold pb-4">
        Trending in Gaming
      </h1>
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
