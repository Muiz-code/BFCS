import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/BFCS LOGO/BFCS III.png";
import MenuItem from "antd/es/menu/MenuItem";

interface MenuItem {
  label?: string;
  key: string;
  link?: string;
  children?: MenuItem[];
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
    link: "/contactUs",
  },
  {
    label: "About Us",
    key: "SubMenu",

    children: [
      { label: "About Us", key: "AU", link: "/contactUs" },
      { label: "Why Choose Us", key: "WCU", link: "/" },
    ],
  },
  {
    label: "Contact",
    key: "SubMenu-2",
    children: [
      { label: "Tell A Friend", key: "TAF" },
      { label: "Join Our Team", key: "JOT" },
    ],
  },
  {
    label: "Book Us",
    key: "BU",
  },
];

const Navbar: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openMenuKeys, setOpenMenuKeys] = useState<string[]>([]);

  const handleMenuToggle = (key: string) => {
    setOpenMenuKeys((prevKeys) =>
      prevKeys.includes(key)
        ? prevKeys.filter((k) => k !== key)
        : [...prevKeys, key]
    );
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <li key={item.key}>
        {item.children ? (
          <button
            onClick={() => handleMenuToggle(item.key)}
            className="menu-button"
          >
            {item.label} <span className="caret">&#9660;</span>
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
            className="submenu p-5"
            style={{
              display: openMenuKeys.includes(item.key) ? "block" : "none",
            }}
          >
            {renderMenuItems(item.children)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <nav
      className="flex p-5 justify-between place-items-center bg-white fixed z-[1000]"
      data-aos="fade-down"
    >
      <div className="w-[15%]">
        <img src={logo} className="w-[50%] logo" alt="BFCS LOGO III" />
      </div>
      <ul className="flex gap-10 menu">{renderMenuItems(items)}</ul>
    </nav>
  );
};

export default Navbar;
