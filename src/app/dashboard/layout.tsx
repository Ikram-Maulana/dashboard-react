import Navbar from "@/components/Navbar";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />

      <aside className="pt-24 font-bold">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/books">Books</Link>
          </li>
        </ul>
      </aside>

      <main>
        <Outlet />
      </main>
    </>
  );
}
