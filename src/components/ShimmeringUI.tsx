import styles from "./styles/shimmer.module.css";

export default function ShimmeringUI({ className }: { className?: string }) {
    return (
        <div className={`${styles.shimmer} ${className} aspect-square`}></div>
    );
}
