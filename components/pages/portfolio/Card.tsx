import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Card({ id, img }) {
  return (
    <CardWrap>
      <Link href={`/portfolio/${id}`}>
        <a>
          <ImageWrapper>
            <Image
              src={img}
              layout="fill"
              alt={"portfolio "}
              blurDataURL={img}
              placeholder="blur"
              objectFit="contain"
            />
          </ImageWrapper>
        </a>
      </Link>
    </CardWrap>
  );
}

const CardWrap = styled.div``;
const ImageWrapper = styled.div`
  position: relative;
  height: 340px;
  filter: saturate(0);
  transition: 0.3s linear;
  &:hover {
    filter: saturate(1);
  }
`;
