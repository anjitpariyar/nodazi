import React from "react";
import styled from "styled-components";
import { Container } from "styled/Common.styled";
import Link from "next/link";
import Star from "public/icons/Star";
import { device } from "styled/Breakpoint";

export default function Header() {
  return (
    <HeaderWrap>
      <Container>
        <Nav>
          <Item>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </Item>
          <Item>
            <Link href="/portfolio">
              <a>WORK</a>
            </Link>
          </Item>
          <Item>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </Item>
          <StarWrap>
            <Star />
          </StarWrap>
          <Item>
            <a href="ig" target="_blank" rel="noreferrer">
              INSTAGRAM
            </a>
          </Item>
          <Item>
            <a href="ig" target="_blank" rel="noreferrer">
              BEHANCE
            </a>
          </Item>
        </Nav>
        {/* responsive from tablet*/}
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
  }
`;
const Item = styled.li`
  display: inline-block;
  a {
    color: currentColor;
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
