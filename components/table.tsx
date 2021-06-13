import {useState, useEffect, useRef} from 'react'
import style from './table.module.css'
import Card from './card'
import {CardInterface} from '../global-types/card-interface'

export default function Table({playedCards, Play}:{playedCards:CardInterface[], Play():void})
{
    const [cards, setCards] = useState(playedCards)

    return(
        <section>
            {
                cards.map(({player,flipped, front, back}) => 
                {
                    <Card key = {player} player = {player} flipped = {flipped} front = {front} back = {back} Play = {Play}/> //should update value from array instead
                })
            }
        </section>
    )
}