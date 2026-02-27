import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user } = useAuth();

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2>Dashboard</h2>
                <p>Welcome, {user} 👋</p>
                <p>This is a protected page.</p>
            </div>
        </div>
    );
}