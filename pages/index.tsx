import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rochell</title>
        <link rel="icon" href="/toadz.ico" />
        </Head>
      <Navbar />
      <SlideShow />
    </div>
  );
};

export default Home;
