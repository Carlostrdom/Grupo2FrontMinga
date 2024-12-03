import imagenMangas from "../assets/image/bgMangas.jpg"
import { useNavigate } from "react-router-dom"

//Con este componente vamos a repetir en todo las pages principales y tener en cuenta que hay que remplazar las imagen y el texto segun la pages.
const HeroMangas = ({})=>{
    return(
        <div className="w-full h-[75vh] relative flex items-center">
        <img src={imagenMangas} className="w-full h-full object-cover" alt="" />
        <div className="absolute left-[8vw]">
            <h3 className="font-bold text-5xl text-white" >CompanyName o <br>AuthorName</br> </h3>
             
              
              
        </div>
    </div>
    )
}






const Mangas=()=> {
    const navigate = useNavigate()
    const handleClick=() => {
    navigate("/home")
    }
    return (
        <>
       <HeroMangas></HeroMangas>
        
      
        </>
    )
}

export default Mangas