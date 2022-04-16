import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import styles from "./styles.module.css";
import golbalStyles from "../../styles/global.module.css";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div
      className={`${styles.container} ${styles.containerFluid} container-fluid`}
    >
      <div className={`${styles.container} container-md`}>
        <Link href="/">
          <a>
            <Image
              className={styles.img}
              width={121}
              height={62}
              src="/logo.svg"
              alt="Logo da litoral saúde"
            />
          </a>
        </Link>
        <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
          <IconButton
            disableRipple
            className={styles.mobileIcon}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          >
            {menuIsOpen ? <Close /> : <Menu />}
          </IconButton>
          <MobileNavigation menuIsOpen={menuIsOpen} />
        </div>
        <Navigation navClassName="d-none d-md-block" styles={styles} />
        <div className="d-none d-lg-block">
          <div className={styles.iconsContainer}>
            <Image
              src="/face.svg"
              width={17}
              height={17}
              alt="Ícone do facebook"
            />
            <Image
              src="/insta.svg"
              width={17}
              height={17}
              alt="Ícone do instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
