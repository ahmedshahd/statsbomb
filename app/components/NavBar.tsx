"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import Logo from "../../public/logo.svg";
// import Search from "./search";
import styles from "../styles/NavBar.module.css";
import { Img, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Search from "./search";

const MENU_LIST = [
  { text: "Who We Are", href: "/who-we-are", gridClass: "who-we-are" },
  { text: "Who We Help", href: "/who-we-help", gridClass: "who-we-help" },
  { text: "What We Do", href: "/what-we-do", gridClass: "what-we-do" },
];
const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSearchButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowInput(true);
  };
  const handleDocumentClick = (e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      setShowInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    // <header>
    //   <nav className={`nav`}>
    //     <Link href={"/"}>
    //       <Image alt="StatsBomb Icon" src={Icon}></Image>
    //     </Link>
    //     <div className={`nav__menu-bar`}>
    //       {/* <div></div>
    //       <div></div>
    //       <div></div> */}
    //     </div>
    //     <div className={`nav__menu-list`}>
    //       {MENU_LIST.map((menu, idx) => (
    //         <div key={menu.text}>
    //           <NavItem {...menu} />
    //         </div>
    //       ))}
    //     </div>
    //     <div className={"right-nav"}>
    //       <form
    //         ref={formRef}
    //         role="search"
    //         method="get"
    //         className={styles.form}
    //       >
    //         <div onClick={handleSearchButtonClick}>
    //           <SearchIcon
    //             marginLeft={"10px"}
    //             cursor="pointer"
    //             backgroundColor={"#e9e9e9"}
    //           />
    //         </div>
    //         {showInput && (
    //           <InputGroup>
    //             <Input
    //               type="search"
    //               border={"none"}
    //               focusBorderColor={"0"}
    //               backgroundColor={"#e9e9e9"}
    //             />
    //           </InputGroup>
    //         )}
    //       </form>
    //     </div>
    //   </nav>
    // </header>

    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image alt="StatsBomb Logo" src={Logo}></Image>
        </Link>
      </div>
      <div className={styles.rightNav}>
        {MENU_LIST.map((menu, idx) => (
          <div key={menu.text} className={menu.gridClass}>
            <NavItem {...menu} />
          </div>
        ))}
        <div className={styles.search}>
          <form
            ref={formRef}
            role="search"
            method="get"
            className={styles.form}
          >
             <div onClick={handleSearchButtonClick}>
              {/* <SearchIcon
              
              /> */}
              <Search/>

            </div>
            {showInput && (
              <input/>
            )}
          </form>
        </div>
        <div className={styles.english}>English</div>
        <div className={styles.login}>Login</div>
        <div className={styles.contactUs}>
          <a className={styles.contactUsBtn}>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
