import React, {useEffect} from "react"
import "./slideshow.css"
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function Slides({SlideData}) {
    const [current, setCurrent] = useState(0);
    const length = SlideData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        const timer = setTimeout(nextSlide, 5000);

        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div className="full--Slides">
            <FontAwesomeIcon className={"left-arrow"} onClick={prevSlide} icon={faChevronLeft}/>
            <FontAwesomeIcon className={"right-arrow"} onClick={nextSlide} icon={faChevronRight}/>
            {SlideData.map((slides, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide-inactive'} key={index}>
                        {index === current && (
                            <img src={slides.image} className="slideshow--Image"></img>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

// Rename components to slideshow and slideData
// https://www.youtube.com/watch?v=l1MYfu5YWHc