import { configureStore } from '@reduxjs/toolkit'
import reduxMangas from './reducer/reducermangas/reducermangas'
import reduxCategory from './reducer/reducecategory/reducercategory'
import reducerSignin from './reducer/reducersignin/reducersignin'
import reducerRegister from './reducer/reducerregister/reduxregister'


const store = configureStore({
    reducer: {
        mangasStore: reduxMangas,
        categoryStore: reduxCategory,
        signinStore: reducerSignin,
        registerStore: reducerRegister,
    
      
    }
})

export default store