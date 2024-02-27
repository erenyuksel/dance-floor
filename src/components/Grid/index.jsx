import { useState } from 'react'
import Cell from '../Cell'
import './styles.css'

const randomColors = () => {
    const colors = []
    for (let i = 0; i < 25; i++) {
        colors.push(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)
    }
    return colors
}

const Grid = () => {
    const [colors, setColors] = useState(randomColors())
    const [intervalRef, setIntervalRef] = useState(null)

    const clickHandler = () => {
        clearInterval(intervalRef)
        const interval = setInterval(() => {
            setColors(randomColors())
        }, 500)
        setIntervalRef(interval)
    }

    return (
        <main>
            <h1>Dancefloor</h1>
            <div className="dancefloor">
                {colors.map(color => <Cell color={color} key={color} />)}
            </div>
            <button onClick={clickHandler}>DANCE TIME!</button>
            
        </main>
    )
}

export default Grid

