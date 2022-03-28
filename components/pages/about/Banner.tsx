import styled, { keyframes } from "styled-components";
import { Container } from "styled/Common.styled";
import { gsap } from "gsap";
import { useRef } from "react";
import Image from "next/image";
import float1 from "public/image/float/Maskgroup-1.png";
import float2 from "public/image/float/vector.png";
import float3 from "public/image/float/Maskgroup.png";

export default function () {
  const circle = useRef(null);
  const t1 = gsap.timeline();
  const MouseMove = (e) => {
    if (circle?.current) {
      t1.to(circle.current, {
        x: e.clientX,
        y: e.clientY,
        scale: 1,
        duration: 0.01,
        ease: "linear",
      });
    }
  };
  const MouseRemove = () => {
    if (circle?.current) {
      t1.to(circle.current, {
        scale: 0,
        origin: "-50% 0%",
      });
    }
  };
  return (
    <Section onMouseMove={MouseMove} onMouseLeave={MouseRemove}>
      <Container>
        <Relative>
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
          <div>
            <ImageWrapper>
              <Image
                src={float1}
                layout="fill"
                alt={"portfolio "}
                objectFit="contain"
              />
            </ImageWrapper>
            <ImageWrapper1>
              <Image
                src={float2}
                layout="fill"
                alt={"portfolio "}
                objectFit="contain"
              />
            </ImageWrapper1>
            <ImageWrapper2>
              <Image
                src={float3}
                layout="fill"
                alt={"portfolio "}
                objectFit="contain"
              />
            </ImageWrapper2>
          </div>
        </Relative>
        <Hr />
      </Container>
      <Circle ref={circle}></Circle>
    </Section>
  );
}

const Circle = styled.div`
  position: fixed;
  height: 150px;
  width: 150px;
  background-color: ${({ theme }) => theme.white};
  left: -75px;
  top: -75px;
  border-radius: 50%;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
  transition: 0.2s linear;
  transform: scale(0);
`;

const Section = styled.section`
  padding-block: 140px 0px;
  font-size: 28px;
  font-weight: 300;
  position: relative;
`;
const Title = styled.h2`
  white-space: pre;
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;

  b {
    font-weight: 600;
  }
`;
const Text = styled.p`
  font-size: 1em;
  white-space: pre;
  line-height: 1.8;
  position: relative;
  z-index: 2;

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

const Relative = styled.div`
  position: relative;
`;

const Float = keyframes`
 0% {
  transform: translateY(0);
}
10% {
  transform: translateY(-5px);
}
40% {
  transform: translateY(-20px);
}
50% {
  transform: translateY(-25px);
}
60% {
  transform: translateY(-20px);
}
90% {
  transform: translateY(-5px);
}
100% {
  transform: translateY(0);
}
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 270.19px;
  height: 200px;
  z-index: 0;
  animation: ${Float} 5s linear 0s infinite;
`;

const ImageWrapper1 = styled(ImageWrapper)`
  top: 400px;
  left: 34px;
  right: auto;
  width: 246.27px;
  height: 179.18px;
`;
const ImageWrapper2 = styled(ImageWrapper)`
  top: auto;
  bottom: -20px;
  width: 488.55px;
  height: 131.88px;
`;
