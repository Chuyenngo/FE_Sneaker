import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
