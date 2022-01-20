import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import right from "./right.svg";
import left from "./left.svg";
import Fade from 'react-reveal/Fade';


export const Header = () => {
    return (
        <div >
    
                <div className="headWrap">
                <Fade left >
                    <div className="top">
                        <div className="textwrap">
                        <h1>IMAGINE A PLACE...</h1>
                        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                        </div>
                        <div className="bwrap">
                            <button className="white">Download for Windows</button>
                            <button className="black">Open Discord in your browser</button>
                            <button className = "play">Download from Google Play</button>
                        </div>
                    </div>
                    <div className="imgwrap">
                        <img src={left} className="left" alt="doodle"></img>
                        <img src={right} className = "right" alt="doodle"></img>
                    </div>
                </Fade>
                </div>
        
        </div>
    );
};
