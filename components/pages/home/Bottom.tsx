import styled from "styled-components";
import { Container } from "styled/Common.styled";
import Link from "next/link";
import Logo from "public/icons/Logo";
import { device } from "styled/Breakpoint";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Flex>
          <Brand>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </Brand>
          <div>
            <Title>서울특별시 강남구 선릉로 578, 7층 15호</Title>
            <Text>15ho, 7F, 578, Seolleung-ro,</Text>
            <Text>Gangnam-gu, Seoul, Republic of Korea</Text>
          </div>
          <div>
            <Title>CALL</Title>
            <Text>
              <span>T. </span>
              <a href="tel:070-8807-1668">070-8807-1668</a>
            </Text>
            <Text>
              <span>M. </span>
              <a href="mailto:nodazidesign@naver.com">nodazidesign@naver.com</a>
            </Text>
          </div>
          <div>
            <Title>SNS</Title>
            <Social>
              <Text>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </Text>
              <Text>
                <a href="https://behance.net" target="_blank" rel="noreferrer">
                  Behance
                </a>
              </Text>
            </Social>
          </div>
        </Flex>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 71px 0;
  padding-bottom: 122px;
  font-size: 20px;
  @media ${device.mobileL} {
    text-align: center;
    padding-top: 0;
  }
  padding-bottom: 30px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Brand = styled.div`
  a {
    display: inline-block;
    svg {
      @media ${device.mobileL} {
        height: 24px;
        width: auto;
      }
    }
  }
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1em;
  margin-bottom: 0.6em;
  @media ${device.mobileL} {
    font-size: 13px;
  }
`;

const Text = styled.p`
  margin-top: 0;
  font-size: 1em;
  margin-bottom: 0.6em;
  @media ${device.mobileL} {
    font-weight: 300;
    font-size: 13px;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`;

const Social = styled.div`
  @media ${device.mobileL} {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
`;
