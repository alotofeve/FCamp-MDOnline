import React, { useEffect, useState } from "react";
import "./Register.css";

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDoctor, setIsDoctor] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [insurance, setInsurance] = useState("");
    const [licenseCode, setLicenseCode] = useState("");

    const handleRegistration = async (event) => {
        const registrationData = {
            username: 'exampleUsername',
            password: 'examplePassword',
            name: 'exampleName',
            gender: 'exampleGender',
            dob: 'exampleDob'
        };


        if (isDoctor) {
            // Registration for doctor
            api.registerFoctor(registrationData)
                .then(response => {
                    console.log(response);
                    setIsRegistered(true);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            // Registration for patient
            api.registerPatient(registrationData)
                .then(response => {
                    console.log(response);
                    setIsRegistered(true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <label><input type="checkbox" checked={isDoctor} onChange={(e) => setIsDoctor(e.target.checked)} />
            I'm a doctor
            </label>
            <br />
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <label>
                Name:
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Gender:
                <input value={gender} onChange={(e) => setGender(e.target.value)} />
            </label>
            <br />
            <label>
                Date of Birth:
                <input value={dob} onChange={(e) => setDob(e.target.value)} />
            </label>
            <br />
            {!isDoctor && ( 
                <label>
                    Address:
                    <input value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
            )}
            {isDoctor && (
                <label>
                    License Code:
                    <input value={licenseCode}
                       onChange={(e) => setLicenseCode(e.target.value)}
                    />
                </label>
            )}
            <br />
            <button onClick={handleRegistration}>Register</button>
        </div>
    )
}


export default Registration;