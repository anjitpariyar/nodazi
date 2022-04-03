import styled from "styled-components";
import { Container } from "styled/Common.styled";
import Link from "next/link";
import Arrow from "public/icons/Arrow";
import Oval from "public/icons/Oval";
import { keyframes } from "styled-components";
import Image from "next/image";
import image1 from "public/image/Ellipse1.png";
import { device } from "styled/Breakpoint";

export default function Brand() {
  return (
    <Section>
      <Container>
        <Upper>
          <Title>
            <span>새로운 발견</span>
            {`을 통해 
          숨어있는 브랜드의 가치를 
          알아채고 `}
            <span>표현하는 사람들</span>
            <Path>
              <ImageWrapper>
                <Image
                  src={image1}
                  layout="fill"
                  alt={"portfolio "}
                  blurDataURL={"/image/Ellipse1.png"}
                  placeholder="blur"
                  objectFit="cover"
                />
              </ImageWrapper>
            </Path>
          </Title>

          <Button>
            <Link href="/portfolio">
              <a>
                <span>WORK</span>
                <Arrow />
              </a>
            </Link>
            <OvalBr>
              <Oval />
            </OvalBr>
          </Button>
        </Upper>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  font-size: 1rem;
  padding: 71px 0;
  @media ${device.tablet} {
    text-align: center;
  }
`;
const Upper = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-weight: 900;
  font-size: 64px;
  color: ${({ theme }) => theme.grey01};
  margin: 0;
  white-space: pre-line;
  line-height: 1.4;
  position: relative;
  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 40px;
    width: 100%;
  }
  span {
    transition: 1s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    transition-delay: 0.5s;
    @media ${device.tablet} {
      color: ${({ theme }) => theme.white};
    }

    &:first-child {
      transition-delay: 0s;
    }
  }
  &:hover {
    span {
      color: ${({ theme }) => theme.white};
    }
  }
`;
const Path = styled.span`
  position: absolute;
  top: -40px;
  left: -10px;
  width: 345px;
  overflow: hidden;
  @media ${device.tablet} {
    left: 100px;
  }
  @media ${device.mobileL} {
    left: 35px;
    top: -17px;
    width: 180px;
  }
`;
const ovalAnimation = keyframes`
 0% { stroke-dasharray: 723;
 }
 
 100% {stroke-dasharray: 913}
`;

const PatternAnimation = keyframes`
 0% { transform: translateX(-280%);
 }
 
 100% {transform: translateX(300%)}
`;

const Button = styled.button`
  font-size: 2em;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.green};
  font-weight: 700;
  width: 232px;
  height: 110px;
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
    height: 110px;
    width: auto;
    stroke-dashoffset: 2170;
  }
`;

const ImageWrapper = styled.div<{ speed: number }>`
  position: relative;
  width: 140px;
  height: 140px;
  transition: 0.3s linear;
  animation: ${PatternAnimation} 8s linear 0s infinite;
  animation-duration: ${({ speed }) => speed + "s"};
  animation-play-state: play;
  @media ${device.mobileL} {
    height: 60px;
    width: 60px;
  }
`;
