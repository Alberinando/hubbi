import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "user" && password === "password") {
            const token = "fake-jwt-token";
            localStorage.setItem("token", token);
            navigate("/");
        } else {
            alert("Credenciais inválidas");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-4 text-xl">Login</h2>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="w-full p-2 border rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
