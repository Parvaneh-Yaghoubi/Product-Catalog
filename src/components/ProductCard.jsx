import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
            }}
        >
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>

            <Link to={`/products/${product.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
}
