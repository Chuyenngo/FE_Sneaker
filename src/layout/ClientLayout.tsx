import Header from "@/features/block/client/Header";
import { Navbar } from "@/features/block/client/Navbar";

import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {" "}
        <Navbar />
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
