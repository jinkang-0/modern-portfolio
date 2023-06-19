"use client";

import { db } from "@/firebase/firebaseConfig";
import { Timestamp, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default async function TimeUpdate({
    className
}: {
    className?: string
}) {
    const [lastUpdated, setLastUpdated] = useState("");
    
    useEffect(() => {
        (async () => {
            const metaSnapshot = await getDoc(doc(db, 'config', 'mainPageMeta'));
            const metaData = metaSnapshot.data() as { published: Timestamp };
            const publishedTime = metaData.published.toDate();
            setLastUpdated(parsePastTime(publishedTime));
        })();
    });

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

    return <p className={className}>Last updated {lastUpdated}</p>;
}
