import Link from "next/link";
import { ProjectData } from "@/app/portfolio/page";
import ImageLoader from "./ImageLoader";
import ShimmeringUI from "./ShimmeringUI";

export default function ProjectDisplay({
    data,
    flipped
}: {
    data: ProjectData,
    flipped?: boolean
}) {

    const imgStyle = (flipped)? "sm:col-start-2" : "";
    const textStyle = (flipped)? "sm:row-start-1 sm:text-right" : "";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(data.link)?
                <Link className={`${imgStyle} hover:-translate-y-1 transition`} href={data.link} target="_blank">
                    <ImageLoader url={data.thumbnail} width={1080} height={720} alt="project_image" />
                </Link>
                :
                <ImageLoader className={imgStyle} url={data.thumbnail} width={1080} height={720} alt="project_image" />
            }
            <div className={textStyle}>
                <h1 className="text-3xl">{data.title}</h1>
                <p className="text-md text-grayLink my-1">{data.subtitle}</p>
                <p>{data.desc}</p>
            </div>
        </div>
    );
}
