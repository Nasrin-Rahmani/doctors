import React from 'react';

import DoctorDetails from './DoctorDetails';
import DoctorShow from './DoctorShow';
import HandelClick from './DoctorCard';

import doctorImage1 from './assets/images/doctor1.png';
import doctorImage2 from './assets/images/doctor2.png';
import doctorImage3 from './assets/images/doctor3.png';
import doctorImage4 from './assets/images/doctor4.png';
import doctorImage5 from './assets/images/doctor5.png';
import doctorImage6 from './assets/images/doctor6.png';

// Mock data for doctors
const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    image: doctorImage1,
    specialization: 'Cardiologist',
    availability: 'Mon, Wed, Fri',
    location: '123 Main Street',
    contact: 'johndoe@example.com',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    image: doctorImage2,
    specialization: 'Dermatologist',
    availability: 'Tue, Thu, Sat',
    location: '456 Park Avenue',
    contact: 'janesmith@example.com',
  },
  {
    id: 3,
    name: 'Dr. Robert Johnson',
    image: doctorImage4,
    specialization: 'Pediatrician',
    availability: 'Mon, Wed, Fri',
    location: '789 Elm Street',
    contact: 'robertjohnson@example.com',
  },
  {
    id: 4,
    name: 'Dr. Emily Lee',
    image: doctorImage3,
    specialization: 'Obstetrician',
    availability: 'Tue, Thu, Sat',
    location: '101 Oak Road',
    contact: 'emilylee@example.com',
  },
  {
    id: 5,
    name: 'Dr. Michael Chen',
    image: doctorImage5,
    specialization: 'Orthopedic Surgeon',
    availability: 'Mon, Tue, Fri',
    location: '202 Maple Avenue',
    contact: 'michaelchen@example.com',
  },
  {
    id: 6,
    name: 'Dr. Lisa Brown',
    image: doctorImage6,
    specialization: 'Ophthalmologist',
    availability: 'Wed, Thu, Sat',
    location: '303 Cedar Lane',
    contact: 'lisabrown@example.com',
  }
];



function App() {
  return (
        
    <div className="app">
      
      {doctorsData.map((Doctordata)=>(
       <HandelClick name={Doctordata.name} image={Doctordata.image} specialization={Doctordata.specialization}
       availability={Doctordata.availability} location={Doctordata.location} contact={Doctordata.contact}></HandelClick>
      ))}; 
      <div className="header"> <h1>Doctor Details App</h1></div>
        <DoctorShow list={doctorsData}></DoctorShow>
        <DoctorDetails image={doctorsData[1].image} name={doctorsData[1].name} 
        specialization={doctorsData[1].specialization} availability={doctorsData[1].availability}
        location={doctorsData[1].location} contact={doctorsData[1].contact}>
        </DoctorDetails>
        
      </div>
    
  );
}

export default App;
