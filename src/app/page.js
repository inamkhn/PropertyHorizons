import Hero from "@/components/Hero";
import HomeProporties from "@/components/HomeProporties";
import InfoBoxes from "@/components/InfoBoxes";
import Image from "next/image";

export default function Home() {
  return <div>
    <Hero/>
    <InfoBoxes/>
    <HomeProporties/>
  </div>;
}
