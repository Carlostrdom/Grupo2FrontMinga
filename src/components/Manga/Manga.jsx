import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchchapter} from "../../store/action/actionChapter/actionChapter";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Manga = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedManga =location.state

  const { chapters , loading, error } = useSelector((state) => state.chapterStore);
  

  const [activeTab, setActiveTab] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 3;

  // Fetch Chapters
  useEffect(() => {
    if (selectedManga?._id) {
      dispatch(fetchchapter( selectedManga._id ));
      
    }
  }, [dispatch, selectedManga._id]);

  // Pagination Logic
  const startIndex = (currentPage - 1) * chaptersPerPage;
  const currentChapters = chapters.slice(startIndex, startIndex + chaptersPerPage);
  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  // Render Tab Content
  const renderTabContent = () => {
    if (activeTab === "manga") {
      return <p className="mt-4 text-gray-700">{selectedManga?.description}</p>;
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
      <div className="w-full md:w-1/2 px-4 py-6 space-y-6">
        {/* Manga Info */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">{selectedManga?.title}</h1>
          <p className="mt-2 text-sm text-gray-600">{selectedManga?.pages}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-2 border-b">
          <button
            onClick={() => setActiveTab("manga")}
            className={`px-4 py-2 ${
              activeTab === "manga" ? "text-orange-500 font-bold" : "text-gray-600"
            }`}
          >
            Manga
          </button>
          <button
            onClick={() => setActiveTab("chapters")}
            className={`px-4 py-2 ${
              activeTab === "chapters" ? "text-orange-500 font-bold" : "text-gray-600"
            }`}
          >
            Chapters
          </button>
        </div>

        {/* Dynamic Content */}
        <div>{renderTabContent()}</div>
      </div>
      <div className="space-y-4">
      
  </div>
    </div>
  );
};

// Chapter List Component
const ChapterList = ({ chapters }) => {
  const navigate = useNavigate();
  const hamlerNavigate = (chap) => {
    navigate("/chapter", { state: chap });
  }
  return (
    <div className="space-y-4">
    {chapters.length > 0 ? (
  chapters.map((chap, idx) => (
    <div key={idx} className="flex justify-between bg-gray-100 p-3 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img src={chap.cover_photo} alt={`Chapter ${chap.title}`} className="w-10 h-10 rounded-md" />
        <div>
          <h3 className="font-bold">Chapter #{chap.title}</h3>
          <p className="text-sm text-gray-600">{chap.pages.length} pages</p>
        </div>
      </div>

      <button onClick={() => hamlerNavigate(chap)} className="bg-orange-500 text-white px-3 py-1 rounded-md">
     
    Read
</button>    </div>
  ))
) : (
  <p>No hay capítulos disponibles.</p>
)}
  </div>
);
  
}
 

// Pagination Controls Component
const PaginationControls = ({ currentPage, totalPages, onPrev, onNext }) => (
  <div className="flex justify-evenly items-center mt-4">
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className={`px-3 py-1 rounded-md ${
        currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-orange-500 text-white"
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
      className={`px-3 py-1 rounded-md ${
        currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-orange-500 text-white"
      }`}
    >
      Next
    </button>
  </div>
);

export default Manga;
