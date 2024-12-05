import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import axios from "axios";

import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
import StandarLayout from "./layout/StandarLayout";
// import AdminPanel from "./pages/AdminPanel";
import AuthorProfile from "./pages/AuthorProfile";
import Manager from "./pages/Manager";
 import Mangas from "./pages/Mangas";
// import NewRole from "./pages/NewRole";
// import EditAutor from "./pages/EditAutor";
// import Chapter from "./pages/Chapter";
// import ChapterForm from "./pages/ChapterForm";
// import EditChapter from "./pages/EditChapter";
// import CompanyProfile from "./pages/CompanyProfile";
// import EditCompany from "./pages/EditCompany";
// import Favourite from "./pages/Favourite";
import SignIn from "./pages/SignIn"
import SignUpRegister from "./pages/SignUpRegister"

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandarLayout />, 
    
    children: [
      { path: "/", element: <Home /> },
      // { path: "/favourite", element: <Favourite /> },
      { path: "/authorprofile", element: <AuthorProfile /> },
      { path: "/manager", element: <Manager /> },
       { path: "/mangas", element: <Mangas /> },
      // { path: "/newrole", element: <NewRole /> }, 
      // { path: "/editauthor", element: <EditAutor /> },
      // { path: "/chapter", element: <Chapter /> },
      // { path: "/chapterForm", element: <ChapterForm /> },
      // { path: "/editCompany", element: <EditCompany /> },
      // { path: "/editChapter", element: <EditChapter /> },
      {path: "/signIn", element: <SignIn/>},
      {path: "/signUpRegister", element: <SignUpRegister/>},
      // {path: "*", element: <NotFound /> },
      // {path:"/adminPanel", element: <AdminPanel />},
      // {path:"/authorFomr", element: <AuthorForm />},
      // {path:"/authorProfile", element: <AuthorProfile />},
      // {path:"/company", element: <Company />},
      // {path:"/companyProfile", element: <CompanyProfile />},

    ],
  },
 
  
  
 
  
]);

// const loginWithToken = async (token) => {
//   try {
//     const response = await axios.get("http://localhost:8080/api/auth/token", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error during token authentication:", error);
//   }
// };

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     loginWithToken(token).then((user) => {
  //       if (user) dispatch(setUser({ user, token }));
  //     });
  //   }
  // }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;

