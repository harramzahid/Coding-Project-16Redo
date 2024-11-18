// Task 4 Create the ProductItem Component 
//components/ProductItem.jsx
import React from 'react';

function ProductItem({ product }) {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductItem;
