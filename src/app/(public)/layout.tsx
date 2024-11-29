interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <main className="flex w-full flex-col px-10 py-20">{children}</main>;
}
