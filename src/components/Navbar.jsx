import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "nav-link active fw-bold text-warning"
            : "nav-link text-light";

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    PariShop
                </NavLink>

                <div className="navbar-nav ms-auto d-flex gap-3 align-items-center">
                    <NavLink to="/" className={navLinkClass} end>
                        Home
                    </NavLink>

                    <NavLink to="/products" className={navLinkClass}>
                        Products
                    </NavLink>

                    {user && (
                        <NavLink to="/dashboard" className={navLinkClass}>
                            Dashboard
                        </NavLink>
                    )}

                    {!user ? (
                        <NavLink to="/login" className="btn btn-warning ms-3">
                            Login
                        </NavLink>
                    ) : (
                        <button className="btn btn-danger ms-3" onClick={logout}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}