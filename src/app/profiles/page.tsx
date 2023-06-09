"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Loading from "../loading";
import defaultBlue from "../../../public/images/default-blue.png";

const Profiles = () => {
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
    <div className="flex items-center justify-center h-full">
      {status === "authenticated" && (
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-6xl text-white text-center">
            Quem está assistindo?
          </h1>

          <div className="flex items-center justify-center gap-8 mt-10">
            <Link href="/">
              <div className="group flex-row w-44 mx-auto">
                <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                  <Image src={defaultBlue} alt="Profile" width={176} />
                </div>

                <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                  {session?.user?.name}
                </div>
              </div>
            </Link>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Profiles;
