export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} NextBase. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
