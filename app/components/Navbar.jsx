import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between text-lg p-4 items-center bg-blue-300">
      <div className="font-semibold">
        <a href="/">NFT ASSETS</a>
      </div>
      <div>
        <button className="border-2 border-black px-4 py-0.5 rounded-lg font-semibold">
          Login
        </button>
        <button className="mx-4">
          <Image src="/img/user.png" width={20} height={20} alt="User" />
        </button>
        <button>
          <Image src="/img/cart.png" width={20} height={20} alt="Cart" />
        </button>
      </div>
    </div>
  );
}
