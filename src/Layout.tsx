import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./COMPONENT/Sidebar";
import Nav from "./COMPONENT/Nav";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="grid grid-cols-6 min-h-screen bg-[#060B26]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col w-full md:col-span-5 col-span-6">
        <Nav />

        <main className="md:p-[1.25vw] p-4  max-h-[90vh] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default Layout;
