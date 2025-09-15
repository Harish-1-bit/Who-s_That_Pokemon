import React from 'react'

const Rules = () => {
  return (
    <div>
                <p className='  text-3xl font-extrabold mt-5'>Rules :</p>
        <ul className='list-disc px-5 mt-5'>
          <li className='py-2 text-xl font-extralight'>You begin the game with a total of three lives.</li>
          <li className='py-2 text-xl font-extralight '>A black, shadowed image of a Pokémon will appear on the screen.</li>
          <li className='py-2 text-xl font-extralight  '>You must correctly guess the name of the Pokémon and enter it.</li>
          <li className='py-2 text-xl font-extralight  '>Each incorrect guess will cause you to lose one life.</li>
        </ul>
    </div>
  )
}

export default Rules
