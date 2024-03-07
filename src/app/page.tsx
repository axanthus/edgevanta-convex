import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ul className="cursor-pointer">
        <Link href="/alice" />
        <Link href="/bob" />
      </ul>
    </main>
  );
}
