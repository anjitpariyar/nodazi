import styled from "styled-components";

export default function () {
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
      </Grid>
    </Footer>
  );
}

const Footer = styled.footer`
  padding-block: 140px 0;
  font-size: 20px;
`;
const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1.4em;
  margin-bottom: 0.8em;
`;

const Text = styled.p`
  margin-top: 0;
  font-size: 1.3em;
  margin-bottom: 0.6em;
  a {
    color: currentColor;
    text-decoration: none;
  }
`;
