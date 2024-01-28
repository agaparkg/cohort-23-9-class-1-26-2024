import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const leftMenuItemNames = [
  {
    component: <Home />,
    href: "#home",
    primary: "Homepage",
  },
  {
    component: <Article />,
    href: "#pages",
    primary: "Pages",
  },
  {
    component: <Group />,
    href: "#groups",
    primary: "Groups",
  },
  {
    component: <Storefront />,
    href: "#marketplace",
    primary: "Marketplace",
  },
  {
    component: <Person />,
    href: "#person",
    primary: "Friends",
  },
  {
    component: <Settings />,
    href: "#settings",
    primary: "Settings",
  },
  {
    component: <AccountBox />,
    href: "#profile",
    primary: "Profile",
  },
  {
    component: <ModeNight />,
    href: "#thememode",
    primary: "",
  },
  <ModeNight />,
];

export default leftMenuItemNames;
