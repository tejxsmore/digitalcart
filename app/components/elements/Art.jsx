import { artStore } from "@/public/store/artStore";
import BaseCard from "./BaseCard";
import ArtRank from "./ArtRank";

export default function Art() {
  const { data } = artStore;
  return (
    <div className="py-4 px-8 bg-slate-900">
      {/* <ArtRank /> */}
      <div
        className="flex gap-4 w-auto overflow-x-auto
      overflow-y-hidden"
      >
        {data.map((art) => (
          <BaseCard
            key={art.id}
            id={art.id}
            type={art.type}
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
