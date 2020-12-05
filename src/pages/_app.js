import "../styles/globals.css";
import "../styles/menu.css";

function MyApp(page) {
    const { Component, pageProps } = page;
    return (
        <>
            <nav className="navbar">
                <ul className="nav-items">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/docs">Docs</a>
                    </li>
                </ul>
            </nav>
            <main
                className={
                    page.router.route === "/" ? "cotent-w-banner" : "content"
                }
            >
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
