import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchchapter } from "../../store/action/actionChapter/actionChapter";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Manga = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedManga = location.state

  const { chapters, loading, error } = useSelector((state) => state.chapterStore);


  const [activeTab, setActiveTab] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 3;

  // Fetch Chapters
  useEffect(() => {
    if (selectedManga?._id) {
      dispatch(fetchchapter(selectedManga._id));

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
    <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row ">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen">
        <img
          src={selectedManga.cover_photo}
          alt={`${selectedManga.title || "Manga"} cover`}
          className="w-full h-full object-cover"
        />
      </div>


      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 mt-20 px-4 py-6 space-y-6">
        <div className="flex flex-col items-center space-y-6 mt-6">
          {/* Reactions Section */}
          <div className="flex space-x-4 p-4 border border-gray-300 rounded-lg">
            {/* Like Button */}
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
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
            </button>

            {/* Dislike Button */}
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
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
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

          {/* Stats Section */}
          <div className="flex justify-between items-center w-full max-w-md p-4 bg-white rounded-lg shadow-md">
            <div className="text-center">
              <p className="text-lg font-bold">4.5/5</p>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
            <div className="text-center border-l border-gray-300 px-4">
              <p className="text-lg font-bold">265</p>
              <p className="text-sm text-gray-500">Chapters</p>
            </div>
            <div className="text-center border-l border-gray-300 px-4">
              <p className="text-lg font-bold">Eng</p>
              <p className="text-sm text-gray-500">Language</p>
            </div>
          </div>
        </div>
        {/* Manga Info */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">{selectedManga?.title}</h1>
          <p className="mt-2 text-sm text-gray-600">{selectedManga?.pages}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-2 border-b">
          <button
            onClick={() => setActiveTab("manga")}
            className={`px-4 py-2 ${activeTab === "manga" ? "text-orange-500 font-bold" : "text-gray-600"
              }`}
          >
            Manga
          </button>
          <button
            onClick={() => setActiveTab("chapters")}
            className={`px-4 py-2 ${activeTab === "chapters" ? "text-orange-500 font-bold" : "text-gray-600"
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
