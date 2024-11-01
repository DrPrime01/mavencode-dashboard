import { NavLink, Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import {
  Box,
  Calendar,
  FileText,
  House,
  Image,
  SquareCheckBig,
  StickyNote,
} from "lucide-react";

export default function DashboardLayout() {
  return (
    <div className="w-full min-h-screen bg-[#f5f7fa] flex flex-col relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
        <div className="border-b bg-white sm:px-16 px-6 flex items-center gap-x-6 overflow-x-auto no-scrollbar">
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.href}
              className={({ isActive }) =>
                `flex py-5 items-center text-sm font-medium hover:text-blue-600 gap-x-1 text-gray-400 group ${
                  isActive ? "border-b-2 border-blue-600 !text-blue-600" : ""
                }`
              }
            >
              {page.icon}

              {page.name}
            </NavLink>
          ))}
        </div>
      </div>
      <main className="flex flex-col w-full flex-grow mt-[124px]">
        <div className="sm:px-16 px-6 overflow-y-auto flex-grow overflow-x-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

const pages: { name: string; href: string; icon: React.ReactNode }[] = [
  {
    name: "Home",
    href: "/",
    icon: (
      <House size={14} strokeWidth={3} className="group-hover:text-blue-600" />
    ),
  },
  {
    name: "Interface",
    href: "/interface",
    icon: (
      <Box size={14} strokeWidth={3} className="group-hover:text-blue-600" />
    ),
  },
  {
    name: "Components",
    href: "/components",
    icon: (
      <Calendar
        size={14}
        strokeWidth={3}
        className="group-hover:text-blue-600"
      />
    ),
  },
  {
    name: "Pages",
    href: "/pages",
    icon: (
      <StickyNote
        size={14}
        strokeWidth={3}
        className="group-hover:text-blue-600"
      />
    ),
  },
  {
    name: "Forms",
    href: "/forms",
    icon: (
      <SquareCheckBig
        size={14}
        strokeWidth={3}
        className="group-hover:text-blue-600"
      />
    ),
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: (
      <Image size={14} strokeWidth={3} className="group-hover:text-blue-600" />
    ),
  },
  {
    name: "Documentation",
    href: "/documentation",
    icon: (
      <FileText
        size={14}
        strokeWidth={3}
        className="group-hover:text-blue-600"
      />
    ),
  },
];
