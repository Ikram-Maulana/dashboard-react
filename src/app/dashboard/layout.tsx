import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <main>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/books">Books</Link>
        </li>
      </ul>

      <Outlet />
    </main>
  );
}
