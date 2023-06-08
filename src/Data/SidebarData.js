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


export const Reasons = [
  {
    "days": "SUNDAY",
    "malaria": 31,
    "malariaColor": "hsl(352, 70%, 50%)",
    "diabetes": 190,
    "diabetesColor": "hsl(333, 70%, 50%)",
    "fever": 158,
    "feverColor": "hsl(338, 70%, 50%)",
    "cancer": 194,
    "cancerColor": "hsl(53, 70%, 50%)",
    "headache": 44,
    "headacheColor": "hsl(149, 70%, 50%)",
    "accident": 178,
    "accidentColor": "hsl(122, 70%, 50%)"
  },
  {
    "days": "MONDAY",
    "malaria": 133,
    "malariaColor": "hsl(345, 70%, 50%)",
    "diabetes": 99,
    "diabetesColor": "hsl(23, 70%, 50%)",
    "fever": 37,
    "feverColor": "hsl(8, 70%, 50%)",
    "cancer": 72,
    "cancerColor": "hsl(326, 70%, 50%)",
    "headache": 83,
    "headacheColor": "hsl(86, 70%, 50%)",
    "accident": 0,
    "accidentColor": "hsl(204, 70%, 50%)"
  },
  {
    "days": "TUESDAY",
    "malaria": 93,
    "malariaColor": "hsl(66, 70%, 50%)",
    "diabetes": 158,
    "diabetesColor": "hsl(124, 70%, 50%)",
    "fever": 19,
    "feverColor": "hsl(19, 70%, 50%)",
    "cancer": 105,
    "cancerColor": "hsl(350, 70%, 50%)",
    "headache": 136,
    "headacheColor": "hsl(289, 70%, 50%)",
    "accident": 79,
    "accidentColor": "hsl(68, 70%, 50%)"
  },
  {
    "days": "WEDNESDAY",
    "malaria": 83,
    "malariaColor": "hsl(138, 70%, 50%)",
    "diabetes": 150,
    "diabetesColor": "hsl(249, 70%, 50%)",
    "fever": 33,
    "feverColor": "hsl(227, 70%, 50%)",
    "cancer": 17,
    "cancerColor": "hsl(163, 70%, 50%)",
    "headache": 126,
    "headacheColor": "hsl(326, 70%, 50%)",
    "accident": 121,
    "accidentColor": "hsl(44, 70%, 50%)"
  },
  {
    "days": "THURSDAY",
    "malaria": 35,
    "malariaColor": "hsl(295, 70%, 50%)",
    "diabetes": 70,
    "diabetesColor": "hsl(293, 70%, 50%)",
    "fever": 120,
    "feverColor": "hsl(160, 70%, 50%)",
    "cancer": 117,
    "cancerColor": "hsl(57, 70%, 50%)",
    "headache": 168,
    "headacheColor": "hsl(132, 70%, 50%)",
    "accident": 154,
    "accidentColor": "hsl(88, 70%, 50%)"
  },
  {
    "days": "FRIDAY",
    "malaria": 60,
    "malariaColor": "hsl(273, 70%, 50%)",
    "diabetes": 45,
    "diabetesColor": "hsl(347, 70%, 50%)",
    "fever": 112,
    "feverColor": "hsl(41, 70%, 50%)",
    "cancer": 180,
    "cancerColor": "hsl(134, 70%, 50%)",
    "headache": 4,
    "headacheColor": "hsl(116, 70%, 50%)",
    "accident": 146,
    "accidentColor": "hsl(288, 70%, 50%)"
  },
  {
    "days": "SATURDAY",
    "malaria": 88,
    "malariaColor": "hsl(116, 70%, 50%)",
    "diabetes": 195,
    "diabetesColor": "hsl(3, 70%, 50%)",
    "fever": 2,
    "feverColor": "hsl(269, 70%, 50%)",
    "cancer": 13,
    "cancerColor": "hsl(80, 70%, 50%)",
    "headache": 154,
    "headacheColor": "hsl(205, 70%, 50%)",
    "accident": 186,
    "accidentColor": "hsl(133, 70%, 50%)"
  }
]

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

export const LineData = [
  {
    "id": `${day}`,
    "color": "#1D267D",
    "data": [
      {
        "x": "plane",
        "y": 20
      },
      {
        "x": "helicopter",
        "y": 40
      },
      {
        "x": "boat",
        "y": 60
      },
      {
        "x": "train",
        "y": 52
      },
      {
        "x": "subway",
        "y": 60
      }
    ]
  }
]

export const Checkout = [
  {
    "id": `${day}`,
    "color": "#088395",
    "data": [
      {
        "x": "plane",
        "y": 35
      },
      {
        "x": "helicopter",
        "y": 60
      },
      {
        "x": "boat",
        "y": 20
      },
      {
        "x": "train",
        "y": 52
      },
      {
        "x": "subway",
        "y": 60
      }
    ]
  }
]

export const Daily = [
  {
    "id": `${day}`,
    "color": "#F9D949",
    "data": [
      {
        "x": "plane",
        "y": 40
      },
      {
        "x": "helicopter",
        "y": 30
      },
      {
        "x": "boat",
        "y": 28
      },
      {
        "x": "train",
        "y": 35
      },
      {
        "x": "subway",
        "y": 45
      }
    ]
  }
]

export const Weekly = [
  {
    "id": `${day}`,
    "color": "#038fde",
    "data": [
      {
        "x": "plane",
        "y": 20
      },
      {
        "x": "helicopter",
        "y": 40
      },
      {
        "x": "boat",
        "y": 60
      },
      {
        "x": "train",
        "y": 52
      },
      {
        "x": "subway",
        "y": 60
      }
    ]
  }
]