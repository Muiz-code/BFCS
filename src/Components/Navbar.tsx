import React, { useEffect, useState } from "react";
import logo from "../assets/BFCS LOGO/BFCS III.png";
import MenuItem from "antd/es/menu/MenuItem";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { Button, Drawer } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ContentOutlet from "../MainContent/ContentOutlet";

interface MenuItem {
  children: any;
  label?: string;
  key: string;
  link?: string;
}

const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
    link: "/",
    children: undefined,
  },

  {
    label: "Services",
    key: "service",
    link: "/service",
    children: undefined,
  },

  {
    label: "About Us",
    key: "about",
    children: [
      {
        label: "About Us",
        key: "contactSupport",
        link: "/aboutUs",
      },
      {
        label: "Client Reviews",
        key: "contactSupport",
        link: "/clientreview",
      },
    ],
  },

  {
    label: "Contact",
    key: "contact",
    children: [
      {
        label: "Contact Support",
        key: "contactSupport",
        link: "/contactus",
      },

      {
        label: "WhatsApp",
        key: "whatsapp",
        link: "https://wa.me/+2348023456789",
      },

      {
        label: "Email",
        key: "email",
        link: "mailto:info@yourcompany.com",
      },

      {
        label: "Tell a Friend",
        key: "tellAFriend",
        link: "/tellafriend",
      },

      {
        label: "Join Our Team",
        key: "joinOurTeam",
        link: "/joinourteam",
      },
    ],
  },

  {
    label: "Book Online",
    key: "bookOnline",
    link: "/contactus",
    children: undefined,
  },
  {
    label: "Blog",
    key: "bookOnline",
    link: "/blog",
    children: undefined,
  },
];

const Navbar: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [openMenuKey, setOpenMenuKey] = useState<string>("");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMenuToggle = (key: string) => {
    setOpenMenuKey(key === openMenuKey ? "" : key);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const menuElement = document.getElementById("navbar-menu");
    if (!menuElement?.contains(event.target as Element)) {
      setOpenMenuKey("");
    }
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <li
        key={item.key}
        className={`h1 menu-items ${currentPath === item.link ? "active" : ""}`}
      >
        {item.children ? (
          <button
            onClick={() => handleMenuToggle(item.key)}
            className="text-gray-800 no-underline hover:underline"
          >
            {item.label}
            <DownOutlined style={{ marginLeft: 5 }} />
          </button>
        ) : (
          <a
            href={item.link}
            className="text-gray-800 no-underline hover:underline"
          >
            {item.label}
          </a>
        )}
        {item.children && (
          <ul
            className="submenu p-4 bg-gray-100 rounded-md gap-10"
            style={{ display: openMenuKey === item.key ? "block" : "none" }}
          >
            {renderMenuItems(item.children)}
          </ul>
        )}
      </li>
    ));
  };

  useEffect(() => {
    const updateCurrentPath = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", updateCurrentPath);

    return () => window.removeEventListener("popstate", updateCurrentPath);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="w-screen flex flex-col">
      <nav
        className="flex px-[5%] px2 py-5 justify-between place-items-center w-[100%] bg-white fixed z-[1000]"
        id="navbar-menu"
      >
        <div className="w-[15%]">
          <a href="/">
            <img src={logo} className="w-[50%] w100 logo" alt="BFCS LOGO III" />
          </a>
        </div>
        <ul className="flex gap-10 menu h2 none lg:flex">
          {renderMenuItems(items)}
        </ul>

        <div className="lg:hidden ml-auto">
          <Button onClick={showDrawer} className="border-0 bg-none">
            <ViewQuiltIcon style={{ color: "black", fontSize: "25px" }} />
          </Button>
          <Drawer onClose={onClose} open={open}>
            <ul className="flex flex-col gap-[30px] mt-[100px] menu">
              {renderMenuItems(items)}
            </ul>
          </Drawer>
        </div>
      </nav>

      <div>
        <ContentOutlet />
      </div>
    </div>
  );
};

export default Navbar;
