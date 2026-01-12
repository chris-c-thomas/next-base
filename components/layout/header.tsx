import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2 font-bold">
                    <span>NextBase</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-foreground">
                        Home
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-foreground">
                        About
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-foreground">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center space-x-2">
                    <Button asChild variant="outline" size="sm">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
