import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos)=>{
    console.log("datos ya sabes",datos);
    
    const pay={
        user:datos.user || datos.user.user, 
        token:datos.token
    }
    return {        
        payload:pay,
    }
})


const logout = createAction("logout");

const login = createAsyncThunk("login", async({email,password}) => {
    const credentials = {
        email:email,
        password:password
    }
    
    const response = await axios.post("http://localhost:8080/api/auth/signIn",credentials)
   
    return response.data
}) 


const createAuthor = createAsyncThunk("AUTHOR_CREATE", async ({ name, last_name, city, date, photo,user_id }) => {
    
       try {
        const author = {
            name,
            last_name,
            city,            
            date,
            photo,
            user_id
        };
        console.log(author,"author ya sabes");
        
        const response = await axios.post("http://localhost:8080/api/author/create", author);
        return response.data;
        
       } catch (error) {
        console.error("Error en la creación del usuario:", error.response || error.message);
        return rejectWithValue(error.response ? error.response.data : error.message)
       }
    

        }
    )


export {login,setUser,logout,createAuthor};