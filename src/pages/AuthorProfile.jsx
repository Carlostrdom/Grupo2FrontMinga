import React from 'react'
import bgProfileAuthor from '../assets/image/bgProfiles.jpg'

import ProfileFormAuthor from '../components/ProfileFormAuthor/ProfileFormAuthor';

const HeroProfileAuthors = () =>{

return (
  <div className="w-full h-[75vh] relative flex items-center">
  <img src={bgProfileAuthor} className="w-full h-full object-cover" alt="Background Manga" />
  <div className="absolute flex flex-col items-center w-full justify-center -mt-10">
    <div className="flex flex-col items-center mt-28">
      <h1 className="text-5xl text-white font-bold text-center">Profile</h1>
      
    </div>
  </div>
</div>
);
};

export default function AuthorProfile() {
  return (
    <>
    <HeroProfileAuthors />
    <ProfileFormAuthor />
   
    
    </>
  )
}