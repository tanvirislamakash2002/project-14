import Link from 'next/link';
import dbConnect, { collectionNameObj } from '../../lib/dbConnect';
import React from 'react';

const products = async() => {
        const productsCollection = dbConnect(collectionNameObj.servicesCollection)
    const data = await productsCollection.find({}).toArray()
    console.log(data)
    return (
            <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((product, index) => (
          <div key={index} className="card bg-white shadow-xl p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">${product.price}</p>
            <Link href={`/products/${product._id}`} className="btn btn-primary w-full">Details</Link>
          </div>
        ))}
      </div>
    </div>
    );
};

export default products;