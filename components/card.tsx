import {useState, useEffect, useRef} from 'react'
import style from './card.module.css'
import {JankenTypes, JankenInterface} from '../global-types/janken/janken-card'

export default function Card({player, flipped, front, back, Play}:{player: number, flipped:boolean, front:string, back:string, Play():void}) {

    //player numbers 0 and under are for AI, 1 and above is for human players (0 = AI1, -1 = AI2, 1 = player1, etc...)

    const [faceUp,setFaceUp] = useState(true)
    const [holder, setHolder] = useState(player)

    function PlayCard():void
    {
        Play()
    }

    useEffect(() => {
      setFaceUp(!flipped)
    },[,flipped])

    const flippedStyle = faceUp ? style.up : style.down

    return (
      <section className = {style.card + ' ' + flippedStyle} onClick = {PlayCard}>
        {faceUp && <div>
          <img alt = 'front' src = {front}/>
        </div>}
        {!faceUp && <div>
          <img alt = 'back' src = {back}/>
        </div>}
      </section>
    )
  }
  