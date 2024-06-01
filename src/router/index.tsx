import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import ProductManager from "@/page/admin/ProductManager";
import AddProduct from "@/features/_componentAdmin/products/AddProduct";
import CategoryManager from "@/page/admin/CategoryManager";

const Routers = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<ProductManager />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="categories" element={<CategoryManager />} />
      </Route>
    </Routes>
  );
};

export default Routers;
