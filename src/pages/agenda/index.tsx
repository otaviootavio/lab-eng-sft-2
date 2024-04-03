import Head from "next/head";
import React from "react";
import Agenda from "~/components/Agenda";
import NavBar from "~/components/NavBar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Risco Maromba</title>
        <meta name="description" content="App para o educador físico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="items-top container flex flex-row justify-center gap-2 px-4 py-16 ">
          <Agenda />
        </div>
      </main>
    </>
  );
};

export default Home;
