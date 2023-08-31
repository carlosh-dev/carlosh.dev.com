import Box3D from "../3d-objects/Box3D";
import NavItem from "./NavItem";


export default function Navbar() {
  return (
    <header className="flex w-full p-8 justify-center items-center">
      <div className="flex justify-between border-soli px-4 py-2 rounded-full items-center max-w-4xl h-full w-full bg-zinc-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-solid border-purple-950 drop-shadow-md">

        <Box3D />
        <nav className="flex gap-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-me">About me</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contacts">Contact</NavItem>
          {/* <ToogleTheme /> */}
        </nav>
      </div>
    </header>
  )
}
