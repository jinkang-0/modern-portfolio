'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function PageFooter({
    links,
    className
}: {
    links: [string, string][],
    className?: string
}) {

    function scrollToTop() {
        window.scroll(0, 0);
    }

    const animatedIconLink = "hover:-translate-y-2 transition";

    return (
        <footer className={`relative bg-footer w-full h-48 mt-32 ${className}`}>
            <section className="absolute bottom-0 left-0 m-4 ml-8 text-3xl flex gap-4">
                <Link className={animatedIconLink} href="https://github.com/jinkang-0" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                    className={animatedIconLink}
                    href="https://www.linkedin.com/in/jinkang-fang-64b6021b3/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link className={animatedIconLink} href="mailto:jinkang.fang@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </section>

            <section className="flex flex-col absolute top-0 right-0 text-right m-4 text-grayLink text-lg">
                {links.map((l) => {
                    return (
                        <Link
                            className="hover:brightness-125"
                            href={`${l[1]}`}
                            key={uuidv4()}
                        >
                            {l[0]}
                        </Link>
                    );
                })}
            </section>

            <p 
                className="absolute bottom-0 right-0 text-right text-grayLink brightness-90 m-4 text-lg hover:brightness-110 cursor-pointer"
                onClick={scrollToTop}
            >
                Back to top
            </p>
        </footer>
    );
}
