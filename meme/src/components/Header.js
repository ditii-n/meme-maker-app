import React from "react"
import download from "../images/download.jfif"
export default function Header(){
    return(
        <header className="header">
            <img 
                src={download}
                className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Generate your own memes</h4>
        </header>
    )
}