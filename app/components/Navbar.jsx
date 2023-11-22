import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between text-lg py-4 px-8 items-center bg-slate-900 text-white">
        <div className="font-semibold">
          <a href="/">META ASSETS</a>
        </div>
        <div className="">
          <button className="mx-8 pt-2">
            <Image
              src="/img/profile.png"
              width={25}
              height={25}
              alt="Profile"
            />
          </button>
          <button>
            <Image src="/img/bag.png" width={25} height={25} alt="Bag" />
          </button>
        </div>
      </div>
      <div className="py-4 px-8 flex bg-slate-900 text-white font-semibold">
        <button className="py-2 px-4 mr-2 bg-slate-700 rounded-xl">
          <Link href="/">All</Link>
        </button>
        <button className="py-2 px-4 mx-2 bg-slate-700 rounded-xl">
          <Link href="/art">Art</Link>
        </button>
        <button className="py-2 px-4 mx-2 bg-slate-700 rounded-xl">
          <Link href="/game">Gaming</Link>
        </button>
        <button className="py-2 px-4 ml-2 bg-slate-700 rounded-xl">
          <Link href="/photo">Photography</Link>
        </button>
      </div>
    </div>
  );
}
