import { useRouter } from "next/router";
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

export default function Pid({ datas }) {
  const router = useRouter();
  const { pid } = router.query;
  console.log(datas[0].portfolio);
  const data = datas[0].portfolio;

  return (
    <Layout title={"NODAZI | Portfolio - " + pid}>
      <Section>
        <Container>
          <Padding>
            <Details data={data} />
          </Padding>
        </Container>
      </Section>
    </Layout>
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
      authorization: "Bearer " + process.env.NEXT_PUBLIC_DATO_CMS_TOKEN,
    },
  };
});

export async function getServerSideProps(context) {
  const pid = context.params.pid;
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
    query {
      portfolio(filter: { id: { eq: ${pid} } }) {
        id
        _createdAt
        images {
          images {
            url
            alt
            id
          }
        }
      }
    }
  `,
  });

  return {
    props: {
      datas: [data],
    },
  };
}
