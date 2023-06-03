"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function Home() {
  const { push } = useRouter();
  const { data: session, status } = useSession();

  {
    status !== "authenticated" && <Loading />;
  }

  if (status === "unauthenticated") {
    <Loading />;
    push("/auth");
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-16 p-24">
        {status === "authenticated" && (
          <>
            <h4 className="text-6xl text-white">Hello Main Page</h4>
            <h1 className="text-white">Nome: {session?.user?.email}</h1>
            <button onClick={() => signOut()} className="w-full h-10 bg-white">
              Sair
            </button>
          </>
        )}
      </main>
    </>
  );
}
