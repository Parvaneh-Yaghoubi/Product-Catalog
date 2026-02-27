import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username);
        navigate("/dashboard");
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow col-md-6 mx-auto">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control mb-3"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
}