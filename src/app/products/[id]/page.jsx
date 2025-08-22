import React from 'react';
import dbConnect, { collectionNameObj } from '../../../lib/dbConnect';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

const productDetails = async({params}) => {
    const p = await params;
    const productsCollection = dbConnect(collectionNameObj.servicesCollection)
    const product = await productsCollection.findOne({_id:new ObjectId(p.id)})
    console.log(product)
    return (
         <div className="min-h-screen bg-base-200 flex justify-center items-center p-6">
      <div className="card bg-white shadow-xl w-full max-w-2xl p-6">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="divider"></div>

        <div className="space-y-2 text-gray-800">
          <p>
            <span className="font-semibold">Price:</span> ${product.price}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">Stock:</span> {product.stock}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> ⭐ {product.rating}
          </p>
          <p>
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p>
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(product.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="btn btn-primary">Buy Now</button>
          <Link href={'/products'} className="btn btn-outline">Back to Products</Link>
        </div>
      </div>
    </div>
    );
};

export default productDetails;