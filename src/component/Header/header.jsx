import React from "react"
import img from '../../assets/Trollface.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={img}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}