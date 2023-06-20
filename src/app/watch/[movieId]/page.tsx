"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const pathName = usePathname();
  return <div>{pathName}</div>;
};

export default Page;
