export default function PageHeader({
    children,
    className=""
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <header className={`${className} w-11/12 md:w-4/5 lg:w-3/5 mx-auto border-b border-b-white mt-32 mb-8`}>
            {children}
        </header>
    );
}
