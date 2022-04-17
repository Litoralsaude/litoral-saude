import React from "react";
import Link from "next/link";
import golbalStyles from "../../../styles/global.module.css";
import headerStyles from "../styles.module.css";
import { useRouter } from "next/router";

const Li = ({ title, href, isMobile }) => {
  const { pathname } = useRouter();

  const isActive = pathname === href && !isMobile ? "active" : "";

  return (
    <li
      className={`${golbalStyles.h3} ${headerStyles.item} ${headerStyles[isActive]}`}
    >
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Navigation = ({ styles, navClassName, isMobile }) => {
  return (
    <nav className={navClassName}>
      <ul className={styles.list}>
        <Li title="Quem Somos" href={"/quem-somos"} isMobile={isMobile} />
        <Li title="Produtos" href={"/produtos"} isMobile={isMobile} />
        <Li title="Depoimentos" href={"/depoimentos"} isMobile={isMobile} />
        <Li title="Contato" href={"/contato"} isMobile={isMobile} />
      </ul>
    </nav>
  );
};

export default Navigation;
