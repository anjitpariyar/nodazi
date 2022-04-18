// import Link from "next/link";
import Layout from "components/layout/Layout";
import styled from "styled-components";
import { Container, Padding } from "styled/Common.styled";
import { Card } from "components/pages/portfolio";
import { device } from "styled/Breakpoint";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const IndexPage = ({ data }) => {
  return (
    <Layout title="NODAZI | Portfolio">
      <Section>
        <Container>
          <Padding>
          <Grid>
              {/* id, images, images[0], url, title */}
              {data.allPortfolios.map((data, index) => {
                return <Card {...data} key={index} />;
              })}
            </Grid> 
          </Padding>
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;

const Section = styled.section`
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 7px;
  }
`;

// graphql
const query = gql`
  query AllPortfolios {
    allPortfolios(filter: { isPublished: { eq: true } }) {
      id
      title
      representativeImg {
        url
      }
    }
  }
`;

// auth process
const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: "Bearer 5e421e4a19acdcd9a727ce49fad4f7",
    },
  };
});

export async function getStaticProps() {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: query,
  });

  return {
    props: { data },
  };
}
