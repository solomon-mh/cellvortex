import React from "react";
import { Nav, NavLink } from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="bg-gray-900 fixed top-0 w-full flex justify-end items-center shadow-lg z-50">
      <div className="logo absolute left-0 mx-4">
        <Link href="/">
          <div className="logo italic flex items-center text-gray-100">
            <Image
              src="/svgs/mobile-back.svg"
              alt="logo"
              width={35}
              height={35}
            />
            <h3>cellvortex</h3>
          </div>
        </Link>
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
