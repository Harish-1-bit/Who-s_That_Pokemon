import React, { useContext } from 'react'
import PokeContext, { PokeProvider } from '../context/PokeContext'
import Card from './Card'
import ScoreBoard from './ScoreBoard'
import Form from './Form'


const Game = () => {
  const {theme}=useContext(PokeContext)
  return (
    <div className={theme?"p-8 min-h-screen transition-all duration-300 ease-in-out":"p-8 min-h-screen transition-all duration-300 ease-in-out bg-black"}>
        <h1 className={theme?"text-center text-2xl font-semibold":"text-center text-2xl font-semibold text-white"}>Who's That Pokemon?</h1>
        <Card />
        <ScoreBoard />
        <Form/>
      </div>
  )
}

export default Game
