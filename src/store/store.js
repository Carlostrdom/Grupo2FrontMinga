import { configureStore } from '@reduxjs/toolkit'
import reduxHome from './reducer/reducerhome/reducerhome'


const store = configureStore({
    reducer: {
        homeStore: reduxHome,
      
    }
})

export default store