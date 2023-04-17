import React from 'react'
import Imag1 from '../src/assest/pic1.png'
import Imag2 from '../src/assest/pic 2.png'
import Imag3 from '../src/assest/pic 3.png'
const StreamPage = () => {
  return (
   
    <div className='absolute top-[10px] w-full h-full '>
        <div className="flex items-center flex-col">

      <h1 className='text-5xl font-bold text-center p-4 my-2'>Coming Soon</h1>
      <p className='text-white font-[600] text-center'>#Say goodbye to traditional platforms and join the revolution web3 at <span className='text-cyan-400 font-[600]'>3ming.space!</span></p>
        </div>

        <div className="grid grid-cols-4 grid-rows-4 gap-4 justify-center">
            
            <div className="w-[300px] h-[300px]"><h1 className='text-6xl font-bold leading-14'>Play. Watch. Stream.</h1></div>
              

              <div className="col-span-3 row-span-2  w-[900px] h-[700px] ">
                 <img src={Imag1} alt="" />
              </div>
              
           
             <div className="w-[540px] h-[540px] ">

                <img src={Imag2} alt="" />
             </div>
           
                <div className="w-[500px] h-[300px]">

              <img src={Imag3} alt=""  />
                </div>


               
                    <ul className="list-circle w-[700px] px-4 text-white col-span-2 row-span-2">
                 
                        <li className="mb-6"><span className="text-cyan-400">3ming.space </span>is a web3 streamig plateform that allows creators to earn money through thier content. </li>
                        <li className="my-6 py-6"> The platform is designed to be user-friendly and accessible to all creators, regardless of their experience with cryptocurrencies.  </li>
                        <li className="my-6 ">Daily cryptocurrency rewards are offered to creators based on the number of views they recieve. </li>
                   
                    </ul>
                    





            </div>

                

               
               
        
        </div>
   
  
    
  )
}

export default StreamPage
