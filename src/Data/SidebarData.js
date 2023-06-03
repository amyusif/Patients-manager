import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RxIcons from "react-icons/rx";

export const SidebarData = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <RxIcons.RxDashboard />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <MdIcons.MdOutlineNotificationsNone />,
  },
  {
    name: "Visitor Management",
    path: "/visitor_management",
    icon: <MdIcons.MdOutlineManageAccounts />,
    toggledropIcon: <FaIcons.FaAngleRight />,
    toggledownIcon: <FaIcons.FaAngleDown />,
    subMenu: [
      {
        name: "Visiors Log",
        path: "/visitor_management/visitors_log",
      },
      {
        name: "Blacklisted Visitors",
        path: "/visitor_management/blacklist",
      },
      {
        name: "Add New Visitor",
        path: "/visitor_management/add_visitor",
      },
      {
        name: "Invite Visitor",
        path: "/visitor_management/invite",
      },
      {
        name: "Book Meeting Room",
        path: "/visitor_management/booking",
      },
      {
        name: "My Schedule",
        path: "/visitor_management/schedule",
      },
    ],
  },
  {
    name: "Queue",
    path: "/queue_management",
    icon: <MdIcons.MdOutlineGroup />,
    toggledropIcon: <FaIcons.FaAngleRight />,
    toggledownIcon: <FaIcons.FaAngleDown />,
    subMenu: [
      {
        name: "QM Dashboard",
        path: "/queue_management/dashboard",
      },
      {
        name: "My Tokens",
        path: "/queue_management/tokens",
      },
      {
        name: "Performance Reports",
        path: "/queue_management/performance_reports",
      },
      {
        name: "Counter Management",
        path: "/queue_management/counter_management",
      },
    ],
  },
  {
    name: "System Admin",
    path: "/system_admin",
    icon: <MdIcons.MdOutlineAdminPanelSettings />,
    toggledropIcon: <FaIcons.FaAngleRight />,
    toggledownIcon: <FaIcons.FaAngleDown />,
    subMenu: [
      {
        name: "General Settings",
        path: "/system_admin/settings",
      },
      {
        name: "Add Meeting Host",
        path: "/system_admin/add_meeting_host",
      },
      {
        name: "Meeting Host List",
        path: "/system_admin/meeting_host_list",
      },
      {
        name: "Create Department",
        path: "/system_admin/department",
      },
      {
        name: "Add Services",
        path: "/system_admin/services",
      },
      {
        name: "Add Users",
        path: "/system_admin/add_user",
      },
      {
        name: "Users List",
        path: "/system_admin/users",
      },
    ],
  },
];
