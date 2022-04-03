import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Cube from "public/icons/Cube";
import image1 from "public/image/portfolio/Rectangle23.png";
import image2 from "public/image/portfolio/Rectangle25.png";
import image3 from "public/image/portfolio/Rectangle26.png";
import { device } from "styled/Breakpoint";

export default function Details() {
  return (
    <>
      <Section>
        <Flex>
          <Div>
            <Tag>현대자동차와 함께하는</Tag>
            <Title>VISION DRIVE</Title>
            <Button title="Back to the portfolio">
              <Link href="/portfolio">
                <a>
                  <Cube />
                </a>
              </Link>
            </Button>
            <div>
              <Para>
                <span>CLIENT</span> 동아사이언스
              </Para>
              <Para>
                <span>DATE</span> 2021. 10
              </Para>
            </div>
          </Div>
          <div>
            <Para>
              2021 현대자동차와 함께하는 VISION DRIVE는 초등생을 대상으로
              진행하는 교육프로그램으로 아이들의 눈높이를 맞추어 흥미를 유발하는
              캐릭터를 디자인하여 프로그램북, 활동지, 활동카드, PPT, WEB에
              적용하였습니다.
            </Para>
            <Para>
              VISION DRIVE with 2021 Hyundai Motor Company is an educational
              program for elementary school students and designed characters
              that arouse interest at the children&apos;s level and applied them
              to programbooks, activity cards, PPT, and WEB.
            </Para>
          </div>
        </Flex>
      </Section>
      <Section>
        <ImageWrapper>
          <Image
            src={image1}
            layout="fill"
            alt={"portfolio "}
            blurDataURL={"/image/portfolio/Rectangle23.png"}
            placeholder="blur"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={image2}
            layout="fill"
            alt={"portfolio "}
            blurDataURL={"/image/portfolio/Rectangle23.png"}
            placeholder="blur"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={image3}
            layout="fill"
            alt={"portfolio "}
            blurDataURL={"/image/portfolio/Rectangle23.png"}
            placeholder="blur"
            objectFit="contain"
          />
        </ImageWrapper>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: relative;
  font-size: 20px;
  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 2em;
  }
`;

const Div = styled.div`
  p {
    margin-bottom: 0.5em;
  }
`;
const Tag = styled.div`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;
const Title = styled.h2`
  font-size: 2.5em;
  margin-top: 0;
  font-weight: 700;
`;
const Para = styled.p`
  margin-top: 0;
  margin-bottom: 1.5em;
  line-height: 1.6;
  span {
    width: 116px;
    display: inline-block;
  }
`;

const Button = styled.button`
  box-shadow: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  margin-bottom: 2em;
`;
const ImageWrapper = styled.div`
  position: relative;
  height: 500px;
  transition: 0.3s linear;
  @media ${device.mobileL} {
    height: 340px;
  }
`;
