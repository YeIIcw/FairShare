import React, {useEffect} from "react"
import "./homepage.css"
import {useState} from "react"


export default function Homepage({SlideData}) {
    return (
        <div className="full--Home">
            <button className="signin--Home">Sign <span style={{color: "yellow"}}>In</span></button> 
        </div>
    )
}
