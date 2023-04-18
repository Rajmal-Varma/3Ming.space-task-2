import React from 'react'
import Imag1 from '../src/assest/pic1.png'
import Imag2 from '../src/assest/pic 2.png'
import Imag3 from '../src/assest/pic 3.png'

const StreamPage = () => {
  return (
 <div className="xl:mx-auto xl:my-auto xl:py-auto">
<div className="flex items-center flex-col">

<h1 className='bg-gradient-to-r from-lime-500 via-blue-500  to-rose-500 bg-clip-text text-transparent text-6xl font-[800] p-4 my-2'>Coming Soon</h1>
<p className='text-white font-[600] text-center text-3xl my-6'>#Say goodbye to traditional platforms and join the revolution web3 at <span className='text-cyan-400 font-[600]'>3ming.space!</span></p>
  </div>



  <div className="grid xl:grid-cols-2 xl:grid-rows-2 sm:flex-col sm:gap-0">

<div className="">
  <h1 className=' animate-text bg-gradient-to-s from-lime-500 via-purple-500 to-rose-500 bg-clip-text text-transparent text-[70px] font-bold row-span-2 xl:ml-14 sm:mx-auto  '>Play.<br/> Watch.<br/> Stream.</h1>

 </div>

 <div className= "xl:ml-[-40%]">

  <img src= {Imag1} alt="" className="  col-start-1 col-span-2 row-span-3  xl:w-[990px] xl:h-[540px] "/>
</div>



<div className="row-span-2 relative  xl:pt-[-10rem] xl:w-[530px]   xl:top-[-45%]  xl:ml-12 sm:ml-auto  rounded-3xl">
<div className="  rounded-2xl xl:mb-6 sm:my-auto ">
<img src={Imag2} alt="" className=" xl:w-[570px] xl:h-[400px] rounded-2xl   "/>
<p className="text-white text-center justify-center xl:visible  ">Earning section</p>
</div>



<div className = "rounded-2xl sm:py-0 xl:mt-4 " >
<img src={Imag3} alt="" className="  xl:w-[570px]     " />
</div>

</div>

<div className="row-span-2 xl:w-[725px]    xl:mt-[-15%] xl:ml-[-5%]  sm:mx-auto sm:my-auto">
                    <ul className=" text-white text-3xl leading-15 font-medium list-disc">

                    <li className="mb-6"><span className="text-cyan-400">3ming.space </span>is a web3 streamig plateform that allows creators to earn money through their content. </li>
                        <li className="my-6 py-6"> The platform is designed to be user-friendly and accessible to all creators, regardless of their experience with cryptocurrencies.  </li>
                        <li className="my-6 ">Daily cryptocurrency rewards are offered to creators based on the number of views they recieve. </li>

                    </ul>


    </div>



    </div>

    </div>
   
  )
  }
  export default StreamPage;