
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchchapter } from "../../store/action/actionChapter/actionChapter";
import { useLocation, useNavigate } from "react-router-dom";


const Manga = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedManga = location.state;
  console.log(selectedManga, "selectedManga");
  

  const navigate = useNavigate();
  const {category} = useSelector(state => state.categoryStore);

  const { chapters, loading, error } = useSelector((state) => state.chapterStore);
  const handleChapterClick = () => {
    
      navigate("/favourite", { state: selectedManga });
 }

  // State for animated tabs
  const [colorButton, setColorButton] = useState({ color: "#FFFFFF", boolean: true });
  const [colorButton2, setColorButton2] = useState({ color: "#9D9D9D", boolean: false });
  const [classInfo, setClassInfo] = useState(
    "w-[50%] h-full rounded-[20px] bg-gradient-to-r from-[#F97316] to-[#F97316] z-[0] transition-all duration-300 translate-x-0 absolute"
  );

  // State for active tab
  const [activeTab, setActiveTab] = useState("manga");

  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 3;


  // Fetch Chapters
  useEffect(() => {
    if (selectedManga?._id) {
      dispatch(fetchchapter(selectedManga._id));
    }
  }, [dispatch, selectedManga?._id]);

  // Pagination Logic
  const startIndex = (currentPage - 1) * chaptersPerPage;
  const currentChapters = chapters.slice(startIndex, startIndex + chaptersPerPage);
  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  // Tab Animation Logic
  function buttonInfoLeft() {
    setActiveTab("manga"); // Switch to "manga" tab
    setColorButton({ color: "#FFFFFF", boolean: true });
    setColorButton2({ color: "#9D9D9D", boolean: false });
    setClassInfo(
      "w-[50%] h-full rounded-[20px] z-[0] bg-gradient-to-r from-[#F97316] to-[#F97316] z-[-1] transition-all duration-300 translate-x-0 absolute"
    );
  }

  function buttonInfoRight() {
    setActiveTab("chapters"); // Switch to "chapters" tab
    setColorButton2({ color: "#FFFFFF", boolean: true });
    setColorButton({ color: "#9D9D9D", boolean: false });
    setClassInfo(
      "w-[50%] h-full rounded-[20px] z-[0] bg-gradient-to-r from-[#F97316] to-[#F97316] z-[-1] transition-all duration-300 translate-x-full absolute"
    );
  }

  // Render Tab Content
  const renderTabContent = () => {
    if (activeTab === "manga") {
      return <p className="mt-4 text-gray-700 text-lg md:text-xl">{selectedManga?.description}</p>;
    }

    if (activeTab === "chapters") {
      return (
        <div className="mt-4">
          <ChapterList chapters={currentChapters} />
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          />
        </div>
      );
    }

    return null;
  };

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!selectedManga) return <p>Loading manga details...</p>;



return (
  <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row">
    {/* Left Side: Image */}
    <div className="w-full md:w-1/2 h-[50vh] md:h-screen">
      <img
        src={selectedManga.cover_photo}
        alt={`${selectedManga.title || "Manga"} cover`}
        className="w-full h-full object-cover"
      />
    </div>


    {/* Right Side: Content */}
    <div className="w-full md:w-1/2 px-4 py-6 space-y-6 max-h-screen overflow-auto">
      <div className="flex flex-col items-center space-y-6 mt-16">
        {/* Manga Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">{selectedManga?.title}</h1>
          <p className="mt-2 text-sm md:text-lg text-gray-600">{selectedManga?.pages}</p>
        </div>
        {/* Category and Company */}
        <div className="flex items-center justify-between w-full max-w-md">
        <span style={{ color:selectedManga?.category_id?.color , backgroundColor: selectedManga?.category_id?.shadow }} className=" text-sm md:text-lg font-semibold px-4 py-1 rounded-full">          {selectedManga?.category_id?.name}
          </span>
        <p className="text-gray-500 text-sm md:text-lg font-medium">author: {selectedManga?.author_id?.name + " " + selectedManga?.author_id?.last_name}</p>
          </div>
        {/* Reactions Section */}
        <div className="w-full flex justify-evenly space-x-4 p-4 border border-gray-300 rounded-lg shadow-sm">
          {/* Buttons */}

          <button 
          onClick={() => {handleChapterClick()}}
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="yellow"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
              />
            </svg>
          </button>

          {/* Sad Button */}
          <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="yellow"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </button>

          {/* Happy Button */}
          <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="yellow"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </button>          
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full h-[28px] max-h-[28px] md:max-w-full md:overflow-hidden rounded-[20px] flex mt-[1.5rem] shadow-[0_0px_7px_0px_rgba(0,0,0,0.15)] relative">
        <div className={classInfo}></div>
        <button
          style={{ color: colorButton.color }}
          onClick={buttonInfoLeft}
          className="w-[50%] rounded-[20px] text-[10px] z-[1] font-montserrat font-normal text-center transition-all duration-300"
        >
          Manga
        </button>
        <button
          style={{ color: colorButton2.color }}
          onClick={buttonInfoRight}
          className="w-[50%] z-[1] rounded-[20px] text-[10px] font-montserrat font-normal text-center transition-all duration-300"
        >
          Chapters
        </button>
      </div>

      {/* Dynamic Content */}
      <div>{renderTabContent()}</div>
    </div>

  </div>

);
};

// Chapter List Component
const ChapterList = ({ chapters }) => {
const navigate = useNavigate();
return (
  <div className="space-y-4">
    {chapters.map((chap, idx) => (
      <div
        key={idx}
        className="flex justify-between items-center bg-gray-100 p-2 md:p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center space-x-10 bg-gray-100 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-orange-100 md:w-[70%]">
          <img
            src={chap.cover_photo}
            alt={`Chapter ${chap.title}`}
            className="w-16 h-16 md:w-32 md:h-32 rounded-md border border-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:translate-y-[-10%] hover:shadow-2xl"
          />
          <div className="ml-2 lg:ml-4">
            <h3 className="text-sm md:text-lg font-bold hover:text-orange-500 transition-colors">
              Chapter #{chap.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 hover:text-gray-800">
              {chap.pages.length} pages
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/chapter", { state: chap })}
          className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-orange-700"
        >
          Read
        </button>
      </div>
    ))}
  </div>


);
};

// Pagination Controls Component
const PaginationControls = ({ currentPage, totalPages, onPrev, onNext }) => (
<div className="flex justify-evenly items-center mt-4">
  <button
    onClick={onPrev}
    disabled={currentPage === 1}
    className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-orange-500 text-white"
      }`}
  >
    Previous
  </button>
  <p className="text-sm text-gray-700">
    Page {currentPage} of {totalPages}
  </p>
  <button
    onClick={onNext}
    disabled={currentPage === totalPages}
    className={`px-3 py-1 rounded-md ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-orange-500 text-white"
      }`}
  >
    Next
  </button>
</div>
);

export default Manga;