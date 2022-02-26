import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './container/ScrollToTop';
import { NavBar } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTheme } from './redux/slices/NavbarSlice';
import { HomePage, ContactPage } from './pages';
import "css.gg/icons/css/spinner.css";

const App = () => {

    const [ loading , setLoading ] = useState(true);

    const localStorageKey = "theme";
    
    const dispatch = useDispatch();

    useEffect(() => {
        let persistedTheme = localStorage.getItem(localStorageKey);
        if(persistedTheme === null) {
            localStorage.setItem(localStorageKey, false);
            persistedTheme = localStorage.getItem(localStorageKey) && false;
        }else if(persistedTheme === 'true') {
            persistedTheme = true
        }else if (persistedTheme === 'false'){
            persistedTheme = false
        }

        dispatch(setCurrentTheme(persistedTheme))
        // console.log(persistedTheme);
        // localStorage.removeItem(localStorageKey);

        setInterval(() => {
            setLoading(false);
        }, 2000);
    }, [localStorageKey, dispatch]);


    const { theme } = useSelector((state) => state.navBar);

    return (
        <main className={theme ? 'main_content dark' :  'main_content'}>
            <NavBar/>
            <div className={loading ? "loading_page visible" : "loading_page hidden"}>
                <i className={`gg-${"spinner"}`}></i>
            </div>

            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                </Routes>
            </ScrollToTop>
        </main>
    );
}

export default App;
