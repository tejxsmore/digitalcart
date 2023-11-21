import Navbar from "../components/Navbar";
import Art from "../components/elements/Art";
import Link from "next/link";
import Photography from "../components/elements/Photography";

export default function ArtComp() {
  return (
    <div>
      <Navbar />
      <Link href="/photo">
        <h3 className="py-4 px-8 bg-slate-900 text-white text-lg font-semibold pb-4">
          Trending in Photo
        </h3>
      </Link>
      <Photography />
    </div>
  );
}
