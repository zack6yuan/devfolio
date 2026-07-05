import Link from "next/link"
import { Menu } from "lucide-react"

export default function NavBar() {
    const navItems = [
        "Home",
        "About",
        "Projects",
        "Skills",
        "Contact"
    ]

    return (
        <nav className="sticky top-0 left-0 w-full z-50 flex justify-between items-center px-15 py-10 font-dynapuff">
            <h1 className="text-white font-bold lg:text-2xl md:text-xl text-lg uppercase">Zack Yuan</h1>

            <ul className="hidden lg:flex gap-6 uppercase">
                {navItems.map((item) => (
                    <li key={item}>
                        <Link href={`#${item.toLowerCase()}`} className="text-white">
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            <Menu stroke="white" width={20} height={20} className="lg:hidden" />
        </nav>
    )
}