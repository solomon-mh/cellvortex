import { Nav, NavLink } from "@/components/Nav";
import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-gray-900 fixed top-0 w-full flex justify-end items-center shadow-lg z-50">
      <div className="logo absolute left-0 mx-4">
        <div className="logo-img text-white">
          <p className="text-4xl">Xp</p>
        </div>
      </div>
      <>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/users-orders">MyOrders</NavLink>
        </Nav>
      </>
    </nav>
  );
};

export default Navigation;
