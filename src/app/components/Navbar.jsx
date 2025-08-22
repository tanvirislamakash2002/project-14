"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const {data: session, status} = useSession()
  console.log( status)
    const navMenu = 
    <>
    <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/products'}>Products</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navMenu}
        {
          status!=='authenticated'? "":""
        }
      </ul>
    </div>
    <Link href={'/'}>
      <span>NewGoods</span>
      </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navMenu}
      {
        status!=='authenticated'? "":<li><Link href={'/addProduct'}>Add Product</Link></li>
      }
    </ul>
  </div>
  {status!=='authenticated'?
<div className="navbar-end">
    <Link href={'/login'} className="btn">Login</Link>
    <Link href={'/register'} className="btn">register</Link>
  </div>:
  <div className="navbar-end">
    <button onClick={()=>signOut()} className="btn">Logout</button>
  </div>  
}
</div>
    );
};

export default Navbar;