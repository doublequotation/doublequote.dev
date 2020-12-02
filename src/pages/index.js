import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Double quote</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <main>
                <header className={styles.head}>
                    <div className={styles.headerHero}>
                        <h1>Double quote</h1>
                        <button id={styles["act-btn"]}>Sign up</button>
                    </div>
                    <svg
                        width="353"
                        height="272"
                        viewBox="0 0 353 272"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="quote"
                            d="M78.5496 0C104.417 0 124.291 9.54388 138.172 28.6316C152.052 47.0831 158.992 70.6246 158.992 99.2562C158.992 134.887 149.213 168.29 129.654 199.467C110.096 230.643 82.6506 254.821 47.319 272L0 230.961C25.2368 221.418 46.3727 207.738 63.4075 189.923C81.0733 171.471 92.7453 152.384 98.4236 132.66L94.6381 130.751C91.4835 132.66 87.698 134.25 83.2815 135.523C79.496 136.795 73.8177 137.432 66.2467 137.432C52.9973 137.432 39.748 132.023 26.4987 121.207C13.2493 110.391 6.62467 93.848 6.62467 71.5789C6.62467 50.5824 13.5648 33.4035 27.445 20.0421C41.9562 6.68071 58.9911 0 78.5496 0ZM272.558 0C298.425 0 318.299 9.54388 332.18 28.6316C346.06 47.0831 353 70.6246 353 99.2562C353 134.887 343.221 168.29 323.662 199.467C304.104 230.643 276.659 254.821 241.327 272L194.008 230.961C219.245 221.418 240.381 207.738 257.416 189.923C275.081 171.471 286.753 152.384 292.432 132.66L288.646 130.751C285.492 132.66 281.706 134.25 277.29 135.523C273.504 136.795 267.826 137.432 260.255 137.432C247.005 137.432 233.756 132.023 220.507 121.207C207.257 110.391 200.633 93.848 200.633 71.5789C200.633 50.5824 207.573 33.4035 221.453 20.0421C235.964 6.68071 252.999 0 272.558 0Z"
                            fill="white"
                        />
                    </svg>
                </header>
                <article className={styles["market-text"]}>
                    <div id={styles["text-1"]}>
                        <h2>A way of storing information</h2>
                        <p>
                            <b>Double quote</b> allows you to store make your
                            own cloud envirorment or host it with us.
                        </p>
                    </div>
                    <div id={styles["text-2"]}>
                        <h2>Open source</h2>
                        <p>
                            <b>Double quote</b> is compeletely open source!
                            Every line of code is all open to the public.
                        </p>
                        <button>Sign up</button>
                    </div>
                </article>
                <article className={styles.teams}>
                    <h1>Teams</h1>
                    <p>
                        Never has it been easier to work with a team and share
                        files.
                    </p>
                </article>
                <article className={styles["act-now"]}>
                    <h1>Get started now</h1>
                    <button id={styles["act-now"]}>Sign up now</button>
                </article>
                <footer className="foot">
                    <a
                        href="https://github.com/doublequotation/"
                        target="_blank"
                    >
                        Github
                    </a>
                </footer>
            </main>
        </>
    );
}
