
'use client';

import React, { useState, useMemo } from 'react';
import ProductDetails from './productDetail';
import PaymentForm from './paymentForm';

const FALLBACK_IMAGE = '/placeholder.jpg';

const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null); 

  const products = [
    {
      id: 1,
      name: 'NIKE🤩',
      price: '$50',
      image: '/nike.webp',
      availableSizes: [7, 8, 9, 10],
      colors: ['Black', 'Red', 'Blue'],
      comfort: 'Very Comfortable',
      description: 'Made for ultimate comfort and durability. Perfect for both casual and athletic wear.',
    },
    {
      id: 2,
      name: 'ADIDAS✌',
      price: '$60',
      image: '/adidas.webp',
      availableSizes: [7, 8, 9, 10],
      colors: ['Brown', 'Grey'],
      comfort: 'Moderately Comfortable',
      description: 'Classic style with a modern touch. Provides a snug fit with a stylish design.',
    },
    {
      id: 3,
      name: 'PUMA✨',
      price: '$70',
      image: '/puma 2.webp',
      availableSizes: [7, 8, 9, 10],
      colors: ['White', 'Black'],
      comfort: 'Highly Comfortable',
      description: 'Engineered for both performance and style. Soft cushioning and breathable materials.',
    },
  ];

 
  const handleProductSelect = (productId: number) => {
    setSelectedProduct(productId);
  };
  const selectedProductDetails = useMemo(
    () => (selectedProduct ? products.find((product) => product.id === selectedProduct) : null),
    [selectedProduct, products]
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shoes Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div className="flex flex-wrap gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`max-w-xs bg-white p-4 shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                selectedProduct === product.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => handleProductSelect(product.id)}
              aria-label={`View details for ${product.name}`}
            >
              <img
                className="w-full h-64 object-cover rounded"
                src={product.image}
                alt={product.name}
                onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)} 
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            </div>
          ))}
        </div>

      
        <div className="w-full md:w-80 bg-gray-50 p-6 rounded-lg shadow-lg">
          {selectedProductDetails ? (
            <ProductDetails product={selectedProductDetails} />
          ) : (
            <p className="text-gray-600">Select a product to view details</p>
          )}
        </div>
      </div>

      
      <div className="mt-8">
        <PaymentForm />
      </div>
    </div>
  );
};

export default HomePage;
