import styles from "./styles/blogPost.module.css";

export default function BlogPost({
    title,
    publishDate,
    content
}: {
    title: string,
    publishDate: Date,
    content: React.ReactNode
}) {

    const dateString = publishDate.toLocaleString("en-US", { month: "long", day: 'numeric', year: 'numeric' })

    return (
        <div className={`${styles.blogPost} rounded-lg p-5 mini:px-8`}>
            <h1 className="text-xl mini:text-2xl">{title}</h1>
            <p className="text-grayLink italic mb-2 text-sm mini:text-md">Published on {dateString}</p>
            {content}
        </div>
    );
}
