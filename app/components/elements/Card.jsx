import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Card({ id, pid, price, img }) {
  return (
    <Link href={`/item/${id}`}>
      <div className="bg-slate-800 sm:m-2 m-0 sm:mb-2 mb-4 rounded-xl text-white font-semibold">
        <img
          src={img}
          alt={price}
          // width={300}
          // height={600}
          className="rounded-t-xl sm:w-80 w-auto"
        />
        <div className="flex justify-between items-center py-1">
          <h3 className="p-2">{price} ETH</h3>
          <button className="py-0.25 px-2 m-2 border-whiter border-2 rounded-lg text-sm font-normal">
            #{id}
          </button>
        </div>
      </div>
    </Link>
  );
}
