import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

function Home () {
  return(
    <div className="h-screen">
    <Header />

    <div className="flex h-[80%]">
      <div className="w-1/2 flex flex-col justify-center items-start m-12 ">
      <h1 className="text-[37.84px] font-serif text-[#000000] font-[700] leading-[62.24px] ">
        IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      <p className="text-[29.24px] w-[700px] text-[#787054] leading-[48.1px] trackin-[2.5%] mb-5 ">
    An example of intricate workmanship and detail,elegant necklaces and long and short chains 
        form a part of our desirable collection.</p>
      <button className="text-[25.8px] bg-[#A29875] text-[#FFFFFF] px-10 rounded-md">Explore Now</button>
   </div>

   <div className="w-1/2 flex justify-center items-center bg-[#FFFFFF]">
    <Image src={"/images/figma5.svg"} alt="hero image" width={300} height={573.59} className="rounded-ss-3xl rounded-br-3xl"/>
   </div>
    </div>
    </div>
  )
}

export default Home