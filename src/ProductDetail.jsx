import React from "react";
import { useParams } from "react-router-dom";
import inventory from "./DummyData";
import ProductCard from './ProductCard';

function ProductDetail({ onAddToCart }) {
    const { id } = useParams();

    const product = inventory.find(item => item.id === id);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div>
            <ProductCard description={product} onAddToCart={onAddToCart} />
        </div>
    );
}

export default ProductDetail;