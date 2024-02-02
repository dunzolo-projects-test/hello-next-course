import "@/styles/globals.css";
import "@/styles/buttons.css";
import "animate.css/animate.min.css";

import type { AppProps } from "next/app";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />

      <div className="page">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
