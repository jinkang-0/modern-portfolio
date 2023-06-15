import ShimmeringUI from "@/components/ShimmeringUI";
import PageHeader from "@/components/PageHeader";

export default function Loading() {
    return (
        <main>
            <PageHeader>
                <div className="flex">
                    <div>
                        <ShimmeringUI className="rounded-full m-4 w-24 h-24 sm:w-32 sm:h-32" />
                    </div>
                    <div className="flex flex-col gap-2 w-full mt-auto mb-4">
                        <ShimmeringUI className="rounded-full w-4/5 mini:w-2/3 h-8" />
                        <ShimmeringUI className="rounded-full w-3/5 mini:w-1/3 h-4" />
                        <ShimmeringUI className="rounded-full w-3/5 mini:w-1/3 h-4" />
                    </div>
                </div>
            </PageHeader>

            <div className="flex flex-col mx-8 mini:mx-16 md:mx-32 lg:mx-72 gap-4">
                <ShimmeringUI className="rounded-full w-3/5 h-4" />
                <div className="flex flex-col gap-2">
                    <ShimmeringUI className="rounded-full w-full h-4" />
                    <ShimmeringUI className="rounded-full w-full h-4" />
                    <ShimmeringUI className="rounded-full w-2/5 h-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <ShimmeringUI className="rounded-full w-full h-4" />
                    <ShimmeringUI className="rounded-full w-2/3 h-4" />
                </div>
            </div>
        </main>
    );
}
