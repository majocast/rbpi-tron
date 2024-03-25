import Image from "next/image";
import SoloImg from "../assets/main-solo.png";
import CenterImage from "./CenterImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-center min-h-screen">
        <CenterImage img={SoloImg} alt="Marc Castro Headshot"/>
      </div>
    </main>
  );
}
