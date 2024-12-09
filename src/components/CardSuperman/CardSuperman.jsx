import React, { useEffect } from "react";
import { CgAdd } from "react-icons/cg";
import { LuCircleSlash } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { fetchcategory, setCategory } from "../../store/action/actioncategory/actioncategory";
import { fetchmangas } from "../../store/action/actionmangas/actionmangas";


const CardSuperman = () => {
  const {mangas, loading, error } = useSelector(state => state.mangasStore);
  const {category, selecCategory} = useSelector(state => state.categoryStore);
 console.log(category,"manger");
 
  let dispatch = useDispatch();  
  useEffect(() => {
    dispatch(fetchmangas({category:selecCategory}))
    
  },[selecCategory])

    return (
        <div className="relative -mt-12 px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-[90%] mx-auto relative z-10">
          <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start md:ml-44">
  <button
    onClick={() => dispatch(setCategory(null))}
    className="px-4 py-2 rounded-full text-sm font-semibold bg-slate-400 text-white hidden md:block"
  >
    All
  </button>
  {category.length > 0 &&
    category
      .slice()
      .reverse()
      .map((categ, index) => (
        <button
          style={{ color: categ.shadow, backgroundColor: categ.color }}
          onClick={() => dispatch(setCategory(categ._id))}
          key={index}
          className="px-4 py-2 rounded-full text-sm font-semibold "
        >
          {categ.name}
        </button>
      ))}</div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
              {mangas.length > 0 && mangas.map((manga, index) => (
                <div
                  key={index}
                  className={`w-[90%] md:w-[402px] h-[178px] bg-white shadow-md rounded-lg flex overflow-hidden border-l-4 ${manga.borderColor} relative`}
                >
                  <div className="absolute top-2 left-2 flex gap-1">
                    <CgAdd className="text-gray-700 w-5 h-5" />
                    <LuCircleSlash className="text-red-500 w-5 h-5" />
                  </div>
    
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-gray-800">{manga.title}</h3>
                    <p className="text-sm text-gray-500">{manga.genre}</p>
                    <p className={`text-sm ${manga.typeColor}`}>Type</p>
                  </div>
    
                  <div className="flex gap-2 absolute bottom-2 left-2">
                    <button className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      Editar
                    </button>
                    <button className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      Delete
                    </button>
                  </div>
    
                  <div className="w-1/3 h-full overflow-hidden relative">
                    <img
                      src={manga.cover_photo}
                      alt={manga.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-l-full rounded-r-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default CardSuperman;
