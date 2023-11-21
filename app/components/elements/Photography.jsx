import { photoStore } from "@/public/store/photoStore";
import BaseCard from "./BaseCard";

export default function Photography() {
  const { data } = photoStore;
  return (
    <div className="py-4 px-8 bg-slate-900">
      <div
        className="flex gap-4 w-auto overflow-x-auto
      overflow-y-hidden"
      >
        {data.map((photo) => (
          <BaseCard
            key={photo.id}
            id={photo.id}
            type={photo.type}
            title={photo.title}
            img={photo.img}
            floor={photo.floor}
            vol={photo.vol}
            sub={photo.subitems}
          />
        ))}
      </div>
    </div>
  );
}
