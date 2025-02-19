import React from 'react'
import GoogleMapsCard from "../components/GoogleMapsCard";

function page() {
  const cards= [
    {
      title: `Dragging Tasks – Users can drag tasks into Do it, Delegate it, Schedule it and in Defer it matrix of the ESM Task Manager.`,
      url: "/ESM-Matrix-User-Guide/feature1.png"
    },
    {
      title: `Dragging to "Do It" – Task moved to "Do It" means it's urgent and important.`,
      url: "/ESM-Matrix-User-Guide/feature2.png"
    },
    {
      title: `Dropping in "Do It" – Priority → Critical, Status → In Progress, Due Date → Today.`,
      url: "/ESM-Matrix-User-Guide/feature3.png"
    },
    {
      title: `Dragging to "Delegate" – Assign task to another user only Admin can delegate tasks.`,
      url: "/ESM-Matrix-User-Guide/feature4.png"
    },
    {
      title: `Dropping in "Delegate" – A pop-up appears to change the user, due date, and add notes. Clicking Delegate assigns the task.`,
      url: "/ESM-Matrix-User-Guide/feature5.png"
    },
    {
      title: `The task is now assigned to another user. Priority & Status remain unchanged`,
      url: "/ESM-Matrix-User-Guide/feature6.png"
    },
    {
      title: `Dragging to "Schedule" – Task is important but not urgent.`,
      url: "/ESM-Matrix-User-Guide/feature7.png"
    },
    {
      title: `Dropping in "Schedule" – A pop-up appears to change the due date.`,
      url: "/ESM-Matrix-User-Guide/feature8.png"
    },
    {
      title: `Scheduled Task Behavior – Status → Scheduled, Priority → Low.`,
      url: "/ESM-Matrix-User-Guide/feature9.png"
    },
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

  return (
    <div className="w-full md:p-10 p-0 bg-gray-50 flex flex-col items-center justify-center border-solid md:border-2 ">
        {
          cards.map((card, index)=>{
            return (
              <GoogleMapsCard key={index} url={card.url} index={index+1} title={
                card.title}
              />
            )
          })
        }

    </div>
  );
}

export default page
