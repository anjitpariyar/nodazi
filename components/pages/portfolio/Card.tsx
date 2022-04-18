import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Card(data) {
  // slug with pid and title
  //
  const [link, setLink] = useState(null);
  useEffect(() => {
    if (data?.id) {
      setLink(data?.id);
    }
  }, [data]);
  if (data) {
    return (
      <CardWrap>
        <Link
          href={{
            pathname: `/portfolio/${link}`,
          }}
        >
          <a>
            <ImageWrapper>
              <Image
                src={data.representativeImg.url}
                layout="fill"
                alt={"portfolio "}
                blurDataURL={data.representativeImg.url}
                placeholder="blur"
                objectFit="contain"
              />
            </ImageWrapper>
          </a>
        </Link>
      </CardWrap>
    );
  } else return null;
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
