import React from "react"
import locationicon from "../images/location-icon.png"

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.item.imageUrl} alt="" />
            <div className="card-info black" >
                <div className="card-location">
                    <span className="card-location-name">
                        <img src={locationicon} alt="" />
                        {props.item.location}
                    </span>
                    <a className="card-location-map" href="">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.item.title}</h2>
                <p className="card-dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}
export default Card