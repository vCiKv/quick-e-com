"use client";
import React, { useRef, useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";

const headerLinks: {
  link: string;
  title: string;
}[] = require("@/data/navigation.json");
const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  ...props
}: {
  className?: string;
  navPosition?: number;
  hideNav?: boolean;
  hideSignin?: boolean;
  [props: string]: any;
}) => {
  const [scrollState, setScrollState] = useState({ prev: 0, current: 0 });
  const [isActive, setIsActive] = useState(false);
  const scrollPosition = scrollState.current;

  const checkNavPosition = () => {
    return scrollPosition > 200 || isActive ? true : false;
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollState((p) => ({ ...p, current: position }));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const nav = useRef<null | HTMLElement>(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  }, []);
  const openMenu = () => {
    if (nav.current) {
      document.body.classList.add("off-nav-is-active");
      nav.current.style.maxHeight = nav.current.scrollHeight + "px";
      setIsActive(true);
    }
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = "80px");
    setIsActive(false);
  };
  const toggleMenu = () => {
    isActive ? closeMenu() : openMenu();
  };

  const keyPress = (e: KeyboardEvent) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e: MouseEvent) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target as Node) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = `site-header ${checkNavPosition() ? "has-background" : ""}  ${
    className ?? ""
  }`;

  const getPosition = (pos?: number) => {
    return pos ? `nav-header-${pos}` : "";
  };
  return (
    <header {...props} className={classes}>
      <div className="container">
        <div className="site-header-inner">
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={toggleMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={`header-nav ${isActive ? "is-active" : ""}`}
              >
                <div className="header-nav-inner">
                  <ul
                    className={"list-reset text-xs " + getPosition(navPosition)}
                  >
                    {headerLinks.map((link) => (
                      <li key={link.title}>
                        <Link href={`/finance${link.link}`}>
                          <span onClick={closeMenu}>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {!hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link href={"/finance/login"}>
                          <button
                            className="button button-primary button-wide-mobile button-sm"
                            onClick={closeMenu}
                          >
                            Login
                          </button>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;

// Header.defaultProps = defaultProps;
