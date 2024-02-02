import { Inter } from "next/font/google";
import React from "react";
import Head from "next/head";
import Image from "next/image";

import image from "/public/images/hd-image.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Front End Gadget</title>
        <meta
          name="description"
          content="Front End Gadget is a demo site to learn Next"
        />
      </Head>
      <main>
        <Image src={image} width={400} height={300} alt="landscape" />
        <h1 className="title-pink">FrontEnd Gadgets</h1>
        <button className="transition-all duration-500 border border-pink-500 bg-white rounded-lg rounded-circle p-2 hover:bg-pink-50">
          VIEW CATALOG
        </button>
      </main>
    </>
  );
}
