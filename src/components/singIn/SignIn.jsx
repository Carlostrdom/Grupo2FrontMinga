import React from "react";
import LogoDos from '../../assets/image/LOGO_DOS.png';
import imagenGoogle from '../../assets/image/imagenGoogle.png';
import { Link } from "react-router-dom";

function SignInLogin() {
  return (
    <div className="w-full max-w-md mx-auto ">
      {/* Logo */}
      <div className="text-center mb-6">
        <img className="mx-auto w-[10vw] h-[8vh]" src={LogoDos} alt="Minga Logo" />
        <h2 className="text-2xl font-bold text-gray-700 mt-4">
          Welcome <span className="text-orange-500">back!</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Discover manga, manhua and manhwa, track your progress, have fun, read manga.
        </p>
      </div>

      {/* Formulario */}
      <form className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1">
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-orange-500 absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 mt-1"
          />
        </div>

        {/* Botón de inicio de sesión */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
          >
            Sign in
          </button>
        </div>

        {/* Botón de Google */}
        <div>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-white text-gray-700 border rounded-lg py-2 shadow-sm hover:bg-gray-100"
          >
            <img src={imagenGoogle} alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>
      </form>

      {/* Links de ayuda */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          You don't have an account?{" "}
          <Link to="/signup" className="text-orange-500 hover:underline">
            Sign up
          </Link>
        </p>
        <Link to="/" className="text-sm text-gray-500 hover:underline mt-2 block">
          Go back to home page
        </Link>
      </div>
    </div>
  );
}

export default SignInLogin;