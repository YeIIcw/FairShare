import React, {useEffect} from "react"
import "./sidebar.css"
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faTableList } from '@fortawesome/free-solid-svg-icons'
import { faTty } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'



export default function Sidebar({}) {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState();
    const toggleOpen = (num) => {
        // const panel = document.getElementById("test")
        // panel.classList.toggle('active')
        if(open == true && num != selected)
        {
            setOpen(false);
            setOpen(true);
        }
        else if(open == true)
        {
            setOpen(false);
        }
        else if(open == false)
        {
            setOpen(true)
        }
    }

    const test = () => {
        console.log("click")
    }

    return (
        <nav id="sidebar" className={"sidebar--Panel"}>
            <div id="sidebarcontent" className="sidebar--Content">
                <button className="sidebar--Toggle" onClick={() => {
                    const sidebar = document.getElementById("sidebar");
                    sidebar.classList.toggle('active');
                }}>☰</button>
                <div className="sidebar--Profile">
                    <img className="profile--Picture" src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/277565304_397642539029652_3519727373335656754_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0tj8rZpZ27oAX9rjMrT&_nc_ht=scontent-yyz1-1.xx&oh=00_AfC-_xjx2pZlft2e3dw1_z-g7kO3XfznNnkvyXLUFn_Uvw&oe=6393E762"></img>
                </div>
                <div className="sidebar--ButtonPanel">
                    <div className="sidebar--InnerButtonPanel">
                        <button onClick={() => {
                            toggleOpen(1);
                            setSelected(1);
                        }} className="sidebar--Button"><span><FontAwesomeIcon icon={faTableList}/></span> Link1 </button>
                        {open && selected == 1 && (
                            <div id="test" className="sidebar--SubButtonPanel">
                                <button>Sublink1</button>
                                <button>Sublink1</button>
                                <button>Sublink1</button>
                            </div>
                        )}
                        <button onClick={() => {
                            toggleOpen(2);
                            setSelected(2);
                        }} className="sidebar--Button"><span><FontAwesomeIcon icon={faGear}/></span> Link2 </button>
                        {open && selected == 2 && (
                            <div className="sidebar--SubButtonPanel">
                                <button>Sublink2</button>
                                <button>Sublink2</button>
                                <button>Sublink2</button>
                            </div>
                        )}
                        <button onClick={() => {
                            toggleOpen(3);
                            setSelected(3);
                        }} className="sidebar--Button"><span><FontAwesomeIcon icon={faTty}/></span> Link3 </button>
                        {open && selected == 3 && (
                            <div className="sidebar--SubButtonPanel">
                                <button>Sublink3</button>
                                <button>Sublink3</button>
                                <button>Sublink3</button>
                            </div>
                        )}
                        <button onClick={() => {
                            toggleOpen(4);
                            setSelected(4);
                        }} className="sidebar--Button"><span><FontAwesomeIcon icon={faLandmark}/></span> Link4 </button>
                        {open && selected == 4 && (
                            <div className="sidebar--SubButtonPanel">
                                <button>Sublink4</button>
                                <button>Sublink4</button>
                                <button>Sublink4</button>
                            </div>
                        )}
                        <button onClick={() => {
                            toggleOpen(5);
                            setSelected(5);
                        }} className="sidebar--Button">Link5</button>
                        {open && selected == 5 && (
                            <div className="sidebar--SubButtonPanel">
                                <button>Sublink5</button>
                                <button>Sublink5</button>
                                <button>Sublink5</button>
                            </div>
                        )}
                        <button onClick={() => {
                            toggleOpen(6);
                            setSelected(6);
                        }} className="sidebar--Button">Link6</button>
                        {open && selected == 6 && (
                            <div className="sidebar--SubButtonPanel">
                                <button>Sublink6</button>
                                <button>Sublink6</button>
                                <button>Sublink6</button>
                            </div>
                        )}
                        <button onClick={() => {
                            toggleOpen(7);
                            setSelected(7);
                        }} className="sidebar--Button">Link7</button>
                        {open && selected == 7 && (
                            <div className="sidebar--SubButtonPanel">
                                <button>Sublink7</button>
                                <button>Sublink7</button>
                                <button>Sublink7</button>
                            </div>
                        )}
                        <button onClick={() => {
                            toggleOpen(8);
                            setSelected(8);
                        }} className="sidebar--Button">Link8</button>
                        {open && selected == 8 && (
                            <div className="sidebar--SubButtonPanel">
                                <button>Sublink8</button>
                                <button>Sublink8</button>
                                <button>Sublink8</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="sidebar--Footer">
                    <h3>G11 | Robotics</h3>
                    <h1>Jason Chen
                        <span onClick={test}>
                            <FontAwesomeIcon icon={faGear}/>
                        </span>
                        <span onClick={test}>
                            <FontAwesomeIcon icon={faRightFromBracket}/>
                        </span>
                    </h1>     
                </div>
            </div>
        </nav>
    )
}

// Reduce top height
// Make profile picture area smaller
// Make dropdown links
// Make bottom footer less tall