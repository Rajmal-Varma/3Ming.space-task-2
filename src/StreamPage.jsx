import React from 'react'
import Imag1 from '../src/assest/pic1.png'
import Imag2 from '../src/assest/pic 2.png'
import Imag3 from '../src/assest/pic 3.png'
const StreamPage = () => {
  return (
   
    <div className='absolute top-[10px] w-full h-full '>
        <div className="flex items-center flex-col">

      <h1 className='text-5xl font-bold text-center p-4 my-2'>Coming Soon</h1>
      <p className='text-white font-[600] text-center '>#Say goodbye to traditional platforms and join the revolution web3 at <span className='text-cyan-400 font-[600]'>3ming.space!</span></p>
        </div>

        <div className="grid grid-cols-4 grid-rows-4 gap-4 sm:flex-col justify-center pl-[124px] pt-12">
            
            <div className="w-[300px] h-[300px] pl-4"><h1 className=' text-6xl font-bold leading-14 col-span-1 row-span-1'>Play. Watch. Stream.</h1></div>
              

              <div className="col-span-2 row-span-1  w-[900px] h-[700px]  ">
                 <img src={Imag1} alt="" />
              </div>
              

              <div className="col-span-2 mt-[-310px] row-span-3 w-[500px] h-[300px] ">
             <div className=" ">

                <img src={Imag2} alt=""className="" />
                <h1 className="text-center">Earning Section</h1>
             </div>
           
                <div className="">

              <img src={Imag3} alt="" className="pt-20"  />
                </div>

                </div>
           
                 <div className="list-circle gap-4 w-[700px] px-4 text-white col-span-2 row-span-3  justify-center w-[600px] taxt-space">
                    <ul className="">
                 
                        <li><span>3ming.space </span>is a web3 streamig plateform that allows creators to earn money through thier content </li>
                        <li> The platform is designed to be user-friendly and accessible to all creators, regardless of their experience with cryptocurrencies.  </li>
                        <li>Daily cryptocurrency rewards are offered to creators based on the number of views they recieve. </li>
                   
                    </ul>
                    </div>  





            </div>

                

               
               
        
        </div>
   
  
    
  )
}

export default StreamPage
