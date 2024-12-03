import SignInFoto from "../assets/image/SignInFoto.jpg"



const SignIn = ()=>{
    return(
        <div className="w-full h-full flex items-center">
                <div className="w-[50%] h-full hidden md:block">
                    <img className="w-full h-full" src={SignInFoto} alt="" />
                </div>
                <div className="w-[50%] h-full flex items-center">
                    <form className="w-[50%] h-[50%] " action="">
                        <p>Prueba</p>
                    </form>
                </div>
        </div>
    )
}

export default SignIn