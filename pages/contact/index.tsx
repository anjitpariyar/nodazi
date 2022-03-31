// import Link from "next/link";
import Layout from "components/layout/Layout";
import styled from "styled-components";
import { Container, Padding } from "styled/Common.styled";
import { Form, Bottom } from "components/pages/contact";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const IndexPage = () => (
  <Layout title="NODAZI | Contact">
    <Section>
      <Container>
        <Padding>
          <Form />
          <Bottom />
        </Padding>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;

const Section = styled.section`
  position: relative;
  font-size: 20px;
`;
