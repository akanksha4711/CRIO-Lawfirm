import "./Team.css";

export default function Team ({name, cases, image}) {
    return (
        <div className={name === "Sanfole"? "chip highlight" : "chip"}>
            <img className="chip-image" src={image} alt="dp"/>
            <div className="chip-content">
                <span>{name}</span>
                <p>{cases} Cases</p>
            </div>
        </div>
    )
}