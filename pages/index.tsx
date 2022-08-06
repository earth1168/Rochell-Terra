import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rochell</title>
        <link rel="icon" href="/toadz.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
