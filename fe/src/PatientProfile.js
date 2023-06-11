import React, { useState } from 'react';

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
        console.log('Patient profile:', 
             { username, password, name, gender, dateOfBirth, insurance, email, phone, address, payment, insuranceNumber});
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
                    <div>
                        <label>Username:</label>
                        <input type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label>name:</label>
                        <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label>gender:</label>
                        <input 
                            type="text"
                            value = {gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>address:</label>
                        <input 
                            type="text"
                            value = {address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>dateOfBirth:</label>
                        <input
                            type="text"
                            value = {dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>phone:</label>
                        <input
                            type="text"
                            value = {phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>insurance:</label>
                        <input
                            type="text"
                            value = {insurance}
                            onChange={(e) => setInsurance(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>insuranceNumber:</label>
                        <input
                            type="text"
                            value = {insuranceNumber}
                            onChange={(e) => setInsuranceNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>email:</label>
                        <input
                            type="text"
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>payment:</label>
                        <input
                            type="text"
                            value = {payment}
                            onChange={(e) => setPayment(e.target.value)}
                            required
                        />
                    </div>
                    
                <button type="submit">Save Profile</button>
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