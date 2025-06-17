import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import useGlobalContext from "@/hooks/use-context";
import SearchIcon from "@/svg/SearchIcon";
import navMenuData from "@/data/menu/menu-data";
import LogoTwoIcon from "@/svg/LogoTwoIcon";
import EmailTwoIcon from "@/svg/EmailTwoIcon";
import LocationTwoIcon from "@/svg/LocationTwoIcon";
const HeaderOne = () => {
  const { toggleSideMenu, toggleSearchBar,openLetterBox, setOpenLetterBox } = useGlobalContext();
 
  return (
    <>
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-text">
              <ul className="d-flex">
                <li>
                  <Link href="https://www.linkedin.com/in/sunenergystorage/">
                    <i className="fa-brands fa-linkedin"></i>Linkedin
                  </Link>
                </li>
              </ul>
              <div className="d-flex top-bar-mail">
                <div className="d-flex align-items-center  me-4">
                  <i>
                    <EmailTwoIcon />
                  </i>
                  <Link href="mailto:info@offgridsynergy.com">
                    <p>info@offgridsynergy.com</p>
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <i>
                    <LocationTwoIcon />
                  </i>
                  <p>Hi-Tech Zone, Nanshan District, Shenzhen, PRC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="menu-bar menu-bar-en">
            <div className="logo">
              <Link href="/">
                <LogoTwoIcon />
              </Link>
            </div>
            <nav className="navbar">
              <ul className="navbar-links">
                {navMenuData?.map((item) => (
                  <li
                    key={item?.id}
                    className={`navbar-dropdown ${
                      item?.hasDropdown === true ? "has-children" : ""
                    }`}
                  >
                    <Link href={item?.link}>{item?.label}</Link>
                    {item?.hasDropdown === true && (
                      <ul className="dropdown">
                        {item?.subMenu?.length &&
                          item?.subMenu?.map((subItm) => (
                            <li key={subItm?.id}>
                              <Link href={subItm?.link}>{subItm.label}</Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="search-style d-flex align-items-center">
              <button
                type="button"
                onClick={toggleSearchBar}
                className="search-btn"
              >
                <SearchIcon />
              </button>
              <button
                onClick={() => setOpenLetterBox(!openLetterBox)}
                className="header-one-btn newsbox button"
              >
                Request a Quote
              </button>
            </div>
            <div onClick={toggleSideMenu} className="bar-menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </>
  );
};

export default HeaderOne;
