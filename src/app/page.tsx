import { db } from "@/firebase/firebaseConfig";
import { Timestamp, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition, IconLookup, IconName, findIconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { v4 as uuidv4 } from "uuid";
import PageHeader from "@/components/PageHeader";
import IconText from "@/components/IconText";
import PageFooter from "@/components/PageFooter";
import ImageLoader from "@/components/ImageLoader";

// add fontawesome solid icons
library.add(fas);

// define custom typing
type MainPageDataType = {
    title: string,
    extra: boolean,
    breakdown: {
        icon: IconName,
        iconColor: string,
        text: string,
        link?: string,
        linkText?: string,
        list?: string[]
    }[]
}

type MainPageMetaData = {
    published: Timestamp,
    status: string,
    topText: string,
    bottomText: string,
    introParagraph: string[],
    title: string,
    portrait: string
}

export default async function Home() {

    // get main page data
    const snapshot = await getDocs(collection(db, 'mainPageData'));
    const mainPageValues: MainPageDataType[] = [];
    snapshot.forEach(doc => {
        mainPageValues.push(doc.data() as MainPageDataType);
    });

    const topData: MainPageDataType[] = [];
    const bottomData: MainPageDataType[] = [];
    const contentData = mainPageValues as MainPageDataType[];
    contentData.forEach(d => {
        if (!d.extra)
            topData.push(d);
        else
            bottomData.push(d);
    });
    
    // get meta data
    const metaSnapshot = await getDoc(doc(db, 'config', 'mainPageMeta'));
    const metaData = metaSnapshot.data() as MainPageMetaData;

    var lastUpdated: string = parsePastTime(metaData.published.toDate());
    
    function parsePastTime(date: Date): string {
        const now: Date = new Date();
        const diff: number = now.getTime() - date.getTime();
        const diffInSeconds: number = diff / 1000;
        const diffInMinutes: number = diffInSeconds / 60;
        const diffInHours: number = diffInMinutes / 60;
        const diffInDays: number = diffInHours / 24;
        const diffInMonths: number = diffInDays / 30;
        const diffInYears: number = diffInMonths / 12;
        
        var returnString: string = "";
        if (diffInYears > 1)
            returnString = appendUnit(diffInYears, 'year');
        else if (diffInMonths > 1)
            returnString = appendUnit(diffInMonths, 'month');
        else if (diffInDays > 1)
            returnString = appendUnit(diffInDays, 'day');
        else if (diffInHours > 1)
            returnString = appendUnit(diffInHours, 'hour');
        else if (diffInMinutes > 1)
            returnString = appendUnit(diffInMinutes, 'minute');
        else if (diffInSeconds > 1)
            returnString = appendUnit(diffInSeconds, 'second');
        else
            return "just now";
        
        return returnString + " ago";
    }

    function appendUnit(x: number, unit: string) {
        return `${Math.floor(x)} ${unit}${plural(x)}`;
    }

    function plural(x: number): string {
        return (Math.floor(x) > 1)? "s" : "";
    }

    // parse data for main page segments
    function dataParser(data: MainPageDataType) {
        return (
            <div key={uuidv4()} className="mb-16">
                <p className="mt-4 text-md mini:text-lg">{data.title}</p>
                {data.breakdown.map(bd => {
                    const lookup: IconLookup = { prefix: 'fas', iconName: `${bd.icon}` };
                    const icon: IconDefinition = findIconDefinition(lookup);
                    if (!icon)
                        return;

                    const list: string[] = bd.list || [];
                    const link: string = bd.link || "";
                    const linkText: string = bd.linkText || "";
                    return <IconText key={uuidv4()} faIcon={icon} iconColor={bd.iconColor} text={bd.text} link={link} linkText={linkText} list={list} />
                })}
            </div>
        )
    }

    return (
        <>
            <PageHeader>
                <div className="flex">
                    <div>
                        <ImageLoader 
                            className="rounded-full aspect-square p-4 w-24 h-24 mini:w-32 mini:h-32 sm:w-44 sm:h-44"
                            url={metaData.portrait} 
                            width={150} 
                            height={150} 
                            alt="portrait"
                        />
                    </div>
                    <div className="mt-auto mb-4">
                        <h1 className="text-xl sm:text-4xl lg:text-5xl">{ metaData.title }</h1>
                        <p className="text-grayLink mt-2 text-sm sm:text-md">Last updated {lastUpdated}.</p>
                        <span className="text-grayLink italic text-xs sm:text-sm">{ metaData.status }</span>
                    </div>
                </div>
            </PageHeader>

            <article className="w-5/6 md:w-3/5 px-8 mt-4 mx-auto">
                <div className="flex flex-col gap-4 text-lg">
                    {metaData.introParagraph.map(p => <p key={uuidv4()}>{p}</p>)}
                </div>

                <h2 className="mt-16 text-xl mini:text-2xl font-medium">{ metaData.topText }</h2>
                {topData.map(data => dataParser(data))}

                {(bottomData.length > 0) &&
                    <>
                        <h2 className="mt-32 text-xl mini:text-2xl font-medium">{ metaData.bottomText }</h2>
                        {bottomData.map(data => dataParser(data))}
                    </>
                }

            </article>

            <PageFooter links={[['Portfolio', '/portfolio'], ['Blog', '/blog']]} />
        </>
    );
}
