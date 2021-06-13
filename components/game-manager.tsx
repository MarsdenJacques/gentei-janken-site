import {useState, useEffect, useRef} from 'react'
import Table from "./table"
import Hand from './hand'
import style from './card.module.css'

//does all card type imports/game logic, hands off the image values, player values, etc... to table and hand

export default function GameManager()
{
    return
    (
        <div>
            <Hand/>

        </div>
    )
}
//            <Table/>