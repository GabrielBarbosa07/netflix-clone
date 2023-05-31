import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      <h4 className="text-6xl text-white">Hello Main Page</h4>
      <Link href="/auth" className="py-3 px-6 bg-red-600 rounded-lg hover:bg-red-700 text-white">Registrar</Link>
    </main>
  );
}
