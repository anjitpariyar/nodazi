import styled from "styled-components";
import { Container } from "styled/Common.styled";
import Link from "next/link";
import Logo from "public/icons/Logo";

export default function () {
  return (
    <Footer>
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
              <a href="tel:070-8807-1668">T. 070-8807-1668</a>
            </Text>
            <Text>
              {" "}
              <a href="mailto:nodazidesign@naver.com">
                {" "}
                M. nodazidesign@naver.com
              </a>
            </Text>
          </div>
          <div>
            <Title>SNS</Title>
            <Text>
              <a href="ig" target="_blank">
                instagram
              </a>
            </Text>
            <Text>
              <a href="http://" target="_blank">
                Behance
              </a>
            </Text>
          </div>
        </Flex>
      </Container>
    </Footer>
  );
}

const Footer = styled.footer`
  padding: 71px 0;
  padding-bottom: 122px;
  font-size: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between; ;
`;

const Brand = styled.div``;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1em;
  margin-bottom: 0.6em;
`;

const Text = styled.p`
  margin-top: 0;
  font-size: 1em;
  margin-bottom: 0.6em;
  a {
    color: currentColor;
    text-decoration: none;
  }
`;
