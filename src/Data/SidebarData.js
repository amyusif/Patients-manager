import {
  RiNotification4Line,
  RiCustomerService2Line,
} from "react-icons/ri";
import { BiUser, BiBlock, BiUserCircle, BiPhoneCall } from "react-icons/bi";
import { BsSpeedometer2, BsPersonAdd } from "react-icons/bs";
import {
  MdOutlineGroups,
  MdOutlineGeneratingTokens,
  MdOutlineManageAccounts,
} from "react-icons/md";
import {
  AiOutlineSchedule,
  AiOutlineDashboard,
  AiOutlineFileSync,
} from "react-icons/ai";
import { VscPersonAdd } from "react-icons/vsc";

export const main = [
  {
    name: "Dashboard",
    path: "/",
    icon: <BsSpeedometer2 />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <RiNotification4Line />,
  },
];

export const manage = [
  {
    name: "Visitors Log",
    path: "/visitorslog",
    icon: <BiUser />,
  },
  {
    name: "BlackList",
    path: "/blacklist",
    icon: <BiBlock />,
  },
  {
    name: "New Visitors",
    path: "/new-visitors",
    icon: <BsPersonAdd />,
  },
  {
    name: "Invite",
    path: "/invite",
    icon: <BiPhoneCall />,
  },
  {
    name: "Meeting Room",
    path: "/room",
    icon: <MdOutlineGroups />,
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: <AiOutlineSchedule />,
  },
];

export const queue = [
  {
    name: "QM Dashboard",
    path: "/qmdashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    name: "Tokens",
    path: "/tokens",
    icon: <MdOutlineGeneratingTokens />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <AiOutlineFileSync />,
  },
  {
    name: "Management",
    path: "/manament",
    icon: <MdOutlineManageAccounts />,
  },
];

export const systemAdmin = [
  {
    name: "Meeting Host",
    path: "/hosts",
    icon: <VscPersonAdd />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <RiCustomerService2Line />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <BiUserCircle />,
  },
];
