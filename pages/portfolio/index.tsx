// import Link from "next/link";
import Layout from "components/layout/Layout";
import styled from "styled-components";
import { Container, Padding } from "styled/Common.styled";
import { portData } from "utils/sample-data";
import { Card } from "components/pages/portfolio";
const IndexPage = () => (
  <Layout title="NODAZI | Portfolio">
    <Section>
      <Container>
        <Padding>
          <Grid>
            {portData.map((data, index) => {
              return <Card {...data} key={index} />;
            })}
          </Grid>
        </Padding>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;

const Section = styled.section`
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;
