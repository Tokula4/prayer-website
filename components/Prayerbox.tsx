"use client";
import Link from "next/link";

 // This is a client component 
const prayers = [
    {
      prayerno: 'Prayer 1 - 20 ',
     info: 'And he spake a parable unto them to this end, that men ought always to pray, and not to faint;',
      href:"./prayer1",
     
    },
    {
        prayerno: 'Prayer 21 - 40 ',
       info: ' Pray without ceasing.',
       href:"./prayer2",
       
      },
      {
        prayerno: 'Prayer 41 - 60 ',
       info: ' Do not be anxious about anything, but in everything by prayer and  supplication with thanksgiving let your requests be made known to  God.',
       
      },
      {
        prayerno: 'Prayer 61 - 80 ',
       info: 'Elias was a man subject to like passions as we are,  and he prayed earnestly that  it might not rain: and it rained  not on the earth by the space of three years and six months.',
       
      },

      {
        prayerno: 'Prayer 80 - 101 ',
       info: 'Devote yourselves to prayer,being watchful and thankful.',
       
      },



    // More products...
  ]
  
  export default function Prayerbox() {
    return (
      <div className=" bg-[#D4D4D4]  ">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
  
          <div className="grid grid-cols-1  mt-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {prayers.map((prayer) => (
              <div key={prayer.prayerno} className="relative h-1/2 group">
                <div className="aspect-h-1 bg-[#C9C6C6] aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-55">
                    <h1 className=" font-bold flex justify-center items-center p-4 text-black text-[20px]  " >{prayer.prayerno}</h1>
                    <p className="text-black text-[20px] font-serif " >{prayer.info}</p>

                    <div className="flex items-center justify-center p-2 " >
          <button type="button"  className="text-white bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <a href={prayer.href} >Click Here</a>
          
          </button>
          </div>
                   
                
                </div>
          
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  