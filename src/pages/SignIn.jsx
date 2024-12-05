import React from "react";
import SignInFoto from "../assets/image/SignInFoto.jpg";
import SignInLogin from "../components/singIn/SignIn";

const SignIn = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden md:flex w-1/2">
        <img
          className="w-full h-full object-cover"
          src={SignInFoto}
          alt="Sign In Background"
        />
      </div>
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <SignInLogin />
      </div>
    </div>
  );
};

export default SignIn;
