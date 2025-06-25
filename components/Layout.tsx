import Link from "next/link";
import '../src/app/globals.css'

export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <div>
            <nav style = {{ marginBottom: 20}} >
                <Link href="/" className="text-[30px] text-[red]">Home</Link> | <Link href="/about" className="text-[30px] text-[red]">About</Link>

            </nav>
            <main>{children}</main>
        </div>
    )
}