import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-3xl font-semibold">Welcome To Map App</h1>
        <Link href="/dashboard/map" className="underline">
          Save new location now
        </Link>
      </main>
    </div>
  );
}
