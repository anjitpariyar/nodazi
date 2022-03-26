import React from "react";
import styled from "styled-components";
import image3 from "public/image/Ellipse3.png";
import Image from "next/Image";
import Link from "next/Link";

export default function () {
  return (
    <FooterWrap>
      <Link href="/contact">
        <a>
          <ImageWrapper>
            <Image
              src={image3}
              layout="fill"
              alt={"portfolio "}
              blurDataURL={"/public/image/Ellipse3.png"}
              placeholder="blur"
              objectFit="cover"
            />
          </ImageWrapper>
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
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  &,
  img {
    transition: 0.3s linear;
  }
  &:hover {
    background-color: ${({ theme }) => theme.white};

    img {
      opacity: 0.5;
    }
  }
`;
