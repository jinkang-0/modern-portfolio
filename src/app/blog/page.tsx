import { db } from "@/firebase/firebaseConfig";
import { collection, query, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import BlogPost from "@/components/BlogPost";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";

type BlogData = {
    title: string,
    published: Timestamp,
    content: string
}

export default async function Home() {

    const q = query(collection(db, 'blogs'), orderBy('published', 'desc'), limit(10));
    const snapshot = await getDocs(q);
    const data: BlogData[] = [];
    snapshot.forEach(doc => {
        data.push(doc.data() as BlogData);
    });

    return (
        <>
            <PageHeader>
                <h1 className="text-5xl pb-4">Blog.</h1>
            </PageHeader>

            <section className="flex flex-col gap-12 mx-auto w-11/12 md:w-4/5 lg:w-3/5">
                {(data.length > 0)?
                    data.map((d) => {
                        return (
                            <BlogPost
                                key={uuidv4()}
                                title={d.title}
                                publishDate={d.published.toDate()}
                                content={<p>{d.content}</p>}
                            />
                        );
                    })
                    :
                    <p className="mb-72">Sorry, this page is new and no blogs are out yet. Check back later!</p>
                }
            </section>

            <PageFooter
                links={[
                    ["Home", "/"],
                    ["Portfolio", "/portfolio"]
                ]}
            />
        </>
    );
}
