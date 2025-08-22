"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const addProducts = () => {
        const session = useSession()
            const router = useRouter()
            useEffect(()=>{
        if(session?.status!=='authenticated'){
            router.push('/login')
        }
    },[session?.status])
    
      const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
    brand: "",
    createdAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", formData);
    // here you would send formData to your backend with fetch/axios
  };
    return (
            <div className="min-h-screen bg-base-200 flex justify-center items-center p-6">
      <div className="card bg-white shadow-xl w-full max-w-2xl p-6">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Wireless Headphones"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label">Description</label>
            <textarea
              name="description"
              placeholder="Noise-cancelling over-ear headphones..."
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="label">Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              placeholder="129.99"
              value={formData.price}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Electronics"
              value={formData.category}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="label">Stock</label>
            <input
              type="number"
              name="stock"
              placeholder="42"
              value={formData.stock}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="label">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              placeholder="4.5"
              value={formData.rating}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="label">Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="SoundMax"
              value={formData.brand}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          {/* Created At */}
          <div>
            <label className="label">Created At</label>
            <input
              type="datetime-local"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      </div>
    </div>
    );
};

export default addProducts;