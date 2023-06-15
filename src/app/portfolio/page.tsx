import { db } from "@/firebase/firebaseConfig";
import { Timestamp, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import ProjectDisplay from "@/components/ProjectDisplay";
import { v4 as uuidv4 } from "uuid";

export type ProjectData = {
    title: string,
    subtitle: string,
    desc: string,
    thumbnail: string,
    link: string,
    updated: Timestamp
}

export default async function Home() {

    const q = query(collection(db, 'projects'), orderBy('updated', 'desc'), limit(10));
    const projectSnapshot = await getDocs(q);
    const projectData: ProjectData[] = [];
    projectSnapshot.forEach(doc => {
        projectData.push(doc.data() as ProjectData);
    });

    var switcheroo = true;

    return (
        <>
            <PageHeader>
                <h1 className="text-5xl pb-4">Portfolio.</h1>
            </PageHeader>

            <section className="flex flex-col gap-32 mx-auto w-11/12 md:w-4/5 lg:w-3/5">
                {projectData.map(async (data) => {
                    switcheroo = !switcheroo;
                    return <ProjectDisplay
                        key={uuidv4()}
                        data={data as ProjectData}
                        flipped={switcheroo}
                    />
                })}
            </section>

            <PageFooter
                links={[
                    ["Home", "/"],
                    ["Blog", "/blog"]
                ]}
            />
        </>
    );
}
