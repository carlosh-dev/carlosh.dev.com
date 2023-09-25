import Navbar from "@/components/navbar/Navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4 py-8 items-center justify-center w-screen">
        <main className="flex flex-col max-w-7xl w-full">
          {children}
        </main>
      </div>
    </>
  )
}
