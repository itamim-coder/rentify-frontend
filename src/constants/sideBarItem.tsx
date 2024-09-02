import {
  IconArrowLeft,
  IconBrandBooking,
  IconBrandTabler,
  IconCar,
  IconCurrencyTaka,
  IconLayoutDashboard,
  IconSettings,
  IconSTurnLeft,
  IconUserBolt,
  IconUsersGroup,
} from "@tabler/icons-react";
import { USER_ROLE } from "./role";

export const menus = (role: string) => {
  const admin = [
    {
      label: "Dashboard",
      to: `/${role}/dashboard`,
      icon: (
        <IconLayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      to: `/${role}/profile`,
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Manage Cars",
      to: `/${role}/manage-cars`,
      icon: (
        <IconCar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "Manage Bookings",
      to: `/${role}/manage-bookings`,
      icon: (
        <IconBrandBooking className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Manage Return Car",
      to: `/${role}/manage-return-cars`,
      icon: (
        <IconSTurnLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "User Management",
      to: `/${role}/user-management`,
      icon: (
        <IconUsersGroup className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      to: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      dropdown: [
        { label: "Account Settings", to: "/admin/account-settings" },
        { label: "Privacy Settings", to: "/admin/privacy-settings" },
      ],
    },
    {
      label: "Logout",
      to: "/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const user = [
    {
      label: "Dashboard",
      to: `/${role}/dashboard`,
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      to: `/${role}/profile`,
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Booking Management",
      to: `/${role}/booking-management`,
      icon: (
        <IconBrandBooking className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Payment Management",
      to: `/${role}/payment-management`,
      icon: (
        <IconCurrencyTaka className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      to: "/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  if (role === USER_ROLE.ADMIN) return admin;
  else if (role === USER_ROLE.USER) return user;
};
