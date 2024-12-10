import React from "react";
import { CgAdd } from "react-icons/cg";
import { LuCircleSlash } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const CardFavourites = () => {
  const navigate = useNavigate(); 
  const handleEditRedirect = () => {
    navigate("/editManga"); 
  };
  // Hardcoded manga data
  const mangas = [
    {
      title: "Manga Title 1",
      genre: "Action",
      typeColor: "text-blue-500",
      borderColor: "border-blue-500",
      cover_photo: "https://cdn.discordapp.com/attachments/1283412538482233411/1315819189969092658/01731543bd32ac773a1b2fa236c42971.png?ex=6758cb9d&is=67577a1d&hm=81282c0106a0e51cabd113cfa43b1f4a34f5446d5dfaea5ffaa4b5d1eaa4eea2&",
    },
    {
      title: "Manga Title 2",
      genre: "Adventure",
      typeColor: "text-red-500",
      borderColor: "border-red-500",
      cover_photo: "https://s3-alpha-sig.figma.com/img/4752/041f/cc793dcc52688d573a23d35008034950?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irCVXyUNMqfewMSz5oNUBqtHph3l~u1Rx3zqEMidJ79EuJAmz8QqbU4zXYbunAVx15o8H9XzTv6w0R2jp~6I6moTUwAXUd7iVAuuAmlzo8FH7gKaJ8Rwm80uwcwlrpVDgjoi62oAtr95d-eO4D6HSQrSYeMhJqhj0orjiARl-95ysvz-I89XlNrF9AzcSSilzaPMFb-gqL879ZfA7DVFnDTdDsV3ESQ1q3q3AGLaZ20fdhQbHCmq4ATj5L5jAxF06GrTr7FiC5Ur3vMU71Q6PlAt8FKjK6CVKJCery0wCWz8Qkd25n85aLUmduoHCq4DqpwXXQT-MX65XTnZNxZuXw__",
    },
    {
      title: "Manga Title 3",
      genre: "Fantasy",
      typeColor: "text-green-500",
      borderColor: "border-green-500",
      cover_photo: "https://s3-alpha-sig.figma.com/img/0956/b289/ce446d132f775f7d46948fd643a81f14?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gLUBLGbu6kncXuGGjKleaSIchpxRk~556GrPPmo6IqMear-WgI4YZkbmBDJhaivwsD5GlABELgsqNdold4qspLC24kEsykDcwbe8cFf7z3ttImY5C6cwSzPULWAmB2IR4Udhqiki-rhNZfRanLopbeblZVvelHZtyY2cHhzxNilV9Br~YvhlGB4msABTUAY8HjM4aPSWU839yx4CF4FiCf0Bli5CH5jnDyIMTfnqUEyBancH6KY7aMe30H6NtY-nLD5df1QaiCyif02dPAyxXF~C6Kr1fNFbjG5Tcx-hqBEfzw7LR40yj67byGetJvCLgnXXnsdnNE0A~e-cEq8eQg__",
    },
    {
      title: "Manga Title 4",
      genre: "Romance",
      typeColor: "text-purple-500",
      borderColor: "border-purple-500",
      cover_photo: "https://s3-alpha-sig.figma.com/img/6b93/5748/e778a1cb439aaeb6cb3892b226a086f1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=esnyhbUWICKuRiwDxiENnvtEEWPfTcMJj7I0fQc89~ctJ-BBt6Y69deusTxFUWMQs2HFUu5aqC02EdqDLUCCzwUHKShsPgWOcHRtuJgnx6jEzfoagFMqTommjuvDeZJuEsUB6D~as3Ym31HEiOPXGxyd7ClfgVQtJvR~8PwSp8xGlmaXCh~ThSmBWe47Q-UpLIwqrG-irFJ8rWM4fItrnh1xSUn8sJYIrDukII5DjcQW6ThOQqqNCutJCZfkWZ~A6S57S4cQgAbHLZOV-rIrJwimFB3xeXIQROw9KXyoCLJnsKr-89E8YhK94eHMSHCY47Zs1EnxWvW~KUjudmmVvg__",
    },
  ];

  return (
    <div className="relative -mt-12 px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-[90%] mx-auto relative z-10">
        <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start md:ml-44">
          <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">All</button>
          <button className="px-4 py-2 rounded-lg bg-red-200 text-gray-700">Shonen</button>
          <button className="px-4 py-2 rounded-lg bg-yellow-200 text-gray-700">Seinen</button>
          <button className="px-4 py-2 rounded-lg bg-green-200 text-gray-700">Shojo</button>
          <button className="px-4 py-2 rounded-lg bg-purple-200 text-gray-700">Kodomo</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {mangas.map((manga, index) => (
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
                <button onClick={() => handleEditRedirect(manga)} className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  Edit
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

export default CardFavourites;


