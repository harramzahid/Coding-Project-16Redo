// Task 2 Create the App Component
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

//Now we create the products lisr
function App() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Matcha Latte', price: 4.50, description: 'A creamy blend of matcha and milk.' },
        { id: 2, name: 'Matcha Cheesecake', price: 5.00, description: 'A rich and tangy cheesecake infused with matcha.' },
        { id: 3, name: 'Iced Matcha Tea', price: 4.00, description: 'Refreshing cold-brewed matcha tea.' }
    ]);

// Function to add a new product
const addProduct = (newProduct) => {
  setProducts([...products, newProduct]);
};

    return (
        <div>
            <h1>Welcome to Matcha Café</h1>
            <ProductList products={products} />
            <AddProductForm addProduct={addProduct} />
        </div>
    );
}

export default App;
