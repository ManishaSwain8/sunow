 import React from "react";

 import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
 import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
 import LogoutIcon from "@mui/icons-material/Logout";
 export const Generaldata = [
   {
     title: "Settings",
     icon: <SettingsSuggestIcon />,
     Link: "/settings",
   },
   {
     title: "Subcription",
     icon: <SubscriptionsIcon />,
     Link: "/subscription",
   },
   {
     title: "Log out",
     icon: <LogoutIcon />,
     Link: "/log out",
   },
 ];
