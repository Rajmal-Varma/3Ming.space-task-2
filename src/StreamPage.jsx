import React from 'react'
import Imag1 from '../src/assest/pic1.png'
import Imag2 from '../src/assest/pic 2.png'
import Imag3 from '../src/assest/pic 3.png'

const StreamPage = () => {
  return (
 <div className="mx-4">
<div className="flex items-center flex-col">

<h1 className='bg-gradient-to-r from-lime-500 via-blue-500  to-rose-500 bg-clip-text text-transparent text-6xl font-[800] p-4 my-2'>Coming Soon</h1>
<p className='text-white font-[600] text-center text-3xl my-6'>#Say goodbye to traditional platforms and join the revolution web3 at <span className='text-cyan-400 font-[600]'>3ming.space!</span></p>
  </div>



  <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-1">

<div className="">
  <h1 className=' animate-text bg-gradient-to-s from-lime-500 via-purple-500 to-rose-500 bg-clip-text text-transparent text-[70px] font-bold row-span-2 ml-14 py-6 mt-4 '>Play.<br/> Watch.<br/> Stream.</h1>

 </div>

 <div className="ml-[-40%]">

  <img src={Imag1} alt="" className=" w-[990px] h-[540px] "/>
</div>



<div className="relative pt-[-10rem] w-[600px] top-[-45%] rounded-2xl ">
<div className="  top-[89%] rounded-3xl ml-14 ">
<img src={Imag2} alt="" className=" w-[600px] h-[400px] rounded-2xl "/>
<p className="text-white text-center justify-center">Earning section</p>
</div>



<div>
<img src={Imag3} alt="" className=" w-[540px]   pt-6 ml-12 " />
</div>

</div>

<div className="row-span-2 w-[720px] my-4 py-4 ml-[-5%]">
                    <ul className=" text-white text-3xl leading-15 font-medium list-disc">

                    <li className="mb-6"><span className="text-cyan-400">3ming.space </span>is a web3 streamig plateform that allows creators to earn money through thier content. </li>
                        <li className="my-6 py-6"> The platform is designed to be user-friendly and accessible to all creators, regardless of their experience with cryptocurrencies.  </li>
                        <li className="my-6 ">Daily cryptocurrency rewards are offered to creators based on the number of views they recieve. </li>

                    </ul>


    </div>



    </div>

    </div>
   
  )
  }
  export default StreamPage;