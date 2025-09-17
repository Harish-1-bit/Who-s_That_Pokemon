import React, { useContext } from 'react'
import Rules from './Rules'
import PokeContext from '../context/PokeContext'

const Start = ({start,handleStart}) => {
  const {theme}=useContext(PokeContext)

  return (
    <div className={start?'hidden':'p-10 flex justify-center items-center relative'}>
        <div  className={theme?' mt-28 duration-300 flex flex-col items-center md:w-1/2 shadow-2xl bg-white py-10 rounded-3xl absolute bottom-65 duration-200':' mt-28 duration-300 flex flex-col items-center md:w-1/2 shadow-2xl py-10 rounded-4xl absolute bottom-65 duration-200 bg-black text-white border-2'}>
        <p className="text-center text-4xl font-extrabold">Who's that Pokemon ?</p>
        <marquee className=' text-xl font-semibold mt-5 text-gray-600 w-full'>This Pokémon guessing game challenges you to identify Pokémon based on their silhouettes. You are given three lives to guess as many Pokémon as you can before your lives run out.</marquee>
        <div className=' flex items-start flex-col'>
        <Rules/>
        </div>
          <button className='px-6 py-3 bg-red-600 text-white font-extrabold text-xl rounded-2xl w-xs mt-5 hover:bg-red-500 hover:cursor-pointer ' onClick={()=>{
            handleStart()
          }}>Play Now</button>
      </div>
      </div>
  )
}

export default Start
