import React from 'react'
import Imag1 from '../src/assest/pic1.png'
import Imag2 from '../src/assest/pic 2.png'
import Imag3 from '../src/assest/pic 3.png'
const StreamPage = () => {
  return (
   
    <div className='absolute top-[10px] w-full h-full'>
        <div className="flex items-center flex-col">

      <h1 className='bg-gradient-to-r from-lime-500 via-blue-500  to-rose-500 bg-clip-text text-transparent text-6xl font-[800] p-4 my-2'>Coming Soon</h1>
      <p className='text-white font-[600] text-center text-3xl my-6'>#Say goodbye to traditional platforms and join the revolution web3 at <span className='text-cyan-400 font-[600]'>3ming.space!</span></p>
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-2  my-4">
            
             

            <h1 className=' animate-text bg-gradient-to-s from-lime-500 via-purple-500 to-rose-500 bg-clip-text text-transparent text-[70px] font-bold row-span-2 ml-14 py-6 mt-4'>Play. Watch. Stream.</h1>
             

                 <img src={Imag1} alt="" className="col-start-2 col-span-4 row-span-2 w-[990px] h-[600px] ml-14"/>
              
                  <div className="absolute row-start-3  col-span-2 top-[89%] rounded-3xl ml-14 ">
                <img src={Imag2} alt="" className="w-[540px] h-[400px] rounded-2xl "/>
                <p className="text-white text-center justify-center">Earning section</p>
                  </div>
           
             
              <img src={Imag3} alt="" className=" w-[540px] row-start-3  pt-6 ml-12 col-span-2" />
           
                

                  <div className=" relative col-span-2 row-span-2 w-[740px] top-[-55%] left-[-10%]">
                    <ul className=" text-white list-disc text-3xl leading-15 font-medium">
                 
                        <li className="mb-6"><span className="text-cyan-400">3ming.space </span>is a web3 streamig plateform that allows creators to earn money through thier content. </li>
                        <li className="my-6 py-6"> The platform is designed to be user-friendly and accessible to all creators, regardless of their experience with cryptocurrencies.  </li>
                        <li className="my-6 ">Daily cryptocurrency rewards are offered to creators based on the number of views they recieve. </li>
                   
                    </ul>

                  </div>
               
                    

                  


            </div>

                

               
               
        
        </div>
   
  
    
  )
}

export default StreamPage
