"use client";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathName = usePathname();
  return <div>{pathName}</div>;
};

export default Page;
