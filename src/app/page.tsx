"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";

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
      {status === "authenticated" && (
        <>
          <Navbar />
          <Billboard/>
        </>
      )}
    </>
  );
}
