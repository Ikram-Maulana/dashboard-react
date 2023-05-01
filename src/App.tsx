import DashboardRoutes from "@/app/dashboard/routes";
import NotFound from "@/not-found";
import Home from "@/app/page";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
