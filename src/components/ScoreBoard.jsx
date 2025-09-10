import React, { useContext } from 'react'
import PokeContext from '../context/PokeContext'

const ScoreBoard = () => {

    const {life } = useContext(PokeContext)


    return (
        <div className='py-2 my-2 flex items-center justify-between'>
            <div className='flex'>
                {
                    life === 3 ? (
                        <>
                            <img className='h-8' src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" alt="" />
                            <img className='h-8' src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" alt="" />
                            <img className='h-8' src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" alt="" />
                        </>
                    ) : life === 2 ? (<>
                        <img className='h-8' src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" alt="" />
                        <img className='h-8' src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" alt="" />

                    </>) : life===1?(<>
                        <img className='h-8' src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" alt="" />

                    </>):<></>
                }
            </div>
        </div>
    )
}

export default ScoreBoard
