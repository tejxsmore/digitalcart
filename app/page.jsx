import Navbar from "./components/Navbar";
import Link from "next/link";
import Art from "./components/elements/Art";
import Gaming from "./components/elements/Gaming";
import Photography from "./components/elements/Photography";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Link href="/art">
        <h3 className="py-4 px-8 bg-slate-900 text-white text-lg font-semibold pb-4">
          Trending in Art
        </h3>
      </Link>
      <Art />
      <Link href="/game">
        <h3 className="py-4 px-8 bg-slate-900 text-white text-lg font-semibold pb-4">
          Trending in Gaming
        </h3>
      </Link>
      <Gaming />
      <Link href="/photo">
        <h3 className="py-4 px-8 bg-slate-900 text-white text-lg font-semibold pb-4">
          Trending in Photography
        </h3>
      </Link>
      <Photography />
    </div>
  );
}
