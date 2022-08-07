import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListIcon from "@mui/icons-material/List";
import AlbumIcon from "@mui/icons-material/Album";
import PersonIcon from "@mui/icons-material/Person";

export const Menubardata = [
  {
    titles: "Home",
    icons: <HomeIcon />,
    Link: "/Home",
  },
  {
    titles: "Search",
    icons: <SearchIcon />,
    Link: "../Pages/Explore",
  },
  {
    titles: "Likes",
    icons: <FavoriteIcon />,
    Link: "/like",
  },
  {
    titles: "Playlist",
    icons: <ListIcon />,
    Link: "/playlist",
  },
  {
    titles: "Album",
    icons: <AlbumIcon />,
    Link: "/album",
  },
  {
    titles: "Following",
    icons: <PersonIcon />,
    Link: "/following",
  },
];
