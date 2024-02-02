import { Inter } from "next/font/google";
import React from "react";
import Image from "next/image";

import landscape from "/public/images/hd-image.jpg";

import cssHome from "@/styles/home.module.css";

import MyComponents from "@/components/myComponents";

const inter = Inter({ subsets: ["latin"] });

const css: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const container: React.CSSProperties = {
  maxWidth: "1024px",
  margin: "10px auto",
  textAlign: "center",
  padding: 10,
};

export default function Home() {
  function onLoadComplete() {
    alert("Finito");
  }

  return (
    <main>
      <div style={container}>
        {/* add css using properties */}
        <h1 style={css}>Hello Next!</h1>

        {/* add css using className defined into gloabal.css */}
        <h2 className="title">Hello Next 2.0!</h2>

        {/* import components */}
        <MyComponents />

        {/* add css animated defined into app.tsx */}
        <button className="animate__animated animate__tada">Hello</button>
        <br />
        <br />

        {/* add css using className defined into buttons.css include into gloabal.css */}
        <button className="button">Hello</button>
        <br />
        <br />

        {/* add css usign cssModule defined into styles but not include into gloabal.css */}
        <button className={cssHome["red-2"]}>Hello</button>
        <br />
        <br />

        {/* add css usign tailwind */}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <br />

        {/* using tag img, the image on browser is more havier */}
        {/* Image component of next transform format image into webp */}
        {/* Layout defualt value => restrict */}
        {/* Quality defualt value => 75 */}
        <Image
          // layout="responsive"
          objectFit="cover"
          src={landscape}
          alt="landscape"
          width={400}
          height={300}
          placeholder="blur"
          quality={50}
          onLoadingComplete={onLoadComplete}
        />

        {/* must insert link website used into next.config.mjs */}
        <Image
          src="https://raw.githubusercontent.com/dunzolo/dunzolo/main/pics/laptop_wave.png"
          alt="laptop carton"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
