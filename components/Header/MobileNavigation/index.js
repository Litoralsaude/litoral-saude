import React from "react";
import Navigation from "../Navigation";
import styles from "./styles.module.css";
import styled from "@emotion/styled";

const Container = styled.div`
  && {
    position: absolute;
    width: 100%;
    height: ${({ menuIsOpen }) => (menuIsOpen ? "145px" : "0")};
    transition: height 0.5s, border 0.5s;
    overflow: hidden;
    left: 0;
    top: 99%;
    background-color: #fff;
    border-radius: 3px;
    padding: ${({ menuIsOpen }) => (menuIsOpen ? "5px" : "0")};

    & li {
      text-align: left;
      width: 100%;
      padding: 5px var(--bs-gutter-x, 0.75rem);
    }
  }
`;

const MobileNavigation = ({ menuIsOpen }) => {
  return (
    <Container
      menuIsOpen={menuIsOpen}
      className="d-block d-sm-block d-md-none d-lg-none d-xl-none"
    >
      <Navigation styles={styles} />
    </Container>
  );
};

export default MobileNavigation;
