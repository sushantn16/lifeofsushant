"use client"
import { useState } from "react";
export default function Tile(props) {
    const [visibility, setVisibility] = useState(false)
    const handleAccordian = () => {
        setVisibility(!visibility);
    }
    return (
        <div className="border border-solid rounded m-5 border-collapse">
            <div className={"flex p-2 "+(visibility?"border-b border-solid":"")} onClick={handleAccordian}>
            {props.data.name+", "+props.data.organisation}
            </div>
            <p className="location">
                {props.data.location}
            </p>
            <p className="time">
                {props.data.time}
            </p>
            <div className={"description p-2 " + (visibility ? "" : "hidden")}>
                {props.data.description}
            </div>
        </div>
    )
}