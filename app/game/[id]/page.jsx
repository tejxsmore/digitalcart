"use client";
// import Navbar from "@/app/components/Element/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gameStore } from "@/public/store/gameStore";
import Navbar from "@/app/components/Navbar";
import Card from "@/app/components/elements/Card";

export default function ArtId() {
  const path = usePathname();
  const id = path.slice(6) - 1;
  const gamepiece = gameStore.data[id].subitems;

  return (
    <div>
      <Navbar />
      <div className="py-4 px-8 flex flex-wrap bg-slate-900">
        {gamepiece.map((game) => (
          <Card
            key={game.id}
            id={game.id}
            pid={game.pid}
            price={game.price}
            img={game.img}
          />
        ))}
      </div>
    </div>
  );
}
