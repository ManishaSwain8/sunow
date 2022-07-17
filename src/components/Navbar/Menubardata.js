import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListIcon from "@mui/icons-material/List";
import AlbumIcon from "@mui/icons-material/Album";
import PersonIcon from "@mui/icons-material/Person";
// import FiberNewIcon from '@mui/icons-material/FiberNew';
export const Menubardata = [
  {
    title: "Home",
    icon: <HomeIcon />,
    Link: "/home",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    Link: "/search",
  },
  {
    title: "Likes",
    icon: <FavoriteIcon />,
    Link: "/like",
  },
  {
    title: "Playlist",
    icon: <ListIcon />,
    Link: "/playlist",
  },
  {
    title: "Album",
    icon: <AlbumIcon />,
    Link: "/album",
  },
  {
    title: "Following",
    icon: <PersonIcon />,
    Link: "/following",
  },
];
