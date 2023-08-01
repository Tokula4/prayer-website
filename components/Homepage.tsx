"use client"; // This is a client component 

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import { motion } from 'framer-motion'
import Link from 'next/link';

type props = {
  
}
 
function Homepage  ( {}:props) {

  const [text] = useTypewriter({
    words: [' COUNTRY  ', ' selves', ' FAMILY', 'FRIENDS'],
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <div className="relative h-screen sm:items-center sm:justify-center lg:flex xl:flex" >
              {/* Used frame motion for the the transition */}
              <  motion.div className='space-y-3 ' 
          initial={{
      x:-500,
     opacity:0,
      scale:0.5 

    }}

    animate={{
      x: - 0,
      opacity:1,
      scale:1
    }}

    transition={{
      duration:1.5,
    }} >


            <h1 className="space-y-3 text-2xl font-semibold tracking-wide text-black lg:text-5xl xl:text-7xl" >
                <span className="block text-black uppercase bg-clip-text " > JOIN US TO PRAY  </span>
                <span className="block text-black uppercase bg-clip-text " > for  </span>
                <span className="block text-black uppercase bg-clip-text " > our {text} </span>
              
                </h1>
=======
        
          <div>
          <button type="button" className="text-white bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> <Link href="/prayers" >Click Here</Link></button>
          </div>
        </motion.div>

      <motion.div className="relative flex justify-center items-center  h-[300px] w-[300px]  lg:h-[400px] lg:w-[400px] transition-all  duration-500 md:inline xl:h-[650px] xl:w-[600px]"
         initial={{
          x:500,
         opacity:0,
          scale:0.5 
    
        }}
    
        animate={{
          x:  0,
          opacity:1,
          scale:1
        }}
    
        transition={{
          duration:1.5,
        }}
              > 
      

     
       
       <div className="absolute xl:flex " >    <div  className="p-12 "> <img src='/img/hands.png'  width={300} height={300}  /> </div>
        <div  className=" absolute bottom-4 p-[-10]  "> <img src='/img/bible.png'  width={200} height={200}  /> </div></div>
    
       
        
       </motion.div>
    </div>
  )
}

export default Homepage
