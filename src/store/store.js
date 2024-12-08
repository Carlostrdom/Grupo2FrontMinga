import { configureStore } from '@reduxjs/toolkit'
import reduxMangas from './reducer/reducermangas/reducermangas'
import reduxCategory from './reducer/reducecategory/reducercategory'
import reducerSignin from './reducer/reducersignin/reducersignin'
import reducerRegister from './reducer/reducerregister/reduxregister'
import newAuthorReducer from './reducer/reducerNewAuthor/reducerNewAuthor'
import newCompanyReducer from './reducer/reducernewcompany/reducernewcompany'


const store = configureStore({
    reducer: {
        mangasStore: reduxMangas,
        categoryStore: reduxCategory,
        signinStore: reducerSignin,
        registerStore: reducerRegister,
        authorNewStore: newAuthorReducer,
        companyNewStore: newCompanyReducer
    
      
    }
})

export default store