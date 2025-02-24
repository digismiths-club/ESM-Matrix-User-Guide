import React from 'react'
import GoogleMapsCard from "../components/GoogleMapsCard";
import {cards} from "../../Data"

function page() {

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
