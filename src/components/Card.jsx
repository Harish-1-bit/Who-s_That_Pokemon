import React, { useContext, useEffect, useState } from 'react'
import PokeContext from '../context/PokeContext'
import { fetchPokemon } from '../context/PokeService'
import { CgLayoutGrid } from 'react-icons/cg'

const Card = () => {

    const { pokemon, dispatch,score,life} = useContext(PokeContext)
    const [hint,setHint]=useState(false)
    const handleHint=()=>{
        setHint(hint?false:true)
        console.log("object")
    }


    const getPokemon = async () => {
        const data = await fetchPokemon()
        dispatch({
            type: "GET_POKEMON",
            payload: { name: data.name, imageURL: data.sprites.other.dream_world.front_default,ability:data.abilities}
        })

    }

    const restart=()=>{
        window.location.href="/"
        
    }

   

    useEffect(() => {
            getPokemon()
    }, [])
    if (score === 1000) {
        return (
            <div className="border border-gray-300 rounded-md p-4 my-4 text-center flex flex-col gap-4">
                <h1 className=' text-2xl font-bold text-green-600 mb-5'>Winner!!</h1>
                <p className='text-2xl font-bold'>You Guessed it Right</p>
            <img  className='h-52 mt-2' src={pokemon?.imageURL} alt="pokemon" />

            <h1 className=' text-2xl font-extrabold mt-2'>{pokemon.name.toUpperCase()}</h1>
                
                <button onClick={restart} className=' bg-teal-500 text-white px-5 py-2 text-lg font-bold rounded-2xl mt-2'>Play Again ?</button>
            </div>
        )
    }
    if(life===0){
        return(
            <div className="border border-gray-300 rounded-md p-4 my-4 text-center flex flex-col gap-4">
            <h1 className=' text-2xl font-bold text-red-600'>You lost the Game!!</h1>
            <img  className='h-52' src={pokemon?.imageURL} alt="pokemon" />
            <h1 className=' text-2xl font-extrabold mt-2'>{pokemon.name.toUpperCase()}</h1>
                <button onClick={restart} className=' bg-teal-500 text-white px-5 py-2 text-lg font-bold rounded-2xl mt-2'>Play Again ?</button>
        </div>
        )
    }

    

    if (!pokemon) {
        return (
            <div className='flex items-center justify-center'>
                <img className='h-52' src="https://media.tenor.com/d0GeOMz6_HwAAAAM/pikachu.gif" alt="" />
            </div>
        )
    }


    return (
        <div className=' duration-200 text-4xl mx-1 font-bold  font-stretch-95%'>
            <div className="border border-gray-300 rounded-md p-4 my-4 flex items-center justify-center relative">
            <img  className='h-52 brightness-0' src={pokemon?.imageURL} alt="pokemon" />
            <button onClick={handleHint} className={'absolute bottom-2 right-2 text-lg px-3 md:right-5 md:top-5 md:text-2xl md:h-16 md:px-8 border-2 font-mono bg-amber-500 rounded-4xl'}>Hints?</button>
        </div>
          <p className={hint?'':'hidden'}>
            <p>Abilities:-</p>
             {       
                pokemon.ability.map((abi)=>{
           console.log(abi)
           return (
                <span className={'duration-200 text-xl  md:text-2xl text-gray-500 mr-2 my-2 font-bold pos uppercase'}>{`${abi.ability.name}`}.</span>
                

           )  
       } )
       }

          </p>
    
        </div>
    )
}

export default Card
