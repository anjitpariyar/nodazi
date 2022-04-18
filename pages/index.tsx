// import Link from "next/link";
import Head from 'next/head'


import Layout from "components/layout/Layout";
import { Banner, Brand, Bottom } from "components/pages/home";
const IndexPage = () => (
  <>
    <Layout title="NODAZI | Main">
      <Banner />
      <Brand />
      <Bottom />
    </Layout>
  </>
);

export default IndexPage;
