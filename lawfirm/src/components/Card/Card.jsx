import { FaGift } from "react-icons/fa6";
import { Stack } from "@mui/material";
import "./Card.css"

export default function Card ({even, successRate}) {
    return (
        <div className={even ? "card even" : "card"}>
            <div className="card-content">
                <div className="icon-bg">
                    <FaGift size={35} className="icon"/>
                </div>
                <h3>
                    {successRate}% Success Rate
                </h3>
                <p className="card-p">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
                <button className="card-btn">Read more</button>
            </div>
        </div>
    )
}