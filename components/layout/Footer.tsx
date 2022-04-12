import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Circle from "public/icons/Circle";
import { device } from "styled/Breakpoint";
import { useRouter } from "next/router";
import ArrowUp from "public/icons/ArrowUp";
import Oval from "public/icons/Oval";
export default function Footer() {
  const { pathname } = useRouter();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {pathname !== "/contact" && (
        <FooterWrap>
          <Link href="/contact">
            <a>
              <Circle />
            </a>
          </Link>
          {pathname === "/portfolio/[pid]" && (
            <Button onClick={scrollTop}>
              <span>
                <span>TOP </span>
                <ArrowUp />
              </span>

              <OvalBr>
                <Oval />
              </OvalBr>
            </Button>
          )}
        </FooterWrap>
      )}
    </>
  );
}

const FooterWrap = styled.footer`
  /* position: absolute;
  right: 43px;
  bottom: 50px;
  z-index: 2; */
  /* text-align: right;
  padding: 0 43px 43px 0; */
  text-align: right;
  display: inline-block;
  transform: translateX(calc(100vw - 180px));
  margin-top: -5em;
  padding-bottom: 73px;
  fill: #c2d5ed;
  @media ${device.laptop} {
    margin-top: -5em;
  }
  @media ${device.mobileL} {
    display: none;
  }
  a {
    display: block;
    svg circle {
      transition: all 0.3s linear;
    }
    &:hover {
      svg circle {
        fill: #c2d5ed;
      }
    }
  }
`;

const ovalAnimation = keyframes`
 0% { stroke-dasharray: 723;
 }
 
 100% {stroke-dasharray: 913}
`;
const Button = styled.button`
  cursor: pointer;
  margin-top: 150px;
  font-size: 24px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.grey};
  font-weight: 700;
  width: 110px;
  height: 52px;
  position: relative;
  @media ${device.tablet} {
    display: none;
  }
  a {
    color: currentColor;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    position: relative;
    z-index: 2;
    height: 100%;
  }
  &:hover {
    svg path {
      animation: ${ovalAnimation} 0.5s linear 0s 1;
    }
  }
`;

const OvalBr = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  svg {
    height: 52px;
    width: auto;
    stroke-dashoffset: 2170;
    path {
      stroke: ${({ theme }) => theme.grey};
    }
  }
`;
