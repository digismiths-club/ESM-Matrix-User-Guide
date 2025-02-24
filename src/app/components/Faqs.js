import React from 'react'
import Faq from './Faq';
import { FaQuestionCircle } from "react-icons/fa";
import {faqs} from "../../Data"

function Faqs() {
  
  return (
    <>
      <div className='mt-12 px-4 xl:p-8 xl:w-[85%] justify-between space-y-2 flex flex-col md:flex-row'>
        <div className='xl:w-[40%] text-2xl flex items-center max-h-10 space-x-3'>
          <FaQuestionCircle size={30} />
          <div className='text-sm'>Frequently Asked Questions</div>
        </div>
        <div className='md:w-[65%] py-2 xl:space-y-4 space-y-2 '>
          {
            faqs.map((element, key) => {
              return (
                <Faq key={key} element={element} />
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default Faqs
