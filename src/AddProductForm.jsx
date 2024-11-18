// Task 6 Create the AddProductForm Component
// This is the component that handles the addition of new products to the product dashboard.

import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
    // Local state to track the input values for the form fields
    const [name, setName] = useState(''); // For the product name
    const [price, setPrice] = useState(''); // For the product price
    const [description, setDescription] = useState(''); // For the product description

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form behavior (page reload)
        
        // Add the new product using the parent-provided function
        addProduct({ 
            name, 
            price: parseFloat(price), // Ensure price is stored as a number
            description 
        });

        // Reset the input fields to clear the form for the next entry
        setName('');
        setPrice('');
        setDescription('');
    };

    return (
        // Form to collect product details: name, price, and description
        <form onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                step="0.01" // Allow decimal input for prices
                required
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            //Submit button to trigger the form submission //
            <button type="submit">Add Product</button>
        </form>
    );
}

// Exporting the component for use in the App.jsx file
export default AddProductForm;
