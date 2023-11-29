import React from "react";
import "./index.css"
  

export default function DoctorDetails(props){
     return(
        <div id="DoctorDetails">
        <div className="doctor-details">
         <img src={props.image} width="200" height="200" alt="Doctor image"/>
         <h2>{props.name}</h2>
         <p>{props.specialization}</p>
         <p>{props.avilability}</p>
         <p>{props.location}</p>
         <p>{props.contact}</p>
        </div>
        </div>
     )
}