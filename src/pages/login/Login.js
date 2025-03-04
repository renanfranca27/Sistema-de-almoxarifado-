import { useState } from "react";
import "./Login.css"; // Para importar o CSS

const Login =()  => {
const [email , setEmail] = useState("");
const [password , setPassword] = useState ("");



return (
    <div className="container">
        <div className="text">
            <h1>LOGIN</h1>
        </div>
        
    
    </div>
);


}

export default Login;