import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Cube from "public/icons/Cube";
import { device } from "styled/Breakpoint";

export default function Details({ data }) {
  console.log(data)
  let date = new Date(data.date);
  return (
    <>
      <Section>
        <Flex>
          <Div>
            <Tag>{data.subTitle}</Tag>
            <Title>{data.title}</Title>
            <Button title="Back to the portfolio">
              <Link href="/portfolio">
                <a>
                  <Cube />
                </a>
              </Link>
            </Button>
            <div>
              <Para>
                <span>CLIENT</span> {data.client}
              </Para>
              <Para>
                <span>DATE</span> {date.getFullYear() + ". " + date.getMonth()}
              </Para>
            </div>
          </Div>
          <div>
            <Para>{data.content}</Para>
          </div>
        </Flex>
      </Section>
      <Section>
        {data.additionalImages.map((data) => {
          return (
            <ImageWrapper key={data.id}>
              <Image
                src={data.url}
                layout="fill"
                alt={data.alt}
                blurDataURL={data.url}
                placeholder="blur"
                objectFit="contain"
              />
            </ImageWrapper>
          );
        })}
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
const Para = styled.p<{ light: boolean }>`
  margin-top: 0;
  margin-bottom: 1.5em;
  line-height: 1.6;
  font-weight: ${({ light }) => light && "300"};
  white-space: pre-line;
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
