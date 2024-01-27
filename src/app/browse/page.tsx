import Image from "next/image"
import pic from "../../../public/img1.jpg"
import { Button } from "@/components/ui/button"


const page = () => {
  return (
    <section className="grid grid-cols-4 gap-4" >
        <div className="p-3 border border-primary-muted rounded-md">
            <Image src={pic} alt="nft" sizes="100vw"/>
            <p className="mt-4 text-lg text-secondary-muted font-semibold">Title</p>
            <p className="mt-2 text-muted-foreground">Short Description of the NFT</p>
            <p className="mt-2 font-bold">$ 44</p>
            <Button className="p-3 mt-4">Buy Now</Button>
        </div>
        
    </section>
  )
}

export default page