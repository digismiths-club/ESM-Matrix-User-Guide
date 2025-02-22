import React from 'react'

function  About() {
  return (
    <>
      <div className='p-4 xl:p-10 pt-20 xl:mt-20 flex flex-wrap gap-5 justify-evenly items-center w-full'>
        <div className='w-[80%] md:w-[40%] flex flex-col min-w-[250px]'> 
          <span >Presenting</span>
          <div className='xl:text-4xl xl:mt-2 font-semibold xl:font-normal'>Eisenhower Matrix For Zoho CRM</div>
          <div className='xl:mt-2 mt-1 text-sm xl:text-lg'>A Free Tool by <b>Digismiths</b></div>
          <div className='xl:mt-4 mt-2 font-light text-xs xl:text-base'>
            An <strong>Eisenhower Matrix Task Manager</strong> is a powerful task management tool that seamlessly integrates with Zoho CRM, designed to help users prioritize their work effectively using the Eisenhower Matrix. This tool provides a visual, interactive, and efficient approach to task organization, boosting productivity and enabling users to focus on what truly matters.
          </div>
          {/* <form action="https://marketplace.zoho.com/app/crm/google-address-autocomplete-widget-for-zoho-crm" target="_blank" >
            <button type='submit' className='mt-7 bg-blue-400 py-2 px-3 rounded-md text-white hover:bg-blue-500 text-sm'>
              Install Now
            </button>
          </form> */}
        </div>
        <img src="/ESM-Matrix-User-Guide/final5.png" className='h-44 w-[80%] md:w-96 xl:h-[22rem] xl:w-[43rem]' alt='logo' width={500} height={500}/>
      </div>
    </>
  )
}

export default About
