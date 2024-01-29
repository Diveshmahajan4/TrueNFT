"use client"

import { useState } from "react";
import { useAccount } from "wagmi"

const page = () => {

    const { isConnected, address} = useAccount();

  return (
    <div>
        {/* {address} */}
    </div>
  )
}

export default page