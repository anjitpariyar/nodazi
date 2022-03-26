import { useRouter } from "next/router";
import { Container, Padding } from "styled/Common.styled";
import Layout from "components/layout/Layout";
import styled from "styled-components";
import { Details } from "components/pages/portfolio";
export default function Pid() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout title={"NODAZI | Portfolio - " + pid}>
      <Section>
        <Container>
          <Padding>
            <Details />
          </Padding>
        </Container>
      </Section>
    </Layout>
  );
}
const Section = styled.section`
  position: relative;
`;
