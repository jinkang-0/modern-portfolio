import { storage } from "@/firebase/firebaseConfig";
import { getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
import Image from "next/image";

export default async function ImageLoader({
    url,
    width,
    height,
    alt,
    className
}: {
    url: string,
    width: number,
    height: number,
    alt: string,
    className?: string
}) {

    const src = await getDownloadURL(ref(storage, url));

    return <Image className={className} src={src} width={width} height={height} alt={alt} />
}
