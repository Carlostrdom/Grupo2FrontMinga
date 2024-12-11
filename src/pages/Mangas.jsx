import React, { useEffect } from 'react'
import bgMangaImg from '../assets/image/bgMangas.jpg'
import CardMangas from '../components/CardMangas/CardMangas'
import { useDispatch, useSelector } from 'react-redux'
import { fetchmangas, setSearch } from '../store/action/actionmangas/actionmangas';
import { fetchcategory } from '../store/action/actioncategory/actioncategory';

const HeroManga = () => {
  const { search } = useSelector((state) => state.mangasStore);
  const { selecCategory } = useSelector((state) => state.categoryStore);
  const dispatch = useDispatch();

  // Manejar los filtros de búsqueda y categoría
  useEffect(() => {
    const data = {};
    if (search !== '') data.search = search;
    if (selecCategory !== '') data.category = selecCategory;

    
    if (search !== '' || selecCategory !== '') {
      dispatch(fetchmangas(data));
    } else {
      dispatch(fetchmangas()); // Solicitar todos los mangas si no hay filtro
    }
  }, [search, selecCategory, dispatch]);

  return (
    <div className="w-full h-[75vh] relative flex items-center">
      <img src={bgMangaImg} className="w-full h-full object-cover" alt="Background Manga" />
      <div className="absolute flex flex-col items-center w-full justify-center -mt-10">
        <div className="flex flex-col items-center mt-28">
          <h1 className="text-5xl text-white font-bold">Mangas</h1>
          <div className="flex items-center w-[60vw] h-10 rounded-md mt-24 bg-white px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="w-[80vh] h-full bg-transparent focus:outline-none"
              placeholder="Find your manga here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Mangas() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmangas())
    dispatch(fetchcategory())
    
  }, []);
  return (
    <>
    <HeroManga/>
    <CardMangas/>
   
    
    </>
  )
}
