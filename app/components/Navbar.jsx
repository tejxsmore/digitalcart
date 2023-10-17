import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between text-lg py-4 px-8 items-center bg-slate-900 text-white">
      <div className="font-semibold">
        <a href="/">META ASSETS</a>
      </div>
      <div className="">
        <button className="mx-8 pt-2">
          <Image src="/img/profile.png" width={25} height={25} alt="Profile" />
        </button>
        <button>
          <Image src="/img/bag.png" width={25} height={25} alt="Bag" />
        </button>
      </div>
    </div>
  );
}
