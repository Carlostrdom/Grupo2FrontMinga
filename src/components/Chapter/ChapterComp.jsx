import React, { useEffect, useState } from 'react';
import { fetchchapter } from '../../store/action/actionChapter/actionChapter';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MangaReader = () => {
  const location = useLocation();
  const selectedManga =location.state
  const dispatch = useDispatch();

  const { chapters , loading, error } = useSelector((state) => state.chapterStore);

  const [currentPage, setCurrentPage] = useState(0); // Estado para la página actual

  // La ruta del capítulo específica

  useEffect(() => {
    if (selectedManga?._id) {
      dispatch(fetchchapter( selectedManga._id ));
      console.log(fetchchapter._id, "fetchchapter");
      
    }
  }, [dispatch, selectedManga._id]);

  if (loading) return <div className="text-center text-xl">Loading chapter...</div>;
  if (error) return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  if (!chapters) return <div className="text-center text-xl">No chapters found for this manga.</div>;

  const pages = chapters.pages; 

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prevPage => prevPage + 1); 
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1); 
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-900">
    <div className="mt-20 bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">{chapters.title}</h2>
  
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 0}
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full transition-all hover:bg-blue-700 disabled:bg-gray-400"
        >
          Prev
        </button>
        <span className="text-lg font-medium text-gray-800">{`Page ${currentPage + 1} of ${pages.length}`}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === pages.length - 1}
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full transition-all hover:bg-blue-700 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
  
      <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
        <img 
          src={pages[currentPage]} 
          alt={`Page ${currentPage + 1}`} 
          className="w-full h-auto max-w-[600px] mx-auto" 
        />
      </div>
      
      <div className="mt-4 flex justify-center space-x-4">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 0}
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full transition-all hover:bg-blue-700 disabled:bg-gray-400"
        >
          Prev
        </button>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === pages.length - 1}
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full transition-all hover:bg-blue-700 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default MangaReader;
