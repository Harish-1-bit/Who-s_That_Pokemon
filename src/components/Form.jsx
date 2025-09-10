import React, { useContext,  useState } from 'react'
import PokeContext from '../context/PokeContext'


const Form = () => {
    const {pokemon,dispatch,score,life}=useContext(PokeContext)
    const [answer,setAnsweer] = useState("")
    const [btn,setBtn] = useState("Submit Your Answer")






    const handleSubmit=(event)=>{
        event.preventDefault()
        if(pokemon.name===answer){
            dispatch({
                type:"incerse"
            })

        }else{
            setTimeout(() => {

                dispatch({
                type:"decrease"
            })
            },100)

        }
        console.log(answer)
            dispatch({
                type:"visible"
            })

        setAnsweer("")
    }

        const text=()=>{
            setBtn("Wrong. Try Again!")
        }
    return (
        <form className={score===1000 || life===0? "hidden":""} onSubmit={(event)=>{
            
            handleSubmit(event)
        }}>
            <input value={answer} onChange={(event)=>{
                setAnsweer(event.target.value)
            }} type="text" placeholder='Enter Pokemon Name' className='border border-gray-400 w-full rounded-md p-2.5' />
            <button onClick={text}  className='bg-emerald-500 hover:bg-emerald-600 cursor-pointer w-full rounded-md my-2 text-white font-bold py-2.5'>{btn}</button>
        </form>
    )
    }

export default Form
