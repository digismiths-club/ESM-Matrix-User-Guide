import React from 'react'
import GoogleMapsCard from "../components/GoogleMapsCard";

function page() {
  const cards= [
    {
      title: "Select a Project (or select an existing one, if you have one)",
      url: "/ESM-Matrix-User-Guide/final1.png"
    },
    {
      title: "Create a New Project (or select an existing one, if you have one)",
      url: "/ESM-Matrix-User-Guide/final2.png"
    },
    {
      title: "Give your project a name (perhaps based on your websites name)",
      url: "/ESM-Matrix-User-Guide/final3.png"
    },
    {
      title: "Select the Project you just created. You can do this by the notification at the top right:",
      url: "/ESM-Matrix-User-Guide/final4.png"
    },
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
