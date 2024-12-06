import React, { useEffect } from 'react'
import bgMyManager from '../assets/image/bgMyMangas.jpg'

import CardSuperman from '../components/CardSuperman/CardSuperman';
import { useDispatch } from 'react-redux';
import { fetchmangas } from '../store/action/actionmangas/actionmangas';
import { fetchcategory } from '../store/action/actioncategory/actioncategory';

const HeroManager = () =>{

return (
  <div className="w-full h-[75vh] relative flex items-center">
  <img src={bgMyManager} className="w-full h-full object-cover" alt="Background Manga" />
  <div className="absolute flex flex-col items-center w-full justify-center -mt-10">
    <div className="flex flex-col items-center mt-28">
      <h1 className="text-5xl text-white font-bold text-center">CompanyName <br /> 
      O 
      <br /> AuthorName</h1>
      
    </div>
  </div>
</div>
);
};

export default function Manager() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmangas())
    dispatch(fetchcategory())
    
  }, []);
  return (
    <>
    <HeroManager/>
    <CardSuperman/>
   
    
    </>
  )
}
