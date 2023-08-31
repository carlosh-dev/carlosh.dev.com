import Navbar from "@/components/navbar/Navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between px-24">
        {children}
      </main>
    </div>
  )
}
