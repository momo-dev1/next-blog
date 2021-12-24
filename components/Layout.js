import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container px-6 mx-auto my-5">{children}</main>
    </div>
  );
};

export default Layout;
