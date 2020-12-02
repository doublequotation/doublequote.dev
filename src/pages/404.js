import Head from "next/head";
import styles from "../styles/404.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Not found | Double quote</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <main className={styles.container}>
                <img src="/fade-logo.svg" alt="next" />
                <h1 id={styles.hero}>
                    That page does not exist or has been moved.
                </h1>
                <button
                    className={styles.action}
                    onClick={() => (location.href = "/")}
                >
                    Go home
                </button>
            </main>
        </>
    );
}
