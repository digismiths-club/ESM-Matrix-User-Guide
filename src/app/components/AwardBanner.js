import React from 'react'

function AwardBanner() {
  return (
    <>
      <a href="https://help.zoho.com/portal/en/community/topic/zdc-hackathon-2024-category-wise-winners-%E2%80%93-extensions" target='_blank'>
        <div className='px-2 xl:px-24 w-screen mt-5 xl:mt-0'>
          <div 
            className='bg-gray-100 px-10 py-2 rounded-md flex justify-between items-center flex-col md:flex-row'
            style={{backgroundImage: `url("/ESM-Matrix-User-Guide/confetti-unscreen.gif ")`}}
            >
            <div className='flex-col hidden md:flex'>
              <span className='text-lg'>This extension secured the top spot in ZDC Hackathon 2024!</span>
              <span className='text-sm font-light'>Winner in extensions category at ZDC Hackathon 2024!</span>
            </div>
            <img src='/ESM-Matrix-User-Guide/trophy-bg-removed.gif' className='h-32' alt=''/>
            <div className='md:hidden flex flex-col py-2'>
              <span className='text-center text-sm md:text-lg md:text-start'>This extension secured the top spot in ZDC Hackathon 2024!</span>
              <span className='text-center text-xs md:text-start md:text-sm font-light'>Winner in category at ZDC Hackathon 2024!</span>
            </div>
          </div>
        </div> 
      </a>
    </>
  )
}

export default AwardBanner
