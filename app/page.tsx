import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center p-4">
        <Link href="/members">members</Link>
      </div>
    </main>
  );
}
