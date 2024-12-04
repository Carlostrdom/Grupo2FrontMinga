
import React from "react";
import SignInFoto from "../assets/image/SignInFoto.jpg";
import imagenHome from "../assets/image/LOGO_DOS.png";
import imagenGoogle from "../assets/image/imagenGoogle.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex min-h-screen">      
      <div className="w-[50%] hidden md:block">
        <img
          className="w-full h-full object-cover"
          src={SignInFoto}
          alt="Sign In Background"
        />
      </div>     
      <div className="w-full md:w-[50%] flex items-center justify-center bg-gray-50">
        <form className="w-[80%] max-w-md">
        
          <div className="text-center mb-6">
            <img className="mx-auto w-16 h-auto" src={imagenHome} alt="Minga Logo" />
            <h2 className="text-2xl font-bold text-gray-700 mt-4">Welcome back!</h2>
            <p className="text-sm text-gray-500 mt-2">
              Discover manga, manhua and manhwa, track your progress, have fun, read manga.
            </p>
          </div>         
          <div className="space-y-4">           
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">@</span>
              </div>
            </div>          
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>       
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
            >
              Sign in
            </button>
          </div>          
          <div className="mt-4">
            <button
              type="button"
              className="w-full flex items-center justify-center bg-white text-gray-700 border rounded-lg py-2 shadow-sm hover:bg-gray-100"
            >
              <img
                src={imagenGoogle}
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>        
          <div className="mt-6 text-center">
            <p className="text-sm text-black-500">
              You don't have an account?{" "}
              <Link to="/signup" className="text-orange-500 hover:underline">
                Sign up
              </Link>
            </p>
            <Link to="/" className="text-sm text-black-500 hover:underline mt-2 block">
              Go back to home page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
