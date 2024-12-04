import Hero from "../components/Hero/Hero"
import imagenHome from "../assets/image/bgHome.png"
import { useNavigate } from "react-router-dom"
import Carousel from "../components/Carousel/Carousel"
//Con este componente vamos a repetir en todo las pages principales y tener en cuenta que hay que remplazar las imagen y el texto segun la pages.
const HeroHome = ({handleClick})=>{
    return(
        <div className="w-full h-[75vh] relative flex items-center">
        <img src={imagenHome} className="w-full h-full object-cover" alt="" />
        <div className="absolute left-[8vw]">
            <h3 className="font-bold text-5xl text-white" >For the love of manga</h3>
              <p className="text-white text-3xl mt-2">Explore our varieties</p>
              <p className="text-white text-2xl mt-2">#MingaLove❤</p>
              <button onClick={()=>handleClick()} className="px-20 py-2 bg-white mt-2 text-orange-400 rounded-md font-bold text-3xl">Sign In!</button>  
        </div>
    </div>
    )
}






const Home=()=> {
    const navigate = useNavigate()
    const handleClick=() => {
    navigate("/signIn")
    }
    return (
        <>
       <HeroHome handleClick={handleClick} ></HeroHome>
        <Carousel/>
        <div>

        </div>
      
        </>
    )
}

export default Home