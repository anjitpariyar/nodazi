import styled from "styled-components";
import { device } from "./Breakpoint";

export const CommonLink = styled.div`
  a {
    text-decoration: none;
    color: currentColor;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1101px;
  margin: 0 auto;
`;

export const Padding = styled.div`
  padding-block: 140px 170px;
  @media ${device.mobileL} {
    padding-block: 40px 70px;
  }
`;
