import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Products</h1>
            <p>Browse our collection of high-quality products.</p>

            <div
                style={{
                    marginBottom: "20px",
                    padding: "10px",
                    background: "#f5f5f5",
                }}
            >
                🔍 Filter area (coming soon...)
            </div>

            <Outlet />
        </div>
    );
}
