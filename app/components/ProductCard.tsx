
import React from 'react';
import AddToCart from "@/app/components/AddToCart";
import styles from './ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className={styles.card}>
            <AddToCart />
        </div>
    );
};

export default ProductCard;
