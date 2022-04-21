import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Menu, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import styles from "./styles.module.css";
import golbalStyles from "../../styles/global.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <div
      className={`${styles.container} ${styles.containerFluid} ${
        pathname === "/" && "header"
      } container-fluid`}
    >
      <Head>
        <title>Litoral Sáude</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-ico.svg" />
      </Head>
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
            <Link href="https://www.facebook.com/people/Litoral-Sa%C3%BAde/100004638612180/">
              <a target="_blank">
                <Image
                  src="/face.svg"
                  width={17}
                  height={17}
                  alt="Ícone do facebook"
                />
              </a>
            </Link>

            <Link href="https://www.instagram.com/litoral.saude/">
              <a target="_blank">
                <Image
                  src="/insta.svg"
                  width={17}
                  height={17}
                  alt="Ícone do instagram"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
