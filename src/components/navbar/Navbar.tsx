import NavItem from "./NavItem";


export default function Navbar() {
  return (
    <header className="flex w-full p-8 justify-center items-center bg-zinc-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 drop-shadow-md border-solid border-b-2 border-purple-500">
      <div className="flex justify-between items-center max-w-7xl h-full w-full">
        {/* <Box3D /> */}
        <div>{"<"}carlosh-dev{" />"}</div>

        <nav className="flex gap-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-me">About me</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contacts">Contact</NavItem>        </nav>
      </div>
    </header>
  )
}
