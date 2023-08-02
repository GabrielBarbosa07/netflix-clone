"use client";
import { usePathname } from "next/navigation";
import { BASE_URL } from "../../../../lib/fetcher";

async function getMoviePerId(movieId: string) {
  const res = await fetch(`${BASE_URL}/api/movies/${movieId}`);
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
