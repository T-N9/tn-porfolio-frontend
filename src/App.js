import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './container/ScrollToTop';
import { NavBar } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTheme } from './redux/slices/NavbarSlice';
import { HomePage, ContactPage, ProjectPage, PortfolioPage } from './pages';
import "css.gg/icons/css/spinner.css";

const App = () => {

    const [ loading , setLoading ] = useState(true);
    const { theme } = useSelector((state) => state.navBar);

    const localStorageKey = "theme";
    
    const dispatch = useDispatch();
    let persistedTheme = localStorage.getItem(localStorageKey);

    useEffect(() => {
        
        if(persistedTheme === null) {
            localStorage.setItem(localStorageKey, false);
            persistedTheme = localStorage.getItem(localStorageKey) && false;
        }else if(persistedTheme === 'true') {
            persistedTheme = true
        }else if (persistedTheme === 'false'){
            persistedTheme = false
        }

        dispatch(setCurrentTheme(persistedTheme))

        setInterval(() => {
            setLoading(false);
        }, 2000);
    }, []);

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
                    <Route path='/portfolio/:slug' element={<ProjectPage/>}/>
                    <Route path='/portfolio' element={<PortfolioPage/>}/>
                </Routes>
            </ScrollToTop>
        </main>
    );
}

export default App;
