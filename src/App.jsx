import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import StandarLayout from "./layout/StandarLayout";
import AdminPanel from "./pages/AdminPanel";
import AuthorProfile from "./pages/AuthorProfile";
import Manager from "./pages/Manager";
import Mangas from "./pages/Mangas";
import NewRole from "./pages/NewRole";
import EditAuthor from "./pages/EditAuthor";

import EditChapter from "./pages/EditChapter";
import EditCompany from "./pages/EditCompany";
import Favourites from "./pages/Favourites";
import SignIn from "./pages/SignIn";
import SignUpRegister from "./pages/SignUpRegister";
import StandarLayoutNav from "./layout/StandarLayoutNav";
import EditManga from "./pages/EditMangaPage";
import NewMangaForm from "./components/CreateManga/NewManga";
import NewCahpterForm from "./components/CreateChapter/NewChapter";
import NewAuthorForm from "./components/CreateAuthor/NewAuthor";
import NewCompanyForm from "./components/CreateCompany/NewCompany";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setUser } from "./store/action/actionsignin/actionsignin";
import {
  SignRoute,
  AuthRoute,
  NoLoginRoute,
} from "./components/sininRouter/signinRouter";
import Company from "./components/Company/Company";
import ChapterRead from "./pages/Chapter";
import MangaPage from "./pages/Manga";
import NotFound from "./components/NotFound/NotFound";
import Author from "./components/Author/Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandarLayout />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/favourite", element: <Favourites /> },
      { path: "/authorprofile", element: <AuthorProfile /> },
      { path: "/manager", element: <Manager /> },
      { path: "/mangas", element: <Mangas /> },
      {
        path: "/adminPanel",
        element: (
          <NoLoginRoute>
            <AdminPanel />
          </NoLoginRoute>
        ),
      },
      { path: "/company", element: <Company /> },
    ],
  },
  {
    element: <StandarLayoutNav />,
    children: [
      { path: "/editChapter", element: <EditChapter /> },
      {
        path: "/signIn",
        element: (
          <SignRoute>
            <SignIn />
          </SignRoute>
        ),
      },
      { path: "/signUpRegister", element: <SignUpRegister /> },
      { path: "/editManga", element: <EditManga /> },
      { path: "/editAuthor", element: <EditAuthor /> },
      { path: "/editCompany", element: <EditCompany /> },
      {
        path: "/newManga",
        element: (
          <AuthRoute>
            {" "}
            <NewMangaForm />{" "}
          </AuthRoute>
        ),
      },
      { path: "/newChapter", element: <NewCahpterForm /> },
      { path: "/newAuthor", element: <NewAuthorForm /> },
      { path: "/newCompany", element: <NewCompanyForm /> },
      { path: "/newRole", element: <NewRole /> },
      { path: "/chapter", element: <ChapterRead /> },
      { path: "/manga", element: <MangaPage /> },
      { path: "/author", element: <Author /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/api/auth/token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error during token authentication:", error);
  }
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loginWithToken(token).then((user) => {
        if (user) dispatch(setUser({ user, token }));
      });
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
