import Image from "next/image";

export default function ArtCard({ title, img, floor, vol }) {
  return (
    <div className="rounded-xl bg-white sm:w-auto ">
      <img src={img} alt={title} className="rounded-t-xl rounded-b-none" />
      <div className="flex items-center">
        <h2 className="p-2 text-lg font-bold">{title}</h2>
        <img src="/img/check.png" alt="check" className="w-4 h-4" />
      </div>
      <div className="flex p-2 justify-between pb-2">
        <p className="text-md font-bold">
          <span className="block text-sm font-medium text-gray-500">Floor</span>
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
  );
}
