import { configureStore } from '@reduxjs/toolkit';
import { NavBarReducer } from './slices';

const store = configureStore({
    reducer : {
        navBar : NavBarReducer
    }
});

export default store;