import React from "react";

import Imag1 from "../assest/pic1.png";
import Imag2 from "../assest/pic 2.png"
import Imag3 from "../assest/pic 3.png"

const StreamPage = () => {
  return (
    <>
    
    <div className=" w-full h-full mx-auto xl:bg-[#141414]  bg-[#141414]">
      <div className="flex items-start xl:items-center flex-col w-[480px] xl:w-[1500px]  justify-center">
        <h1 className="bg-gradient-to-r from-lime-500 via-blue-500  to-rose-500 bg-clip-text text-transparent text-6xl font-[800] py-4 my-2 md:text-center ">
          Coming Soon
        </h1>
        <p className="text-white font-[600] xl:text-center text-start text-3xl my-6">
          #Say goodbye to traditional platforms and join the revolution web3 at 
          <span className="text-cyan-400 font-[600]"> 3ming.space!</span>
        </p>
      </div>

      

      <div className="grid xl:grid-cols-4 xl:ml-14 mt-6 ">
        <div className="order-4 xl:order-1 ml-2">
          <h1 className=" animate-text bg-gradient-to-s from-lime-500 via-purple-500 to-rose-500 bg-clip-text text-transparent text-[85px] font-bold">
            Play.
            <br /> Watch.
            <br /> Stream.
          </h1>
        </div>
        <div className="xl:col-span-3 xl:row-span-2   order-2 xl:order-2">
          <img src={Imag1} alt="" className="xl:w-[1010px] w-[480px]" />
        </div>
        <div className="xl:col-span-2 xl:mt-[-190px]   w-[520px] rounded-2xl order-3 mt-10">
          <img src={Imag2} alt="" className="xl:w-[520px] w-[480px] rounded-2xl"/>
          <p className="text-white hidden text-center py-2 xl:block">Earning Section</p>
        </div>
        <div className=" xl:row-start-4 xl:col-span-2  xl:mt-[-190px] pb-[45px] rounded-2xl xl:order-4">
          <img src={Imag3} alt="" className="xl:w-[520px] w-[480px] rounded-2xl"/>
        </div>

        <div className="xl:col-span-2 xl:w-[770px] xl:ml-[-110px] my-8 w-[440px] ml-10 order-5">
          <ul className=" text-white text-3xl font-medium list-disc">
            <li className=" pb-8">
              <span className="text-cyan-400">3ming.space </span>is a web3
              streamig plateform that allows creators to earn money through
              their content.
            </li>
            <li className="pb-8">
              
              The platform is designed to be user-friendly and accessible to all
              creators, regardless of their experience with cryptocurrencies.
            </li>
            <li className="">
              Daily cryptocurrency rewards are offered to creators based on the
              number of views they recieve.
            </li>
          </ul>
        </div>
      </div>
    </div>
 
    </>
  );
};
export default StreamPage;
