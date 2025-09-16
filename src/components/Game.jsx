import React from 'react'
import { PokeProvider } from '../context/PokeContext'
import Card from './Card'
import ScoreBoard from './ScoreBoard'
import Form from './Form'


const Game = ({start}) => {
  return (
    <div className={start?"p-8 min-h-screen transition-all duration-300 ease-in-out":"hidden"}>
        <h1 className="text-center text-2xl font-semibold">Who's That Pokemon?</h1>
        <Card />
        <ScoreBoard />
        <Form/>
      </div>
  )
}

export default Game
