import {useState, useEffect, useRef} from 'react'
import style from './hand.module.css'
import Card from './card'
//import {JankenTypes} from '../global-types/janken/janken-card'

export default function Hand() {

    function Play():void
    {

    }

    return(
        <section className = {style.hand}>
            <Card player = {1} flipped = {false} front = {"/"} back = {"/"} Play = {Play}/>
            <Card player = {2} flipped = {true} front = {"/"} back = {"/"} Play = {Play}/>
        </section>
    )
}