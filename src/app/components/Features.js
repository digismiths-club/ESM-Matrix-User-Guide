import React from 'react'

function Features() {
  return (
    <div className='px-2 xl:px-24 w-screen mt-5 xl:mt-0'>
        <div className='bg-[#f0f3fa] xl:px-6 xl:py-10 rounded-md w-full grid grid-cols-2 xl:grid-cols-4 justify-evenly space-x-4'>
            <div className='min-h-60 hover:bg-white cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/ESM-Matrix-User-Guide/Decision-Making.png" alt="feature1"  height={80} width={80} className='h-14 w-14 xl:h-24 xl:w-24'/>
                <div className='text-lg xl:text-2xl mt-4'>Decision Making</div>
                <div className='font-light xl:text-sm text-xs mt-1'>Classify tasks by urgency and importance, prioritize effectively, delegate smartly, and track progress for better time management and productivity.</div>
            </div>
            <div className='min-h-60 hover:bg-white cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/ESM-Matrix-User-Guide/easy_to_use.png" alt="feature1"  height={80} width={80} className='h-14 w-14 xl:h-24 xl:w-24'/>
                <div className='text-lg xl:text-2xl mt-4'>Easy To Use</div>
                <div className='font-light xl:text-sm text-xs mt-1'>Simple setup and seamless integration into Zoho CRM. No complex configurations—just install, and it works right out of the box. </div>
            </div>
            <div className='min-h-60 hover:bg-white cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/ESM-Matrix-User-Guide/plugin.png" alt="feature1"  height={80} width={80} className='h-14 w-14 xl:h-24 xl:w-24'/>
                <div className='text-lg xl:text-2xl mt-4'>Free Extension</div>
                <div className='font-light xl:text-sm text-xs mt-1'>Completely free to use! Unlike other paid tools, this widget provides full functionality at no cost to you. </div>
            </div>
            <div className='min-h-60 hover:bg-white cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/ESM-Matrix-User-Guide/productivity.png" alt="feature1"  height={80} width={80} className='h-14 w-14 xl:h-24 xl:w-24'/>
                <div className='text-lg xl:text-2xl mt-4'>Boost Productivity</div>
                <div className='font-light xl:text-sm text-xs mt-1'>Save time and boost efficiency by automating address input, allowing your team to focus on what matters most—your customers. </div>
            </div>
        </div>

    </div>
  )
}

export default Features
