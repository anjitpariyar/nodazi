import React, { ReactNode } from "react";
// import Link from 'next/link'
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};
import FadeInOut from "components/layout/FadeInOut";

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <FadeInOut>
      <Header />
      <main>{children}</main>
      <Footer />
    </FadeInOut>
  </div>
);

export default Layout;
