import React from 'react'
import Faq from './Faq';
import { FaQuestionCircle } from "react-icons/fa";

function Faqs() {
    const faqs = [
        {
          ques: "How do I install the Eisenhower Matrix Widget in Zoho CRM?",
          ans: "To install, simply visit the Zoho Marketplace, search for Eisenhower Matrix Widget, and click Install. Follow the prompts to integrate it into your Zoho CRM. ",
        },
        {
          ques: "Is the widget really free?",
          ans: "Yes! The Eisenhower Matrix Widget is completely free to use. There are no hidden fees or in-app purchases. ",
        },
        {
          ques: "Does the widget work with all Zoho CRM modules?",
          ans: "Yes, the widget is designed to work seamlessly across multiple Zoho CRM modules, including Leads, Contacts, Accounts, and more.",
        },
        {
          ques: "Do I need any technical knowledge to set it up?",
          ans: "Not at all! The setup is straightforward, with no coding required. Just install the widget and start using it right away. ",
        },
      ];
  return (
    <>
        <div className='mt-12 px-4 xl:p-8 xl:w-[85%] justify-between space-y-2 flex flex-col md:flex-row'>
            <div className='xl:w-[40%] text-2xl flex items-center max-h-10 space-x-3'>
              <FaQuestionCircle size={30}/>
              <div className='text-sm'>Frequently Asked Questions</div>
            </div>
            <div className='md:w-[65%] py-2 xl:space-y-4 space-y-2 '>
                {
                    faqs.map((element, key)=>{
                        return (
                          <Faq key={key} element={element}/>
                        )
                    })
                }
                
            </div>
        </div> 
    </>
  )
}

export default Faqs
