import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Container } from "styled/Common.styled";
import Link from "next/link";
import Star from "public/icons/Star";
import Cross from "public/icons/Cross";
import { device } from "styled/Breakpoint";
import { gsap } from "gsap";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const SideMenu = useRef(null);
  const t1 = gsap.timeline();
  const open = () => {
    document.querySelector("html").style.overflow = "hidden";
    t1.to(SideMenu?.current, {
      x: "-100%",
      duration: 0.6,
      ease: "ease-in",
    });
  };
  const close = () => {
    document.querySelector("html").style.overflow = "auto";
    t1.to(SideMenu?.current, {
      x: "0%",
      duration: 0.6,
      ease: "ease-in",
    });
  };

  useEffect(() => {
    document.querySelector("html").style.overflow = "auto";
  }, []);

  return (
    <HeaderWrap>
      <Container>
        <Nav ref={SideMenu}>
          <Item active={pathname === "/about"}>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </Item>
          <Item
            active={
              pathname === "/portfolio" || pathname === "/portfolio/[pid]"
            }
          >
            <Link href="/portfolio">
              <a>WORK</a>
            </Link>
          </Item>
          <Item active={pathname === "/contact"}>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </Item>
          <StarWrap>
            <Link href="/">
              <a>
                <Star />
              </a>
            </Link>
          </StarWrap>
          <Item>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </Item>
          <Item>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
              BEHANCE
            </a>
          </Item>
          <Hamburger onClick={close} cross={true}>
            <Cross />
          </Hamburger>
        </Nav>
        {/* responsive from tablet*/}
        <Hamburger onClick={open}>
          <Star />
        </Hamburger>
      </Container>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  font-size: 20px;
  padding: 1em 0;
  font-weight: 500;
  position: fixed;
  z-index: 999;
  width: 100%;
  left: 0;
  @media ${device.tablet} {
    font-size: 28px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
    background-color: #000;
    position: fixed;
    left: 100%;
    top: 0;
    padding: 44px 17px;
    height: 100vh;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    z-index: 100;
  }
`;
const Item = styled.li<{ active }>`
  display: inline-block;
  a {
    color: ${({ theme, active }) =>
      active ? theme.secondary : "currentColor"};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

const StarWrap = styled.div`
  flex-grow: 2;
  display: flex;
  position: relative;
  gap: 1.3em;
  align-items: center;
  padding: 0 1em;
  @media ${device.tablet} {
    flex-grow: 0;
    gap: 0;
    padding: 1em 0;
  }
  &:before,
  &:after {
    content: "";
    height: 1px;
    width: 100%;
    flex-grow: 2;
    background-color: #ffffff;
    @media ${device.tablet} {
      width: 25px;
    }
  }
  svg {
    height: auto;
    width: 45px;
    min-width: 45px;
    @media ${device.tablet} {
      display: none;
    }
  }
`;

const Hamburger = styled.div<{ cross }>`
  padding: 10px 17px;
  position: ${({ cross }) => (cross ? "absolute" : "fixed")};
  top: 0;
  right: 0;
  z-index: 99;
  display: none;
  cursor: pointer;
  @media ${device.tablet} {
    display: inline-block;
  }
  svg {
    height: 33px;
    width: auto;
  }
`;
