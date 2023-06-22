"use client";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathName = usePathname();
  return (
    <div className="text-white text-6xl flex justify-center align-middle">
      {pathName}
    </div>
  );
};

export default Page;
