import styled from "styled-components";
import { Container } from "styled/Common.styled";
export default function Banner() {
  return (
    <Section>
      <Container>
        <Title>
          <b>NODAZI STUDIO</b>
          {`  is a graphic design studio.
Understand the invisible essence of companies and brands, 
and develop creative ideas and Through the design process of
conceptual thinking, we visualize it as a creative design. 
We want our passionate design to be of great help 
to our customers’ business.
We hope that our excellent offer will be a flexible 
collaboration with our customers.`}
        </Title>
        <Text>
          <b>노다지 스튜디오</b>
          {`는 그래픽디자인 전문회사입니다. 
기업과 브랜드의 보이지 않는 본질을 이해하고 창의적인 아이디어와
개념적인 사고의 디자인 과정을 통해, 크리에티브한 디자인으로 시각화합니다.
우리의 열정적인 디자인이 고객의 비지니스에 큰 도움이 되기를 원하며 
노다지스튜디오의 탁월한 제안이 고객과의 유연한 협업이 되기를 바랍니다.`}
        </Text>
        <Hr />
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding-block: 140px 0px;
  font-size: 28px;
  font-weight: 300;
`;
const Title = styled.h2`
  white-space: pre;
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 60px;

  b {
    font-weight: 600;
  }
`;
const Text = styled.p`
  font-size: 1em;
  white-space: pre;
  line-height: 1.8;
  b {
    font-weight: 600;
  }
`;

const Hr = styled.hr`
  margin-top: 100px;
  border: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.white};
`;
