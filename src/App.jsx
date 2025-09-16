import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import { PokeProvider } from './context/PokeContext'
import {  useState } from 'react'
import Start from './components/Start'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Game from './components/Game'


const App = () => {
  const [start,setStart]=useState(false)
  const handleStart=()=>{
    setStart(start?false:true)
    setStart(true)
  }
  return (
    <PokeProvider>
      <Navbar />
      <Start  start={start} handleStart={handleStart}/>
      <Game start={start}/>

    </PokeProvider>
  )
}

export default App
