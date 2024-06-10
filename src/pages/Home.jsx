import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <div className="w-full relative h-full text-base font-poppins">
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    </>
  );
}
