'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {

    const links = {
        'Home': '/',
        'Portfolio': '/portfolio',
        'Blog': '/blog'
    }

    const pathname = usePathname();

    return (
        <nav className="absolute top-0 right-0 flex flex-col w-fit text-right ml-auto p-8 text-lg select-none">
            {Object.entries(links).map(([k, v]) => {
                if (v === pathname)
                    return <p key={k}>{k}</p>;
                return <Link key={k} className="text-grayLink transition focus:outline-none focus:brightness-125 hover:brightness-125" href={`${v}`}>{k}</Link>;
            })}
        </nav>
    );
}
