import React from "react";
import "./header.css"
import svgImg from "../../assets/Trollface.png"

export default function Header(){
    return(
        <div className="header-el">
            <img src={svgImg} width="40" height="40" />
            <h1>Meme Generator</h1>
        </div>
    )
}