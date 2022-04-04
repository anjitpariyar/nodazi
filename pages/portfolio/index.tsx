// import Link from "next/link";
import Layout from "components/layout/Layout";
import styled from "styled-components";
import { Container, Padding } from "styled/Common.styled";
import { portData } from "utils/sample-data";
import { Card } from "components/pages/portfolio";
import { device } from "styled/Breakpoint";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const IndexPage = ({ datas }) => (
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
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 7px;
  }
`;

// graphql
const query = gql`
  query {
    cource {
      id
      name
      courseDetaild {
        ... on CourseHeaderRecord {
          smallTitle
          bigTitle
          buttonText
          description
        }
      }
    }
  }
`;

// auth process
const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,

      authorization: "Bearer " + process.env.NEXT_PUBLIC_DATO_CMS_TOKEN,
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

  console.log(data);

  return {
    props: {
      datas: [],
    },
  };
}
