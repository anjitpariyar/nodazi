import React from "react";
import styled from "styled-components";
import { Container } from "styled/Common.styled";

export default function () {
  return (
    <FooterWrap>
      <Container>Footer</Container>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  padding: 20px 0;
`;
