import React from "react";
import styled from "styled-components";
import { Container } from "styled/Common.styled";
import Link from "next/link";
import Star from "public/icons/Star";

export default function () {
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
            <Link href="/">
              <a>WORK</a>
            </Link>
          </Item>
          <Item>
            <Link href="/">
              <a>CONTACT</a>
            </Link>
          </Item>
          <StarWrap>
            <Star />
          </StarWrap>
          <Item>
            <a href="ig" target="_blank">
              INSTAGRAM
            </a>
          </Item>
          <Item>
            <a href="ig" target="_blank">
              BEHANCE
            </a>
          </Item>
        </Nav>
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
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
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
  &:before,
  &:after {
    content: "";
    height: 1px;
    width: 100%;
    flex-grow: 2;
    background-color: #ffffff;
  }
  svg {
    height: auto;
    width: 45px;
    min-width: 45px;
  }
`;
