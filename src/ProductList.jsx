// Task 3 Create the ProductList Component
// this is the component of the ProductList.jsx for our cafe products

import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
