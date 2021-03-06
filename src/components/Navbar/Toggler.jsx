import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/NavbarSlice";

const Toggler = () => {

    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.navBar);
    localStorage.setItem('theme', theme);

    return (
        <>
            <div onClick={() => dispatch(setTheme())} className='nav_toggler'>
                <title>Change Theme</title>
            </div>
        </>
    )
}

export default Toggler;