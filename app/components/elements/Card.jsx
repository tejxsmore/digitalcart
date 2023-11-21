import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Card({ id, pid, price, img }) {
  return (
    <Link href={`${id}`}>
      <div className="bg-white m-2 rounded-xl text-black font-semibold">
        <img
          src={img}
          alt={price}
          width={300}
          height={600}
          className="rounded-t-xl h-80"
        />
        <p className="p-2">#{id}</p>
        <h3 className="px-2 pb-2">{price} ETH</h3>
      </div>
    </Link>
  );
}
