import Home from "@/pages/Home";
import React, { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "../ui/Container";
import { BellIcon, Menu } from "lucide-react";
import { Button } from "../ui/button";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Banner from "../ui/Banner";
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
type TContainerProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: TContainerProps) => {
  return (
    <div className="min-h-full min-w-full">
      <NavBar />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
