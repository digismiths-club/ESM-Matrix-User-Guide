export const faqs=[
    {
        ques: "What is the Eisenhower Matrix for Zoho CRM?",
        ans: "Eisenhower Matrix for Zoho CRM is a powerful task management tool that helps users prioritize tasks effectively using the principles of the Eisenhower Matrix. It integrates seamlessly with Zoho CRM, allowing users to organize tasks visually across four actionable categories: Do It, Schedule It, Delegate It, and Defer It. ",
      },
      {
        ques: "How does the Eisenhower Matrix work?",
        ans: `The Eisenhower Matrix categorizes tasks based on urgency and importance:`,
        points: [
          "Do It: Urgent and important tasks that need immediate attention.",
          "Schedule It: Important but not urgent tasks that require strategic planning.",
          "Delegate It: Tasks that are important but can be assigned to someone else. ",
          "Defer It: Low-priority tasks or distractions that can be postponed or done in moderation.",
          // "This structured approach helps users focus on high-priority tasks while managing less critical ones efficiently."
        ]
      },
      {
        ques: "What are the key features of this extension?",
        ans: ``,
        points:[
          "Drag-and-Drop Task Management: Easily move tasks between categories with an intuitive interface. ",
          "Real-Time Task Visualization: Get a clear, color-coded view of tasks for effective decision-making. ",
          "Seamless Integration with Zoho CRM: Manage tasks within your existing CRM workflow. ",
          "Task Ownership Delegation: Assign tasks to team members with the appropriate permissions. ",
          "Automated Priority Updates: Task attributes like priority, status, and due date are automatically updated based on the category selected."
        ]
      },
      {
        ques: "How are task attributes updated when moved between categories?",
        ans: ``,
        points: [
          `Do It: Priority is set to "Critical," status remains "In Progress," and the due date defaults to today's date. `,
          `Schedule It: Priority is marked as "Low," the status changes to "Scheduled," and the due date is set by the user. `,
          `Delegate It: Priority and status remain as is, but the task is reassigned to another user. `,
          `Defer It: Priority is set to "Lowest," status changes to "Deferred," and the due date is void.`
        ]
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
]

export const cards=[
    {
      title:`Read and check the box to agree to the Terms of Service and Authorize the extension to access and process your data by checking the respective box.`,
      url:`/ESM-Matrix-User-Guide/usage-step1.png`
    },
    {
      title:`Select Install for all users to ensure the tool is accessible to everyone, enabling effective task sharing and collaboration.`,
      url:`/ESM-Matrix-User-Guide/usage-step2.png`
    },
    {
      title: `Go to ESM Task Manager in your navbar & select it to open.`,
      url: "/ESM-Matrix-User-Guide/feature1.png"
    },
    {
      title: `Dragging Tasks – Users can drag tasks into Do it, Delegate it, Schedule it and in Defer it matrix of the ESM Task Manager. `,
      url: "/ESM-Matrix-User-Guide/feature2.png"
    },
    {
      title: `Dragging to "Do It" – Task moved to "Do It" means it's urgent and important.`,
      url: "/ESM-Matrix-User-Guide/feature3.png"
    },
    {
      title: `Dropping in "Do It" – Priority → Critical, Status → In Progress, Due Date → Today.`,
      url: "/ESM-Matrix-User-Guide/feature4.png"
    }, 
    {
      title: `Dragging to "Schedule" – Task is important but not urgent. Scheduled Task Behavior – Status → Scheduled, Priority → Low.`,
      url: "/ESM-Matrix-User-Guide/feature5.png"
    },
    {
      title: `Dropping in "Schedule" – A pop-up appears to change the due date.`,
      url: "/ESM-Matrix-User-Guide/feature6.png"
    },
    {
      title: `Dragging to "Delegate" – Assign task to another user only Admin can delegate tasks.`,
      url: "/ESM-Matrix-User-Guide/feature7.png"
    },
    {
      title: `Dropping in "Delegate" – A pop-up appears to change the user, due date, and add notes. Clicking Delegate assigns the task.`,
      url: "/ESM-Matrix-User-Guide/feature9.png"
    },
    // {
    //   title: ``,
    //   url: "/ESM-Matrix-User-Guide/feature9.png"
    // },
    {
      title: `Dragging to "Defer It" – Task is neither urgent nor important.`,
      url: "/ESM-Matrix-User-Guide/feature10.png"
    },
    {
      title: `Dropping in "Defer It" – Status → Deferred, Priority → Lowest, Due Date → Null.`,
      url: "/ESM-Matrix-User-Guide/feature11.png"
    },
    {
      title: `And that’s how ALL your tasks will look!`,
      url: "/ESM-Matrix-User-Guide/feature12.png"
    }
]