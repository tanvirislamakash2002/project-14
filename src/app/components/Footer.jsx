import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-6 bg-base-200 text-base-content">
            <div>
                <p className="font-semibold text-lg">🛍️ MyStore</p>
                <p className="text-gray-600">
                    © {new Date().getFullYear()} MyStore. All rights reserved.
                </p>
            </div>
            <div className="flex gap-6 mt-2">
                <a href="#" className="link link-hover">About</a>
                <a href="#" className="link link-hover">Products</a>
                <a href="#" className="link link-hover">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;