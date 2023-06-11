import React, { useState } from 'react';
import axios from 'axios';

const PatientProfile = () => {
    // State variables to store patient information
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[gender, setGender] = useState('');
    const[address, setAddress] = useState('');
    const[dateOfBirth, setDateOfBirth] = useState('');
    const[phone, setPhone] = useState('');
    const[insurance, setInsurance] = useState('');
    const[insuranceNumber, setInsuranceNumber] = useState('');
    const[email, setEmail] = useState('');
    const[payment, setPayment] = useState('');


    // State variable to store appointment history
    const [appointments, setAppointments] = useState([]);
    

    //Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary validation and save patient information to database
        //here can make an API request to store the patient profile on the server
        
        try {
            //Make API request to store patient profile
            const response = await fetch('/api/patient-profiles', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(patientProfile),
            });
            
            // Check if the request was successful
            if (response.ok) {
                console.log('Profile saved successfully');
            //Reset the form field after submission
                setUsername('');
                setPassword('');
                setName('');
                setGender('');
                setAddress('');
                setDateOfBirth('');
                setPhone('');
                setInsurance('');
                setInsuranceNumber('');
                setEmail('');
                setPayment('');
            } else {
                console.log('Failed to save profile');
            }
        } catch (error){
            console.error('An error occurred while saving profile:', error);
        }
     };

    // Function to handle adding an appointment to the history
    const addAppointment = (appointment) => {
        // Add the appointment to the list of appointments
        setAppointments([...appointments, appointment]);
    };

    return (
        <div>
            <div style = {{ float: 'left', width: '50%'}}>
                <h2>Patient Profile</h2> 
                <form onSubmit={handleSubmit}>
                    {/* ... */}
                </form>
            </div> 
            <div style = {{ float: 'right', width: '50%'}}>
                <h2>Appointment</h2>
                <ul>
                    {appointments.map((appointment, index) => (
                        <li key={index}>{appointment}</li>
                    ))}
                </ul>
                <button onClick={() => addAppointment('New Appointment')}>
                    Add Appointment
                </button>
            </div>
        </div>
    );

};

export default PatientProfile;
