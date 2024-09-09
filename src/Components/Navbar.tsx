import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/BFCS LOGO/BFCS III.png";
import MenuItem from "antd/es/menu/MenuItem";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface MenuItem {
  label?: string;
  key: string;
  link?: string;
}

const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
    link: "/",
  },
  {
    label: "Services",
    key: "service",
    link: "/service",
  },
  {
    label: "About Us",
    key: "about",
    link: "/aboutUs",
  },
  {
    label: "Contact Us",
    key: "contact",
    link: "/contactUs",
  },
];

const Navbar: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <li key={item.key} className="h2">
        <a
          href={item.link}
          className="text-gray-800 no-underline hover:underline"
        >
          {item.label}
        </a>
      </li>
    ));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <ul className="flex flex-col gap-10 gap menu h2">
        {renderMenuItems(items)}
      </ul>
    </Box>
  );

  return (
    <nav className="flex p-5 justify-between place-items-center bg-white w-screen fixed z-[1000]">
      <div className="w-[15%]">
        <a href="/">
          <img src={logo} className="w-[50%] w100 logo" alt="BFCS LOGO III" />
        </a>
      </div>
      <ul className="flex gap-10 gap menu h2 none">{renderMenuItems(items)}</ul>

      <div className="hide show">
        <Button onClick={toggleDrawer(true)}>
          <MenuFoldOutlined style={{ color: "black", fontSize: "15px" }} />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
