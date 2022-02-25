import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
    name : 'navBar',
    initialState : {
        active : false,
        theme : localStorage.getItem('theme') 
    },
    reducers : {
        setActive : (state) => {
            state.active = !state.active;
        },
        setTheme : (state) => {
            state.theme = !state.theme;
        },
        setCurrentTheme : (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const { setActive, setTheme, setCurrentTheme } = navBarSlice.actions;
export default navBarSlice.reducer;