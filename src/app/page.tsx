import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <ul className="cursor-pointer flex gap-10 text-5xl text-gray-200">
        <li><Link className="p-20 bg-purple-600 hover:bg-purple-500 rounded-xl" href="/alice">Alice</Link></li>
        <li ><Link className="p-20 bg-teal-600 hover:bg-teal-500 rounded-xl" href="/bob">Bob</Link></li>
      </ul>
    </main>
  );
}
