import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";
import styles from "./styles/iconTextList.module.css";

export default function IconText({
    faIcon,
    text,
    className="",
    iconColor="",
    link,
    linkText,
    list
}: {
    faIcon: IconDefinition,
    text: string,
    className?: string,
    iconColor?: string,
    link?: string,
    linkText?: string,
    list?: string[]
}) {
    return (
        <div className={className}>
            <div className="flex items-center gap-2 mt-6 text-md mini:text-xl ml-4">
                <FontAwesomeIcon className={`bg-iconBg p-2 rounded aspect-square`} style={{ color: iconColor }} icon={faIcon} />
                <p>{text}</p>
            </div>
            {(list) &&
                <ul className={`ml-8 ${styles.listContainer}`}>
                    {list.map(l => {
                        return <li className="text-md" key={l}>{l}</li>
                    })}
                </ul>
            }
            {(link && linkText) &&
                <Link className="ml-16 text-blueLink hover:underline" href={link}>{linkText}</Link>
            }
        </div>
    );
}
