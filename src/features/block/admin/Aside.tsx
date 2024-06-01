import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineShopping,
  AiOutlineAppstore,
} from "react-icons/ai";
import { FiFolder, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

const Aside = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "#", icon: FiFolder, hasSubmenu: true },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const fileManagerSubmenus = [
    { name: "Product", link: "products", icon: AiOutlineShopping },
    { name: "Category", link: "categories", icon: AiOutlineAppstore },
  ];

  const [open, setOpen] = useState(true);
  const [fileManagerOpen, setFileManagerOpen] = useState(false);

  const handleFileManagerClick = (e: any) => {
    e.preventDefault();
    setFileManagerOpen(!fileManagerOpen);
  };

  return (
    <section className="">
      <div>
        <img src="/src/images/main/logo.png" alt="" width={"60%"} />
      </div>
      <div
        className={`bg-white min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-black-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <div key={i}>
              <Link
                to={menu?.link}
                onClick={menu.hasSubmenu ? handleFileManagerClick : undefined}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                {menu.hasSubmenu && (
                  <div
                    className={`ml-auto transition-transform duration-300 ${
                      fileManagerOpen ? "rotate-30" : ""
                    }`}
                  >
                    {React.createElement(
                      fileManagerOpen ? AiOutlineDown : AiOutlineRight,
                      { size: "20" }
                    )}
                  </div>
                )}
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
              {menu.hasSubmenu && (
                <div
                  className={`ml-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    fileManagerOpen ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {fileManagerSubmenus.map((submenu, index) => (
                    <Link
                      to={submenu.link}
                      key={index}
                      className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md"
                    >
                      <div>
                        {React.createElement(submenu.icon, { size: "20" })}
                      </div>
                      <h2 className={`whitespace-pre duration-500`}>
                        {submenu.name}
                      </h2>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aside;
