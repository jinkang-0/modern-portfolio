import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <PageHeader>
                <h1 className="text-3xl mini:text-4xl md:text-5xl">Error 404: Whoops.</h1>
            </PageHeader>
            <p className="mx-auto px-8 w-3/5">
                Unfortunately, this page does not exist yet. 
                Click <Link className="text-grayLink hover:underline" href="/">here</Link> to go back.
            </p>
        </main>
    );
}
