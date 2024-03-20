import Head from "next/head";
import LastPost from "~/components/LastPost";
import NavBar from "~/components/NavBar";
import PostForm from "~/components/PostForm";
import PostsList from "~/components/PostList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risco Maromba</title>
        <meta name="description" content="App para o educador físico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {false ? (
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Pluma <span className="text-[hsl(280,100%,70%)]">fit</span>
            </h1>
          ) : (
            <>
              <LastPost />
              <PostForm />
              <PostsList />
            </>
          )}
        </div>
      </main>
    </>
  );
}
