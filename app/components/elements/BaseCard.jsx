/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function ArtCard({ id, type, title, img, floor, vol }) {
  return (
    <Link href={`/${type}/${id}`}>
      <div className="rounded-xl bg-slate-800 text-white sm:w-80 w-56">
        <img src={img} alt={title} className="rounded-t-xl h-80 w-full" />
        <div className="flex items-center">
          <h2 className="p-2 text-lg font-bold">{title}</h2>
          <img src="/img/check.png" alt="check" className="w-4 h-4" />
        </div>
        <div className="flex p-2 justify-between pb-2">
          <p className="text-md font-bold">
            <span className="block text-sm font-medium text-gray-500">
              Floor
            </span>
            {floor} ETH
          </p>
          <p className="text-md font-bold">
            <span className="block text-sm font-medium text-gray-500">
              Volume
            </span>
            {vol} ETH
          </p>
        </div>
      </div>
    </Link>
  );
}
