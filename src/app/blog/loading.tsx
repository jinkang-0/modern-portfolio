import ShimmeringUI from "@/components/ShimmeringUI";
import PageHeader from "@/components/PageHeader";

export default function Loading() {
    return (
        <main>
            <PageHeader>
                <h1 className="text-5xl pb-4">Blog.</h1>
            </PageHeader>

            <div className="flex flex-col mx-4 mini:mx-12 sm:mx-20 md:mx-32 lg:mx-72 gap-12 mb-16">
                <ShimmeringUI className="rounded-xl w-full h-96 sm:h-80 md:h-72 lg:h-64" />
                <ShimmeringUI className="rounded-xl w-full h-96 sm:h-80 md:h-72 lg:h-64" />
            </div>
        </main>
    );
}
