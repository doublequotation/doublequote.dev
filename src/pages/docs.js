import Head from "next/head";
import styles from "../styles/docs.module.css";

export default () => {
    return (
        <>
            <Head>
                <title>Docs | Double Quote</title>
            </Head>
            <main className={styles.article}>
                <h1 id={styles["page-title"]}>Docs</h1>
                <h2>Basics of Quote</h2>
                <article>
                    <div className={styles.nav}>
                        <ul className={styles["nav-items"]}>
                            <li>Basics of Quote</li>
                            <li>Installing</li>
                            <li>Usage</li>
                        </ul>
                    </div>
                    <div className={styles.main}></div>
                </article>
            </main>
        </>
    );
};
