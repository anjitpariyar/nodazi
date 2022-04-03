import styled from "styled-components";
import { device } from "styled/Breakpoint";

export default function Bottom() {
  return (
    <Footer>
      <Grid>
        <div>
          <Title>LOCATION</Title>

          <Text>서울특별시 강남구 선릉로 578, 7층 15호</Text>
          <Text>15ho, 7F, 578, Seolleung-ro, </Text>
          <Text>Gangnam-gu, Seoul, Republic of Korea</Text>
        </div>
        <div>
          <Title>CALL</Title>
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
          <Text>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </Text>
          <Text>
            <a href="https://behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
          </Text>
        </div>
      </Grid>
    </Footer>
  );
}

const Footer = styled.footer`
  padding-block: 140px 0;
  font-size: 20px;
  @media ${device.mobileL} {
    padding-top: 40px;
    padding-bottom: 70px;
    font-size: 16px;
  }
`;
const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 34px;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1.4em;
  margin-bottom: 0.8em;
  @media ${device.mobileL} {
    font-size: 1em;
  }
`;

const Text = styled.p`
  margin-top: 0;
  font-size: 1.3em;
  margin-bottom: 0.6em;
  @media ${device.mobileL} {
    font-size: 13px;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`;
