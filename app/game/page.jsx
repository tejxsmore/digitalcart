import Navbar from "../components/Navbar";
import Link from "next/link";
import Gaming from "../components/elements/Gaming";

export default function ArtComp() {
  return (
    <div className="sm:h-screen bg-slate-900">
      <Navbar />
      <Link href="/game">
        <h3 className="py-4 px-8 bg-slate-900 text-white text-lg font-semibold pb-4">
          Trending in Gaming
        </h3>
      </Link>
      <Gaming />
    </div>
  );
}
