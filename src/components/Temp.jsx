import React from 'react'
import { useState } from 'react'
import "./Temp.css"


function Temp() {


    const [temp, setTemp] = useState(0);
    const [red, setRed] = useState(250);
    const [blue, setBlue] = useState(250);
    console.log(red,blue);
    let mystyle = {
        backgroundColor: `rgb(${red},0,${blue} )`,
        Color: "rgb(250,250,250)"
    }
    return (
        <div id='maincontainer' >
            <div id="childcontainer" >
                <div style={mystyle} id='temperaturedisplay'>
                    <h1> {temp}</h1>
                </div>
                <div id='btnholder' >
                    <button className='btn bt1' onClick={() => { setTemp(temp + 1); setRed(red + 20); setBlue(blue - 20) }} >+</button>
                    <button className='btn bt2' onClick={() => { setTemp(temp - 1); setBlue(blue + 20);setRed(red - 20) }}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Temp