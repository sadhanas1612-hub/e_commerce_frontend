import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignup = () => {
    if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
    }

    const user = {
    name,
    email,
    password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");

    navigate("/login");
};

return (
    <div style={{ padding: "20px" }}>
    <h2>Signup</h2>

    <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

    <br /><br />

    <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />

    <br /><br />

    <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />

    <br /><br />

    <button onClick={handleSignup}>
        Signup
    </button>

    <p>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
    </p>
    </div>
);
}

export default Signup;