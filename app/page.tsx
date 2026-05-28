import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <main className="flex flex-1 w-full max-w-6xl flex-col px-6 sm:px-12">
        <Hero />
        </main>
    </div>
  );
}
