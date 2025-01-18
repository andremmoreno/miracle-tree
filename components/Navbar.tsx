import Link from "next/link"
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname()

  return (
    <header className="px-5 py-3 bg-neutral-800">
      <nav className="flex justify-center items-center gap-4">
        <Link href={"/"} className={path === "/" ? "" : "active"}>
          Home
        </Link>
        <Link href={"/about"} className={path === "/about" ? "" : "active"}>
          About Us
        </Link>
      </nav>
    </header>
  )
}

export default Navbar