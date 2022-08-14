import React from "react";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
export const Generaldata = [
  {
    title: "Settings",
    icon: <SettingsSuggestIcon />,
    Link: "/settings",
    methods: function () {
      return;
    },
  },
  {
    title: "Subcription",
    icon: <SubscriptionsIcon />,
    Link: "/subscription",
    methods: function () {
      return;
    },
  },
  {
    title: "Log out",
    icon: <LogoutIcon />,
    Link: "/log out",
    methods: function () {
      Cookies.remove("spotify_access_token");
      window.location.reload();
    },
  },
];
