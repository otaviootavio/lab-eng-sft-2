import Head from "next/head";
import NavBar from "~/components/NavBar";

export default function Unauth() {
  return (
    <>
      <Head>
        <title>Risco Maromba</title>
        <meta name="description" content="App para o educador físico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-2 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Pluma <span className="text-[hsl(280,100%,70%)]">fit</span>
          </h1>
          <p className="text-xl tracking-tight text-white">
            Faça login para continuar
          </p>
        </div>
      </main>
    </>
  );
}
