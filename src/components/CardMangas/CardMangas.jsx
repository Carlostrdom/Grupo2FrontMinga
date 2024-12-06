import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/action/actioncategory/actioncategory";

const CardMangas = () => {
 
  const {mangas, loading, error } = useSelector(state => state.mangasStore);
  const {category} = useSelector(state => state.categoryStore);
  let dispatch = useDispatch();  
  
  

  return (
    <div className="relative -mt-12 px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-[90%] mx-auto relative z-10">
      <div className="flex flex-wrap gap-4 pt-6 mb-6 justify-center md:justify-start">
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
          className="px-4 py-2 rounded-full text-sm font-semibold"
        >
          {categ.name}
        </button>
      ))}
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {mangas.length > 0 && mangas.map((manga, index) => (
            <div
              key={index}
              className={`w-[90%] md:w-[402px] h-[178px] bg-white shadow-md rounded-lg flex overflow-hidden border-l-4 ${manga.borderColor}`}
            >
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{manga.title}</h3>
                  <p className="text-sm text-gray-500">{manga.genre}</p>
                  <p className={`text-sm ${manga.typeColor}`}>Type</p>
                </div>
                <button className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full self-start">
                  Read
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

export default CardMangas;
