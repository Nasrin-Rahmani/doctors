import react,{useState} from "react";
import "./index.css"
import DoctorDetails from "./src/DoctorDetails";




function HandelClick(props){
    const handler=()=>{
        const detailsContainer = document.getElementById(DoctorDetails);
    
   
    if(detailsContainer){}
            detailsContainer.innerHTML= `
        ${<img src={props.image} width="200" height="200" alt="Doctor image"/>
           } ${ <h2>{props.name}</h2>}
            ${<p>{props.specialization}</p>}
           ${<p>{props.avilability}</p>}
          ${ <p>{props.location}</p>}
         ${<p>{props.contact}</p>}};`
} 
}
return(
    <div onClick={handler}>
        
        <img src={props.image} width="200" height="200" alt="Doctor image"/>
         <h2>{props.name}</h2>
         <p>{props.specialization}</p>
         <p>{props.avilability}</p>
         <p>{props.location}</p>
         <p>{props.contact}</p>
    </div>
)
           

export default HandelClick;
