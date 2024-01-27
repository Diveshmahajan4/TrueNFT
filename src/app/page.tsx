import Particles from "@/components/Particles";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main>
    <div className=" h-screen ">
        <div className="relative isolate px-6 pt-20 lg:px-8">
          {/* nav */}
          

          <Particles
            className="absolute  inset-0 -z-10 animate-fade-in"
            quantity={100}
          />

          <div className="mx-auto  ">
            <h1 className="z-10 text-center  animate-fade-in pt-8   text-zinc-200  font-display text-4xl md:text-6xl mt-2  font-bold tracking-tight  md:text-center  ">
              TrueNFT
            </h1>

            <div className="md:mt-6 md:mb-6 my-24   text-center animate-fade-in">
              <h2 className="text-xl text-zinc-500 ">
              Your Gateway to NFT Memberships Marketplace <br/>Mint, List, and Enjoy Exclusive Benefits!
              </h2>
            </div>

            <div className="items-center flex justify-center">
              <Button variant='outline' className="px-4 py-2"><Link href='/browse'>Browse latest NFTs</Link></Button>
            </div>

          </div>
          
        </div>
      </div>

   </main>
  );
}
