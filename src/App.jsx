import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import { PokeProvider } from './context/PokeContext'
import { useRef, useState } from 'react'
import Start from './components/Start'


const App = () => {
  const [start,setStart]=useState(false)
  const handleStart=()=>{
    setStart(true)
  }
  return (
    <PokeProvider>
      <Navbar />
      <Start  start={start} handleStart={handleStart}/>
      <div className={start?"p-8 min-h-screen transition-all duration-300 ease-in-out":"hidden"}>
        <h1 className="text-center text-2xl font-semibold">Who's That Pokemon?</h1>
        <Card />
        <ScoreBoard />
        <Form />
      </div>

    </PokeProvider>
  )
}

export default App
