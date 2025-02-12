import React from 'react'

function AwardBanner() {
  return (
    <>
        <div className='px-2 xl:px-24 w-screen mt-5 xl:mt-0'>
          <div 
            className='bg-gray-100 px-10 py-2 rounded-md flex justify-between items-center flex-col md:flex-row'
            style={{backgroundImage: `url("/zoho-widget-user-guide/confetti-unscreen.gif ")`}}
            >
            <div className='flex-col hidden sm:flex'>
              <span className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, quidem?</span>
              <span className='text-sm font-light'>Lorem ipsum dolor sit.</span>
            </div>
            <img src='/zoho-widget-user-guide/trophy-bg-removed.gif' className='h-32' alt=''/>
            {/* <div className='flex flex-col py-2'>
              <span className='text-center text-sm md:text-lg md:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, quidem?</span>
              <span className='text-center text-xs md:text-start md:text-sm font-light'>Lorem ipsum dolor sit.</span>
            </div> */}
          </div>
        </div> 
    </>
  )
}

export default AwardBanner
