# Project name:
NewGoods

# Description

This is a simple Next.js 15 (App Router) application demonstrating public and protected routes with authentication via NextAuth.js. Users can explore products publicly and log in to access a protected dashboard for product management. The app includes clean navigation, product browsing, product details, and the ability to add new products after authentication.


---

# Route Summary:

## Public Routes

1. / (Landing Page) → Contains Navbar, Hero section, Product Highlights, and Footer. Provides navigation to Login and Products.

2. /login (Login Page) → Users can log in using Google or credentials via NextAuth. Redirects to /products after login.

3. /products (Product List) → Displays a list of products (name, description, price) with a "View Details" button.

4. /products/[id] (Product Details) → Shows full details of a single product.

## Protected Route

/dashboard/add-product → Accessible only by authenticated users. Provides a form to add a new product to the database. Redirects unauthenticated users to /login.

# How to Run (Setup):
1. Clone the repo - git clone
1. Install packages - npm install
2. Run Locally - npm run dev