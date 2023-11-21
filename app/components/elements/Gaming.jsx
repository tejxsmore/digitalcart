import { gameStore } from "@/public/store/gameStore";
import BaseCard from "./BaseCard";

export default function Gaming() {
  const { data } = gameStore;
  return (
    <div className="py-4 px-8 bg-slate-900">
      <div
        className="flex gap-4 w-auto overflow-x-auto
      overflow-y-hidden"
      >
        {data.map((game) => (
          <BaseCard
            key={game.id}
            id={game.id}
            type={game.type}
            title={game.title}
            img={game.img}
            floor={game.floor}
            vol={game.vol}
            sub={game.subitems}
          />
        ))}
      </div>
    </div>
  );
}
