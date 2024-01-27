import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <section className="grid grid-cols-4 gap-4" >
        <div className="p-3 border border-primary-muted rounded-md">
            <Image src="/img1.jpg" alt="nft" sizes="100vw" height={300} width={300}/>
            <p className="mt-4 text-lg text-secondary-muted font-semibold">Title</p>
            <p className="mt-2 text-muted-foreground">Short Description of the NFT</p>
            <p className="mt-2 font-bold">$ 44</p>
            <Button className="p-3 mt-4">Buy Now</Button>
        </div>
        
        </section>
    </>
  )
}

export default page