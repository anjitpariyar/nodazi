import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Circle from "public/icons/Circle";
import { device } from "styled/Breakpoint";
import { useRouter } from "next/router";
export default function Footer() {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <>
      {pathname !== "/contact" && (
        <FooterWrap>
          <Link href="/contact">
            <a>
              <Circle />
            </a>
          </Link>
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
