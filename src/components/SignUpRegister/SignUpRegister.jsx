import React from "react";
import SignInFoto from "../../assets/image/SignInFoto.jpg";
import imagenHome from "../../assets/image/LOGO_DOS.png";
import imagenGoogle from "../../assets/image/imagenGoogle.png";
import { Link } from "react-router-dom";

function SignUpRegister() {
    return (
        <div className="flex w-full min-h-screen">
            {/* Formulario */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
                <form className=" m-6 sd:w-[50] h-[80%] md:w-[60%] ">

                     <div className="text-center mb-6">
                         <img className="mx-auto w-23 h-16" src={imagenHome} alt="Minga Logo" />
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
                                     placeholder="DragonballZ@Krowl.com"
                                     className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                 />
                                 <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400"
                                 >
                                     <path
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                                     />
                                 </svg>
                             </div>

                         </div>
                         <div className="mt-4 relative">
                             <label
                                 htmlFor="password"
                                 className="block text-sm font-medium text-gray-700"
                             >
                                 Photo
                             </label>
                             <div className="relative">
                                 <input
                                     id="password"
                                     type="password"
                                     placeholder="Url"
                                     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                 />
                                 <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400"
                                 >
                                    <path
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                     />
                                     <path
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                     />
                                 </svg>
                             </div>
                         </div>

                         <div className="relative mt-4">
                             <label
                                 htmlFor="password"
                                 className="block text-sm font-medium text-gray-700"
                             >
                                 Password
                             </label>
                             <div className="relative">
                                 <input
                                     id="password"
                                     type="password"
                                     placeholder="••••••••"
                                     className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                 />
                                 <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500"
                                 >
                                     <path
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                     />
                                 </svg>
                             </div>
                         </div>


                         <div className="mt-4 flex items-center">
                             <input
                                 id="notification"
                                 type="checkbox"
                                 className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                             />
                             <label
                                 htmlFor="notification"
                                 className="ml-2 text-sm text-gray-700"
                             >
                                 Send notification to my email
                             </label>
                         </div>
                     </div>
                     <div className="mt-6">
                         <button
                             type="submit"
                             className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
                         >
                             Sign up
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
                         <p className="text-sm text-black">
                             Already have an account?{" "}
                             <Link to="/sign-in" className="text-orange-500 hover:underline">
                                 Log in
                             </Link>
                         </p>
                         <Link to="/" className="text-sm text-black hover:underline mt-2 block">
                             Go back to home page
                         </Link>
                     </div>
                 </form>
            </div>
            {/* Imagen */}
            <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-50">
                <img className="w-full h-[100vh] object-cover" src={SignInFoto} alt="SignIn" />
            </div>
        </div>
    );
}

export default SignUpRegister;