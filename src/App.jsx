import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import PokeContext, { PokeProvider } from './context/PokeContext'
import {  useContext, useState } from 'react'
import Start from './components/Start'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Game from './components/Game'
import { HiQuestionMarkCircle } from "react-icons/hi";



const App = () => {
  const {theme}=useContext(PokeContext)
  const [start,setStart]=useState(true)
  const handleStart=()=>{
    setStart(start?false:true)
  }
  return (
    <>
      <Navbar  />
      <button className={theme?' text-3xl absolute right-10 top-20':' text-3xl absolute right-10 top-20 text-white'} onClick={handleStart}><HiQuestionMarkCircle /></button>
      <Game/>
      <Start start={start} handleStart={handleStart}/>

    </>
  )
}

export default App
