"use client";
import React, { ReactNode, useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarButton,
  SidebarLink,
} from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import { animate, AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, Outlet } from "react-router-dom";
import { USER_ROLE } from "@/constants/role";
import { menus } from "@/constants/sideBarItem";
import ProtectedRoute from "./ProtectedRoute";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  logout,
  TUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { Button } from "../ui/button";

type TContainerProps = {
  children: ReactNode;
};

const DashboardLayout = () => {
  const [activeLink, setActiveLink] = useState("Profile");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;

  if (token) {
    user = verifyToken(token);
  }

  let menu;

  switch ((user as TUser)!.role) {
    case USER_ROLE.ADMIN:
      menu = menus(USER_ROLE.ADMIN);
      break;
    case USER_ROLE.USER:
      menu = menus(USER_ROLE.USER);
      break;

    default:
      break;
  }

  const handleLinkClick = (label: string, dropdown?: any[]) => {
    setActiveLink(label);
    if (dropdown) {
      setOpenDropdown((prev) => (prev === label ? null : label));
    } else {
      setOpenDropdown(null);
    }
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div
      className={cn(
        "min-h-screen rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[60vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {menu.map((link, idx) => (
                <div key={idx}>
                  <SidebarLink
                    link={link}
                    onClick={() => handleLinkClick(link.label, link.dropdown)}
                    className={cn(
                      activeLink === link.label
                        ? "bg-gray-300 dark:bg-neutral-600"
                        : "hover:bg-gray-200 dark:hover:bg-neutral-700",
                      "flex items-center pl-1 py-2 rounded-md"
                    )}
                  />
                  {link.dropdown && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pl-8 mt-2 space-y-2"
                    >
                      {link.dropdown.map((dropdownLink, dropdownIdx) => (
                        <SidebarLink
                          key={dropdownIdx}
                          link={dropdownLink}
                          onClick={() => setActiveLink(dropdownLink.label)}
                          className={cn(
                            activeLink === dropdownLink.label
                              ? "bg-gray-300 dark:bg-neutral-600"
                              : "hover:bg-gray-200 dark:hover:bg-neutral-700",
                            "flex items-center px-4 py-2 rounded-md"
                          )}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarButton onClick={handleLogOut} />
            <SidebarLink
              link={{
                label: "Manu Arora",
                to: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Outlet />
    </div>
  );
};

export const Logo = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

export default DashboardLayout;
