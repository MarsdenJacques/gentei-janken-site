import {useState, useEffect, useRef} from 'react'
import style from './hand.module.css'
import Card from './card'

export default function Hands() {

    function Play():void
    {

    }

    return(
        <section className = {style.hand}>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
            <Card cardValue = {'test'} flipped = {false} Play = {Play}/>
        </section>
    )
}