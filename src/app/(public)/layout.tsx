import Navbar from "@/components/navbar/Navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="flex w-screen flex-col items-center justify-center px-4 py-8">
        <main className="flex w-full max-w-5xl flex-col">{children}</main>
      </div>
    </>
  );
}
