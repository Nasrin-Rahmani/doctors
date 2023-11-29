import "./index.css"
import React from "react"
 export default function Doctors(props){

    return(
        <div id="doctor-list" >
            <div className="doctor-card">
                <img src={props.image} alt="doctor name"/>
                <h2>{props.name}</h2>
                <p>{props.specialization}</p>

            </div>
        </div>
    );
 };