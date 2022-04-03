import styled from "styled-components";
import { Container } from "styled/Common.styled";
import { device } from "styled/Breakpoint";
export default function Bottom() {
  return (
    <Footer>
      <Container>
        <Grid>
          <div>
            <Title>Brand&Identity</Title>
            <Text>LOGO(CI/BI)</Text>
            <Text>Identity Design</Text>
            <Text>Brand Guideline</Text>
          </div>
          <div>
            <Title>Editorial</Title>
            <Text>Book/Publishing Design</Text>
            <Text>Promotional Design</Text>
            <Text>Poster</Text>
          </div>
          <div>
            <Title>Package</Title>
            <Text>Product Package</Text>
            <Text>Season/Welcome Kit</Text>
          </div>
          <div>
            <Title>DIGITAL</Title>
            <Text>WEB Design</Text>

            <Text>UI/UX</Text>
          </div>
          <div>
            <Title>브랜드&아이덴티티</Title>
            <Text>로고(CI/BI)</Text>
            <Text>아이덴티티 디자인</Text>
            <Text>브랜드 가이드라인</Text>
          </div>
          <div>
            <Title>인쇄 매체</Title>
            <Text>도서/출판 디자인</Text>
            <Text>홍보물 디자인</Text>
            <Text>포스터 제작</Text>
          </div>
          <div>
            <Title>제품패키지</Title>
            <Text>상품 패키지</Text>
            <Text>시즌/웰컴 키트</Text>
          </div>
          <div>
            <Title>디지털</Title>
            <Text>웹디자인</Text>
            <Text>UI/UX디자인</Text>
          </div>
        </Grid>
      </Container>
    </Footer>
  );
}

const Footer = styled.footer`
  padding-block: 140px 174px;
  padding-bottom: 122px;
  font-size: 20px;
  @media ${device.mobileL} {
    padding-top: 10px;
    padding-bottom: 70px;
    font-size: 16px;
  }
`;
const Grid = styled.div`
  display: grid;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, minmax(100px, auto));
  gap: 92px 62px;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, minmax(100px, auto));
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 34px;
  }
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
    font-weight: 300;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`;
