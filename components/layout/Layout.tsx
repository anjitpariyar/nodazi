import React, { ReactNode } from "react";
// import Link from 'next/link'
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  des?: string;
};
import FadeInOut from "components/layout/FadeInOut";

const Layout = ({
  children,
  title = "NODAZI STUDIO",
  des = "NODAZI STUDIO  is a graphic design studio.Understand the invisible essence of companies and brands, and develop creative ideas ",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={des} />
    </Head>
    <FadeInOut>
      <Header />
      <main>{children}</main>
      <Footer />
    </FadeInOut>
  </div>
);

export default Layout;
