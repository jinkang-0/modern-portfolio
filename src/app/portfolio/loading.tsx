import ShimmeringUI from "@/components/ShimmeringUI";
import PageHeader from "@/components/PageHeader";

export default function Loading() {
    return (
        <main>
            <PageHeader>
                <h1 className="text-5xl pb-4">Portfolio.</h1>
            </PageHeader>

            <div className="flex flex-col mx-8 mini:mx-16 md:mx-32 lg:mx-72 gap-32 mb-16">
                <div className="grid grid-cols-1 mini:grid-cols-2 gap-4">
                    <ShimmeringUI className="rounded-xl w-full aspect-video" />
                    <div className="flex flex-col gap-2 h-fit">
                        <ShimmeringUI className="rounded-full w-3/5 mini:w-2/3 h-8" />
                        <ShimmeringUI className="rounded-full w-1/3 h-4" />
                        <ShimmeringUI className="rounded-full w-full h-4 mt-2" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 mx-2" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 mx-3" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 ml-1" />
                        <ShimmeringUI className="rounded-full w-full h-4" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 mx-2" />
                    </div>
                </div>
                <div className="grid grid-cols-1 mini:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <ShimmeringUI className="rounded-full w-3/5 h-8 mr-auto mini:mr-0 mini:ml-auto" />
                        <ShimmeringUI className="rounded-full w-1/3 h-4 mr-auto mini:mr-0 mini:ml-auto" />
                        <ShimmeringUI className="rounded-full w-full h-4 mt-2" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 mx-1" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 ml-auto" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 mx-3" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 ml-auto" />
                        <ShimmeringUI className="rounded-full w-full h-4" />
                        <ShimmeringUI className="rounded-full w-11/12 h-4 mx-2" />
                    </div>
                    <ShimmeringUI className="rounded-xl row-start-1 mini:col-start-2 w-full aspect-video" />
                </div>
            </div>
        </main>
    );
}
