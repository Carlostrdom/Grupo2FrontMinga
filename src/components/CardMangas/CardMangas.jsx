import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/action/actioncategory/actioncategory";
import { useNavigate } from "react-router-dom";
import { fetchmangas } from "../../store/action/actionmangas/actionmangas";
import Swal from "sweetalert2";
const CardMangas = () => {
  const { user, token } = useSelector((state) => state.signinStore);

  const {mangas, loading, error, search} = useSelector(state => state.mangasStore);
  const {category, selecCategory} = useSelector(state => state.categoryStore);
 const navigate = useNavigate();
 
  let dispatch = useDispatch();  
  useEffect(() => {
    dispatch(fetchmangas({category:selecCategory, search:search}));
    
  },[selecCategory])

  const handlerNavigate = (manga) => {
    if (isLoggedIn) {
      navigate("/manga", { state: manga });
    } else {

       Swal.fire({

        icon: "error",
        background: "#000000",
        color: "#fff",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UrAcRbbfn7rBtLDPuG-BsfSfgzh-M-GG8A&sg",
        imageHeight: 200,
        imageAlt: "A tall image",
        text: `"Sorry, you must log in to access this page."`,
        confirmButtonText: "ok",
        preConfirm: () => {
          return       navigate("/signIn")
        
        },
      });
    }
  };

  

  const isLoggedIn = !!localStorage.getItem("token");

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
                  style={{ color:categ.color , backgroundColor: categ.shadow }}
                  onClick={() => dispatch(setCategory(categ._id))}
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {categ.name}
                </button>
              ))}
        </div>

        {/* Mostrar mangas */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : mangas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {mangas.map((manga, index) => (
              <div
                key={index}
                style={{
                  borderColor: manga.category_id?.color || "gray-300",
                }}
                className={`w-[90%] md:w-[402px] h-[178px] bg-white shadow-md rounded-lg flex overflow-hidden border-l-4`}
              >
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {manga.title}
                    </h3>
                    <p className="text-sm text-gray-500">{manga.genre}</p>
                    <p
                      className={`text-sm`}
                      style={{ color: manga.category_id?.color }}
                    >
                      Type
                    </p>
                  </div>
                  <button
                    className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full self-start"
                    onClick={() => handlerNavigate(manga)}
                  >
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
        ) : (
          <p className="text-center bg-orange-500 rounded-xl flex items-center flex-col text-xl text-white p-4" ><img src="https://s3-alpha-sig.figma.com/img/74c1/1422/523fb73c0843c17b79f58c0508ca9f7a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kzZY5NIhLUfcd6JEzBhN3AxDdBvBjF375QHGbyYEihS7WuOCDeQjhCBoGiCxnjstD5zIL8~XLyebK179g99lGmPBVAvGrMenMfiD7K3a4irkOjLQ5qvYQnoVN3qBL2EEwgAMTwoaKeH1HW68DK8eh6ij6d38kN1V7uktpTfAngHpBRF0BNgcvTS5nUg4wrqbTWo2MlAy7Lc9f3g~WMfzAj2Wm8WeRwbCER5LNDcU82gdGw3e5XCsF8GykXsIU1EEClyCurjEjC225hCFcRWUeHpIX2-7-~3dLQhBKOQQantwyAmJCVNTQ1A9UyHjuJks952BowU8v5Zil6resw0GeQ__" alt="" />Not Mangas found.</p>
        )}
      </div>
    </div>
  );
};

export default CardMangas;
