import { useSession } from "next-auth/react";
import Head from "next/head";
import NavBar from "~/components/NavBar";
import Unauth from "./Unauth";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: sessionData } = useSession();

  if (!sessionData?.user) {
    return <Unauth />;
  }

  return (
    <>
      <Head>
        <title>LAB ENG SOFT 2</title>
        <meta
          name="description"
          content="Revolutionizing Fitness Training and Management"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <h1 className="text-center text-5xl font-bold">Risco Maromba</h1>
          <p className="mt-4 text-center text-xl">
            Pioneering the Future of Fitness Education
          </p>
          <div className="mt-10">
            <Image
              src="/heroimage.jpg"
              alt="Fitness Hero"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/training"
              className="rounded-lg bg-[#f0ad4e] px-4 py-2 font-semibold text-[#2e026d] transition duration-300 ease-in-out hover:bg-[#f7c978]"
            >
              Discover Training
            </Link>
            <Link
              href="/agenda"
              className="ml-4 rounded-lg bg-[#f0ad4e] px-4 py-2 font-semibold text-[#2e026d] transition duration-300 ease-in-out hover:bg-[#f7c978]"
            >
              View Agenda
            </Link>
          </div>
        </div>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-4xl font-semibold">
              Why Choose Us?
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-around">
              <div className="mt-4 w-full px-4 md:w-1/2 lg:w-1/3">
                <h3 className="text-2xl">Innovative Training Plans</h3>
                <p className="mt-2">
                  Customize your training like never before with our AI-driven
                  recommendations.
                </p>
              </div>
              <div className="mt-4 w-full px-4 md:w-1/2 lg:w-1/3">
                <h3 className="text-2xl">Comprehensive Agenda</h3>
                <p className="mt-2">
                  Manage your fitness schedule with ease and precision.
                </p>
              </div>
              <div className="mt-4 w-full px-4 md:w-1/2 lg:w-1/3">
                <h3 className="text-2xl">Community Support</h3>
                <p className="mt-2">
                  Join a thriving community of fitness enthusiasts and
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
