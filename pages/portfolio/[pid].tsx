import { Container, Padding } from "styled/Common.styled";
import Layout from "components/layout/Layout";
import styled from "styled-components";
import { Details } from "components/pages/portfolio";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Head from "next/head";

export default function Pid({ data }) {
  // console.log(datas[0].portfolio);
  const portfolio = data.portfolio;

  return (
    <>
      <Head>
        <meta property="og:image" content={portfolio.representativeImg.url} />
      </Head>
      <Layout title={portfolio.title + " - NODAZI | Portfolio  "}>
        <Section>
          <Container>
            <Padding>
              <Details data={portfolio} />
            </Padding>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

const Section = styled.section`
  position: relative;
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

const query = gql`query Portfolio {
    portfolio(filter: {id: {eq: "3169700"}}) {
      id
      date
      representativeImg {
        url
      }
      additionalImages{
        url
      }
      content
      subTitle
      client
      title
    }
  }`;
export async function getServerSideProps(context) {
  console.log(context);
  const pid = context.query.pid;
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({ query });

  return {
    props: { data },
  };
}
