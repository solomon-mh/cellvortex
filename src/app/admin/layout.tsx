import { Nav, NavLink } from "@/components/Nav";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>;
    </div>
  );
};

export default AdminLayout;
