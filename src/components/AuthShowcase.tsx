import { signIn, signOut, useSession } from "next-auth/react";

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <p className="text-center text-xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-6 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export default AuthShowcase;
