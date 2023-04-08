import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import Sidebar from "../sidebar/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="sidebar_sidebar">
    
            {isOpen && (
              <MenuIcon
                onClick={() => setOpenSidebar(!openSidebar)}
                className="menu_item"
              />
            )}
            {openSidebar && <Sidebar />}
          </div>

          <div className="right_nav">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="" className="logo" />
              </Link>
            </div>
            <nav className="pages">
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Store</li>
                </Link>
                <Link to="/">
                  <li>Contact</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <div className="shopping_icon">
          <Badge color="secondary" badgeContent={2}>
            <ShoppingBagOutlinedIcon onClick={() => setOpen(!open)} />
          </Badge>
          {open && <Cart />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
