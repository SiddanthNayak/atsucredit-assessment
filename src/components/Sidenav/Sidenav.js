import React from "react";
import style from "./Sidenav.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
const Sidenav = ({ children }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.sideContainer}>
        <img className={style.logo} src="Logo.png" alt="Logo" />
        <div className={style.userContaienr}>
          <img src="entityLogo.png" alt="Entity Logo" />
          <div>
            <p className={style.name}>Entity Name</p>
            <p className={style.website}>www.website.com</p>
          </div>
          <IconButton className={style.iconButton}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <div className={style.navItems}>
          <CreateNewFolderOutlinedIcon />
          <p>Document Generation</p>
        </div>
        <div className={style.navItems}>
          <FolderSharedOutlinedIcon />
          <p>Corporate Documents</p>
        </div>
        <div className={style.navItems}>
          <FolderOpenOutlinedIcon />
          <p>Filing Documents</p>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Sidenav;
