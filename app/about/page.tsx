import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | NextBase",
    description: "About NextBase project"
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">About Us</h1>

                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-lg text-muted-foreground">
                    <p>
                        NextBase is an artisanal starting point for modern web applications.
                        We believe that setting up a new project shouldn't be a chore—it should be a launchpad.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">Our Mission</h2>
                    <p>
                        To provide developers with a robust, opinionated, yet flexible foundation that combines
                        performance, developer experience, and accessibility. We handle the configuration
                        so you can focus on the creation.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8">The Stack</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Next.js 16:</strong> The React Framework for the Web</li>
                        <li><strong>React 19:</strong> The latest in component-based UI</li>
                        <li><strong>Tailwind CSS 4:</strong> Utility-first CSS framework for rapid UI development</li>
                        <li><strong>shadcn/ui:</strong> Beautifully designed components that you can copy and paste</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
