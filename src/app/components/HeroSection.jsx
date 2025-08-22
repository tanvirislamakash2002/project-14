
import Link from 'next/link';
import React from 'react';

const HeroSection = async() => {

    return (
 <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/7xJ5TV9x/Bid3-min.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
          <p className="py-6 text-lg text-gray-600">
            Find the best products at unbeatable prices. Shop electronics, fashion, and more with fast delivery and secure checkout.
          </p>
          <Link href={'products'} className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </div>
    );
};

export default HeroSection;

