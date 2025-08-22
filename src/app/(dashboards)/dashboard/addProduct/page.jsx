"use client"
import { addProduct } from "../../../../app/actions/addProduct/addProduct";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const addProducts = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {

    if (status !== 'loading') {
      if (status !== 'authenticated') {
        router.push('/login')
      }
    }
  }, [status])

// console.log(session?.user)


  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = e.target;
    const name = formData.name.value;
    const photo = formData.photo.value;
    const description = formData.description.value;
    const price = formData.price.value;
    const category = formData.category.value;
    const stock = formData.stock.value;
    const brand = formData.brand.value;
    const createdAt = formData.createdAt.value;

    const ProductPayload = {
      email: session?.user?.email,
      name,
      photo,
      description,
      price,
      category,
      stock,
      brand,
      createdAt
    }
    const result = await addProduct(ProductPayload)
    if(result?.acknowledged){
      toast.success('New Product added successfully')
      formData.reset()
    }
  };

  if (status == 'loading') return <div className="min-h-[calc(100vh-200px)]"><h2>loading</h2></div>
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
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Photo Url */}
          <div>
            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              placeholder="Wireless Headphones"
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
              className="input input-bordered w-full"
            />
          </div>

          {/* Created At */}
          <div>
            <label className="label">Created At</label>
            <input
              type="datetime-local"
              name="createdAt"
              className="input input-bordered w-full"
            />
          </div>

          <input value={'Add Product'} type="submit" className="btn btn-primary w-full" />

        </form>
      </div>
    </div>
  );
};

export default addProducts;