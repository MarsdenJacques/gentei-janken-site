import {useState, useEffect, useRef} from 'react'
import style from './card.module.css'

export default function Card({cardValue, flipped, Play}:{cardValue: string, flipped:boolean, Play():void}) {


    const [faceUp,setFaceUp] = useState(true)
    const [value,setValue] = useState(cardValue)
    const [played, setPlayed] = useState('')

    function PlayCard():void
    {
        setPlayed(' ' + style.test)
        Play()
    }

    useEffect(() => {
        setFaceUp(!flipped)
    },[flipped])

    return (
      <section className = {style.flipped + played} onClick = {PlayCard}>
        { //front
            faceUp && 
            <div>

            </div>
        }
        { //back
            !faceUp &&
            <div>

            </div>
        }
      </section>
    )
  }
  