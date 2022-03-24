import styled from "styled-components";
import { Container } from "styled/Common.styled";
import Link from "next/link";
import Arrow from "public/icons/Arrow";
import Oval from "public/icons/Oval";
import { keyframes } from "styled-components";
export default function () {
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
          </Title>

          <Button>
            <Link href="/">
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
  &:hover {
    span {
      color: ${({ theme }) => theme.white};
    }
  }
`;
const ovalAnimation = keyframes`
 0% { stroke-dasharray: 723;
 }
 
 100% {stroke-dasharray: 913}
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
