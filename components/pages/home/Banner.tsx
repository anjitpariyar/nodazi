import styled from "styled-components";
import bannerImage from "public/image/home_banner.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Banner() {
  return (
    <Section>
      <ImageWrapper>
        <Image
          src={bannerImage}
          layout="fill"
          alt={
            "NDZ 새로운 발견을 통해 숨어있는 브랜드의 가치를 알아채고 표현하는 사람들  "
          }
          blurDataURL="public/image/home_banner.png"
          placeholder="blur"
          unoptimized={true}
        />
        <TextWrap>
          <Marquee speed={60}>
            <TextComp />
            <TextComp />
            <TextComp />
          </Marquee>
        </TextWrap>
      </ImageWrapper>
    </Section>
  );
}

const Section = styled.section``;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1420px;
  max-width: 100%;
`;
const TextWrap = styled.div`
  position: absolute;
  bottom: 71px;
  left: 0;
  width: 100%;
  /* .marquee {
    gap: 90px;
  } */
  .overlay {
    &:before,
    &:after {
      background: #545454;
      mix-blend-mode: darken;
      width: 300px;
    }
  }
`;
const Text = styled.h2`
  font-weight: 300;
  font-size: 1.6rem;
  margin: 0;
  word-spacing: 5px;
  margin: 0 45px;
`;

const TextComp = () => {
  return <Text>BRANDING * EDITORIAL * PACKAGING * DIGITAL </Text>;
};
