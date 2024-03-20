import { useSession } from "next-auth/react";
import Head from "next/head";
import LastPost from "~/components/LastPost";
import NavBar from "~/components/NavBar";
import PostForm from "~/components/PostForm";
import PostsList from "~/components/PostList";
import Unauth from "./Unauth";

export default function Home() {
  const { data: sessionData } = useSession();

  if (!sessionData?.user) {
    return <Unauth />;
  }
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
          <LastPost />
          <PostForm />
          <PostsList />
        </div>
      </main>
    </>
  );
}
