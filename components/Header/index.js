import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import styles from "./styles.module.css";
import golbalStyles from "../../styles/global.module.css";

const Header = () => {
  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={`${styles.container} container-md`}>
        <Link href="/">
          <a>
            <img
              className={styles.img}
              src="/logo.svg"
              alt="Logo da litoral saúde"
            />
          </a>
        </Link>
        <Navigation />
        <div className="d-none d-lg-block">
          <div className={styles.iconsContainer}>
            <Image
              className={styles.icon}
              src="/face.svg"
              width={17}
              height={17}
              alt="instagram icon"
            />
            <Image
              className={styles.icon}
              src="/insta.svg"
              width={17}
              height={17}
              alt="instagram icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
