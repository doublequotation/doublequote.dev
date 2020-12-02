import styles from "../styles/404.module.css";
export default function Home() {
    return (
        <main className={styles.container}>
            <img src="/fade-logo.svg" alt="next" />
            <h1 id={styles.hero}>
                That page does not exist or has been moved.
            </h1>
            <button class={styles.action} onClick={() => (location.href = "/")}>
                Go home
            </button>
        </main>
    );
}
