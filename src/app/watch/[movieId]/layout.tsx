"use client";
import { usePathname } from "next/navigation";

async function getMoviePerId(movieId: string) {
  const res = await fetch(`http://localhost:3000/api/movies/${movieId}`);
  const data = await res.json();
  return data;
}

export default async function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const splitUrl = pathname.split("/");

  const movieId = splitUrl[splitUrl.length - 1];

  const { title } = await getMoviePerId(movieId as string);

  return (
    <>
      <title>{title}</title>

      {children}
    </>
  );
}
