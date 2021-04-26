import {useState, useEffect, useRef} from 'react'
import style from './index.module.css'
import Hand from '../components/hand'

export default function Home() {
  return (
    <div className = {style.gameWindow}>
      <Hand/>
    </div>
  )
}
