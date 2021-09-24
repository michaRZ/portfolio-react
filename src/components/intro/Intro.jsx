import "./intro.scss";
import {KeyboardArrowDownSharp} from '@material-ui/icons'
import {init} from 'ityped'
import {useEffect, useRef} from 'react'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init (textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Software Developer", "Problem-solver", "Artist"],
        })
    }, [])

    return (
        <div className="intro" id="intro">
        <div className="wrapper">
            <div className="info">
                    <h2>Hello, my name is</h2>
                    <h1>Michaela Raines</h1>
                    <h3><span ref={textRef}></span></h3>
            </div>
            <a href="#about">
                <KeyboardArrowDownSharp className="icon"/>   
            </a>
        </div>
        </div>
    )
}
