import React from 'react'
import { PokeProvider } from '../context/PokeContext'
import Card from './Card'
import ScoreBoard from './ScoreBoard'
import Form from './Form'


const Game = () => {
  return (
    <div className="p-8 min-h-screen transition-all duration-300 ease-in-out">
        <h1 className="text-center text-2xl font-semibold">Who's That Pokemon?</h1>
        <Card />
        <ScoreBoard />
        <Form/>
      </div>
  )
}

export default Game
