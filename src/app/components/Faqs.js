import React from 'react'
import Faq from './Faq';
import { FaQuestionCircle } from "react-icons/fa";

function Faqs() {
  const faqs = [
    {
      ques: "What is the Eisenhower Matrix for Zoho CRM?",
      ans: "Eisenhower Matrix for Zoho CRM is a powerful task management tool that helps users prioritize tasks effectively using the principles of the Eisenhower Matrix. It integrates seamlessly with Zoho CRM, allowing users to organize tasks visually across four actionable categories: Do It, Schedule It, Delegate It, and Defer It. ",
    },
    {
      ques: "How does the Eisenhower Matrix work?",
      ans: `The Eisenhower Matrix categorizes tasks based on urgency and importance: 
              <br>&nbsp;- Do It: Urgent and important tasks that need immediate attention. 
              <br>&nbsp;- Schedule It: Important but not urgent tasks that require strategic planning. 
              <br>&nbsp;- Delegate It: Tasks that are important but can be assigned to someone else. 
              <br>&nbsp;- Defer It: Low-priority tasks or distractions that can be postponed or done in moderation. 
           <br>This structured approach helps users focus on high-priority tasks while managing less critical ones efficiently. `,
    },
    {
      ques: "What are the key features of this extension?",
      ans: `- Drag-and-Drop Task Management: Easily move tasks between categories with an intuitive interface. <br>

            - Real-Time Task Visualization: Get a clear, color-coded view of tasks for effective decision-making. <br>

            - Seamless Integration with Zoho CRM: Manage tasks within your existing CRM workflow. <br>

            - Task Ownership Delegation: Assign tasks to team members with the appropriate permissions. <br>

            - Automated Priority Updates: Task attributes like priority, status, and due date are automatically updated based on the category selected. `,
    },
    {
      ques: "How are task attributes updated when moved between categories?",
      ans: `- Do It: Priority is set to "Critical," status remains "In Progress," and the due date defaults to today's date. <br>

            - Schedule It: Priority is marked as "Low," the status changes to "Scheduled," and the due date is set by the user. <br>

            - Delegate It: Priority and status remain as is, but the task is reassigned to another user. <br>

            - Defer It: Priority is set to "Lowest," status changes to "Deferred," and the due date is void.`,
    },
    {
      ques: "Who can delegate tasks using this extension?",
      ans: "Only users with Task Ownership Change permissions can delegate tasks to other team members within Zoho CRM.",
    },
    {
      ques: "Is this extension suitable for neurodiverse individuals?",
      ans: "Yes! The structured and visual nature of the Eisenhower Matrix caters to the unique needs of neurodiverse individuals, such as those with ADHD or autism, by reducing overwhelm and enhancing focus.",
    },
    {
      ques: "How does this extension enhance productivity?",
      ans: "By categorizing tasks into actionable quadrants, the extension provides clarity, reduces overwhelm, and helps users focus on what matters most. This leads to better time management, improved collaboration, and overall increased productivity.",
    },
  ];
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
