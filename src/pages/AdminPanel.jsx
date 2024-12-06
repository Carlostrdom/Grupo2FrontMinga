import React from 'react'
import bgAdminPanel from '../assets/image/bgPanel.jpg'

import AdminPanel from '../components/AdminPanel/AdminPanel';

const HeroAdminP = () =>{

return (
  <div className="w-full h-[75vh] relative flex items-center">
  <img src={bgAdminPanel} className="w-full h-full object-cover" alt="Background Manga" />
  <div className="absolute flex flex-col items-center w-full justify-center -mt-10">
    <div className="flex flex-col items-center mt-28">
      <h1 className="text-5xl text-white font-bold text-center"> Panel </h1>
      
    </div>
  </div>
</div>
);
};

export default function Manager() {
  return (
    <>
    <HeroAdminP/>
    <AdminPanel/>
   
    
    </>
  )
}