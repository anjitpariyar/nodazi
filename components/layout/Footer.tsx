import React from "react";
import styled from "styled-components";
import image3 from "public/image/Ellipse3.png";
import Image from "next/Image";
import Link from "next/Link";
import Circle from "public/icons/Circle";
export default function () {
  return (
    <FooterWrap>
      <Link href="/contact">
        <a>
          <Circle />
        </a>
      </Link>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  position: absolute;
  right: 43px;
  bottom: 50px;
  z-index: 2;
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
