import { configureStore } from '@reduxjs/toolkit'
import reduxHome from './reducer/reducerhome/reducerhome'
import reduxMangas from './reducer/reducermangas/reducermangas'
import reduxCategory from './reducer/reducecategory/reducercategory'


const store = configureStore({
    reducer: {
        homeStore: reduxHome,
        mangasStore: reduxMangas,
        categoryStore: reduxCategory
      
    }
})

export default store