"use client"

import Image from "next/image"
import pic from "../../../public/img1.jpg"
import { Button } from "@/components/ui/button"
import { isEmpty } from 'lodash';
import useMemberships from "../../../hooks/useMemberships";
import axios from "axios";
import { useEffect, useState } from "react";

interface Membership {
  id: string
  title: string;
  subtitle: string;
  benefits: string;
  address: string;
  price: string;
  nfturl: string;
}

const page = () => {

  const [mem, setMemberships] = useState<Membership[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/memberships'); 
        const data = await response.json();
        console.log("hello  from fetch")
        console.log(data)
        setMemberships(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching memberships:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="grid grid-cols-4 gap-4" >
      {mem !== null && mem.map((item, idx) => (
        <div className="p-3 border border-primary-muted rounded-md" key={idx}>
        <Image src={item?.nfturl} alt="nft" sizes="100vw" width={300} height={400}/>
        <p className="mt-4 text-lg text-secondary-muted font-semibold">{item?.title}</p>
        <p className="mt-2 text-muted-foreground">{item?.subtitle}</p>
        <p className="mt-2 text-muted-foreground">{item?.benefits}</p>
        <p className="mt-2 font-bold">{item?.price}{" "}ETH</p>
        <Button className="p-3 mt-4">Buy Now</Button>
    </div>
      ))}
        
    </section>
  )
}

export default page