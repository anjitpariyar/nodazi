import styled from "styled-components";
import bannerImage from "public/image/home_banner.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { device } from "styled/Breakpoint";

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
          blurDataURL="/image/home_banner.png"
          placeholder="blur"
          unoptimized={true}
        />
        <TextWrap>
          {/* <Marquee speed={60} play={false} pauseOnHover={true} pauseOnClick={true}> */}
            <TextComp isGray={true}/>
            <TextComp isGray={true}/>
            <TextComp isGray={true}/>
            <TextComp isGray={true}/>
            <TextComp isGray={true}/>
          {/* </Marquee> */}
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
  @media ${device.mobileL} {
    height: 416px;
  }
`;
const TextWrap = styled.div`
  position: absolute;
  bottom: 71px;
  left: 0;
  width: 100%;
  cursor: default;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  /* .marquee-container {
    overflow-y: hidden;
  } */
  @media ${device.mobileL} {
    display: none;
  }

  /* .marquee {
    gap: 90px;
  } */
  .overlay {
    &:before,
    &:after {
      background: #545454;
      mix-blend-mode: darken;
      width: 300px;
      @media ${device.tablet} {
        width: 150px;
      }
    }
  }
`;
const Text = styled.h2`
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0;
  word-spacing: 5px;
  margin: 0 45px;
  word-break: keep-all;
white-space: nowrap;
`;

const TextComp = ({ isGray }: { isGray?: boolean }) => {
  return (
    <Text style={{ color: isGray ? "gray" : "white" }}>
      BRANDING * EDITORIAL * PACKAGING * DIGITAL{" "}
    </Text>
  );
};
