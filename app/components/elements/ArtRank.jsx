import { artStore } from "@/public/store/artStore";
import Rank from "./Rank";

export default function ArtRank() {
  const { data } = artStore;
  return (
    <div className="pb-8 bg-slate-900">
      {data.slice(0, 4).map((art) => (
        <Rank
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
  );
}
