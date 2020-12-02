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
            <div
                className={() => {
                    if (page.router.route == "/") {
                        return "content-w-banner";
                    } else {
                        return "content";
                    }
                }}
            >
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
