import React from "react";
import Doctors from "./Doctors";
import "./index.css"

export default function DoctorShow(props){
      return(
        <div>
<Doctors image={props.list[0].image} name={props.list[0].name} specialization={props.list[0].specialization} ></Doctors>
<Doctors image={props.list[1].image} name={props.list[1].name} specialization={props.list[1].specialization}></Doctors>
<Doctors image={props.list[2].image} name={props.list[2].name} specialization={props.list[2].specialization}></Doctors>
<Doctors image={props.list[3].image} name={props.list[3].name} specialization={props.list[3].specialization}></Doctors>
<Doctors image={props.list[4].image} name={props.list[4].name} specialization={props.list[4].specialization}></Doctors>
<Doctors image={props.list[5].image} name={props.list[5].name} specialization={props.list[5].specialization}></Doctors>      
        </div>
     
       ) 
      
      

      
};
