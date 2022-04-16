import React from "react";
import Link from "next/link";
import golbalStyles from "../../../styles/global.module.css";
import headerStyles from "../styles.module.css";
import { useRouter } from "next/router";

const Li = ({ title, href }) => {
  const { pathname } = useRouter();

  const isActive = pathname === href ? "active" : "";

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

const Navigation = ({ styles, navClassName }) => {
  return (
    <nav className={navClassName}>
      <ul className={styles.list}>
        <Li title="Quem Somos" href={"/quem-somos"} />
        <Li title="Produtos" href={"/produtos"} />
        <Li title="Depoimentos" href={"/depoimentos"} />
        <Li title="Contato" href={"/contato"} />
      </ul>
    </nav>
  );
};

export default Navigation;
