import React from "react";
import one from "./one.svg";
import two from "./two.svg";
import three from "./three.svg";

const sectionDetail = [
    {
        heading: "Create an invite-only place where you belong",
        para: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
        img: one,
        cls: ""
    },
    {
        heading: "Where hanging out is easy",
        para: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
        img: two,
        cls: "dim"
    },
    {
        heading: "From few to a fandom",
        para: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
        img: three,
        cls: ""
    }
];
export const Section = () => {
    return (
        <div >
                {sectionDetail.map((e) => (
                    <div className={"swrap " + e.cls}>
                        <div className="main-image">
                            <img src={e.img} alt="main"></img>
                        </div>
                        <div className="main-text">
                            <h1>{e.heading}</h1>
                            <p>{e.para}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};
