import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  return (
    <div style={{ display: "grid", gap: "15px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
