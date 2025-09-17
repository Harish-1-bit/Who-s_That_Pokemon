import React, { useContext } from 'react'
import PokeContext from '../context/PokeContext'
import { MdDarkMode } from "react-icons/md";
import { PiCloudSunBold } from "react-icons/pi";


const Navbar = () => {
    const {dispatch,theme}=useContext(PokeContext)
    const handleTheme=()=>{
        localStorage.setItem("theme",JSON.stringify(theme))
        dispatch({
            type:"Change_theme"
        })
    }
    return (
        <nav className='shadow-xl py-2.5 px-12 bg-red-500 flex items-center justify-between'>
            <a href='/'><h1 className='font-bold text-white text-xl'>PokeGame</h1></a>
            <button onClick={handleTheme} className='font-bold text-white text-xl'>{theme?<PiCloudSunBold/>
:<MdDarkMode />}</button>

        </nav>
    )
}

export default Navbar
