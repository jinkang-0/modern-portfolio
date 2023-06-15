import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavLinks from "@/components/NavLinks";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jinkang Fang",
    description: "Portfolio of Jinkang Fang, a student and hobbyist web developer. Contains projects, stories, and very, very dry humor.",
    icons: {
        icon: '/icon.png'
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
                <NavLinks />
                {children}
            </body>
        </html>
    );
}
