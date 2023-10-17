import Navbar from "./components/Navbar";
import Art from "./components/elements/Art";
import Gaming from "./components/elements/Gaming";
import Photography from "./components/elements/Photography";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Art />
      <Gaming />
      <Photography />
    </div>
  );
}
