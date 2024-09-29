import Sidebar from '@/components/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <aside className="w-72 overflow-y-scroll">
        <Sidebar />
      </aside>
      <article className="flex-grow">{children}</article>
    </div>
  );
}
