import React, { useEffect } from 'react'
import bgMyManager from '../assets/image/bgMyMangas.jpg'

import CardSuperman from '../components/CardSuperman/CardSuperman';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmangas } from '../store/action/actionmangas/actionmangas';
import { fetchcategory } from '../store/action/actioncategory/actioncategory';

const HeroManager = () =>{
  const {user,author,company} = useSelector((state)=>state.signinStore)


return (
  <div className="w-full h-[75vh] relative flex items-center">
  <img src={bgMyManager} className="w-full h-full object-cover" alt="Background Manga" />
  <div className="absolute flex flex-col items-center w-full justify-center -mt-10">
    <div className="flex flex-col items-center mt-28">
      <h1 className="text-5xl text-white font-bold text-center">{author ? `${author.name} ${author?.last_name}` : company?.name}</h1>
      
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
