import React, {useState} from "react";
import axios from "axios";

const Login = ({ onLoginSuccess}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDoctor, setIsDoctor] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password, isDoctor });
            localStorage.setItem('token', response.data.token);
            onLoginSuccess();
        } catch (error) {
          console.error(error);
        }
    };

    const handleDoctorSelection = (event) => {
            setIsDoctor(event.target.checked);
    };

    return (
        <div>
            <h3>Login</h3>            
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <input type="checkbox" value={isDoctor} onChange={handleDoctorSelection} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;