import Aside from "@/features/block/admin/Aside";
import Header from "@/features/block/admin/Header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Aside />

      <main className="flex-1 p-4 bg-[#F4F7FA]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
