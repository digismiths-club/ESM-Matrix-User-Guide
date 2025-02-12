import React from 'react'

function  About() {
  return (
    <>
      <div className='p-4 xl:p-10 pt-20 xl:mt-20 flex justify-evenly items-center w-screen'>
        <div className=' w-[40%] flex flex-col'> 
          <span >Presenting</span>
          <div className='xl:text-4xl xl:mt-2 font-semibold xl:font-normal'>Eisenhower Matrix</div>
          <div className='xl:mt-2 mt-1 text-sm xl:text-lg'>A Free Tool by <b>Digismiths</b></div>
          <div className='xl:mt-4 mt-2 font-light text-xs xl:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat repellendus vero inventore aperiam ipsa harum, quasi, commodi consequatur quos molestiae aspernatur molestias a corporis accusamus similique, expedita alias exercitationem sapiente explicabo incidunt. Commodi illo quibusdam nam esse veritatis ipsum facilis?
          </div>
          <a href="https://marketplace.zoho.com/app/crm/google-address-autocomplete-widget-for-zoho-crm" target="_blank">
            <button className='mt-7 bg-blue-400 py-2 px-3 rounded-md text-white hover:bg-blue-500 text-sm'>
              Install Now
            </button>
          </a>
        </div>
        <img src="/zoho-widget-user-guide/logo.svg" className='h-44 w-44 xl:h-96 xl:w-96' alt='logo' width={500} height={500}/>
      </div>
    </>
  )
}

export default About
