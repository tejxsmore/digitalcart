import Navbar from "../components/Navbar";
import Art from "../components/elements/Art";
import Link from "next/link";

export default function ArtComp() {
  return (
    <div className="sm:h-screen bg-slate-900">
      <Navbar />
      <Link href="/art">
        <h3 className="py-4 px-8 bg-slate-900 text-white text-lg font-semibold pb-4">
          Trending in Art
        </h3>
      </Link>
      <Art />
    </div>
  );
}
