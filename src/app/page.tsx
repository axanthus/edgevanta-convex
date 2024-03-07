import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ul className="cursor-pointer">
        <li><Link href="/alice">Alice</Link></li>
        <li><Link href="/bob">Bob</Link></li>
      </ul>
    </main>
  );
}
