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
                <h2 id="basics">Basics of Quote</h2>
                <article>
                    <div className={styles.main}>
                        <p>
                            <b>
                                Thank you for reading the docs! It takes so long
                                to write this so thank you for taking the time
                                to read it.
                            </b>
                            Quote is a simple filesystem designed to make the
                            cloud more accessible. Quote allows you to
                            synchronize all of your devices file systems into
                            one. Here is an example:
                        </p>
                        <p>
                            Lets say Marvin has a computer for work and a
                            computer for home as a lot people do. Well one day
                            Marvin forgot his work computer at work (Ooh No).
                            With Quote All Marvin has to do is open his home
                            computers terminal and grab all files he needs from
                            Quote to continue his work from home.
                        </p>
                        <h2 id="install">Install</h2>
                        <p>
                            So far Quote has your basic options for any
                            filesystem, read, write, and delete. To get started
                            using Quote first install the latest version from
                            the github releases. Once you downloaded the zip
                            file that should have a name that looks similar to
                            <i>Quote-1.1.0.zip</i>. Extract that file and
                            install the binary file to your computer currently
                            Quote only supports Mac and Unix based operating
                            systems.
                        </p>
                        <h2 id="setup">Setting up</h2>
                        <p>
                            To make sure Quote is working on your computer run:
                        </p>
                        <pre>
                            <code class="bash">Quote</code>
                        </pre>
                        <p>
                            It should return something that looks like a help
                            screen.
                        </p>
                        <p>
                            Before you start uploading stuff you will need to
                            register a user. You can do this with the following:
                        </p>
                        <pre>quote -auth marvin@example.com</pre>
                        <p>
                            General rule of thumb is when making a Quote user
                            always use your primary email address as the
                            username. The auth command will return your public
                            key and your email.
                        </p>
                        <p>
                            To test to make sure the user was created
                            successfully you can run:
                        </p>
                        <pre>
                            <code class="bash">quote -user</code>
                        </pre>
                        <p>This should return your public key and email.</p>
                        <h3 id="file-methods">File methods</h3>
                        <p>
                            Quote works off tries to duplicate your original
                            file structure across all the cloud. So when
                            uploading a file pass in a relative file path and
                            Quote will use that path as the path to the file.
                        </p>
                        <p>For example:</p>
                        <p>
                            Lets say you have the following directory structure:
                        </p>
                        {/* prettier-ignore */}
                        <pre>
                            <code class="bash">
                                example_dir<br/> 
                                └─── Documents <br/>
                                │   └── Essay.txt<br/> 
                                │<br/>
                                └─── Pictures <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;└── family_christmas_2019.jpeg<br/>
                            </code>
                        </pre>
                        <p id="put">
                            Lets say you want to upload Essay.txt to Quote and
                            your currently in the example_dir directory. Well
                            all you have to do is:
                        </p>
                        <pre>
                            <code class="bash">
                                quote -put
                                marvin@example.com/Documents/Essay.txt
                            </code>
                        </pre>
                        <p>
                            This will upload the file to Quote with the name
                            <i>Documents/Essay.txt</i>. If you wanted to do a
                            custom file name for when its uploaded just include
                            a -o flag. For example you can do:
                        </p>
                        <pre>
                            <code class="bash">
                                quote -put
                                marvin@example.com/Documents/Essay.txt -o
                                essay.md
                            </code>
                        </pre>
                        <p>
                            This will upload the file <i>Documents/Essay.txt</i>{" "}
                            as
                            <i>essay.md</i>.
                        </p>
                        <p id="get">
                            To get a file you can just do that same thing as put
                            except with -get.
                        </p>
                        <pre>
                            <code class="bash">
                                quote -get marvin@example.com/essay.md
                            </code>
                        </pre>
                        <p>
                            The get method will print out the contents of that
                            file to the console. If you don't want this to
                            happen and instead you want to write the contents to
                            a file just do the following:
                        </p>
                        <pre>
                            <code class="bash">
                                quote -get marvin@example.com/essay.md >
                                newFile.md
                            </code>
                        </pre>
                        <p>
                            This will write the contents of the <i>essay.md</i>{" "}
                            in Quote to the file <i>newFile.md</i> on your local
                            computer.
                        </p>
                        <p>You can also get a folder with the following.</p>
                        <pre>
                            <code class="bash">
                                quote -get marvin@example.com/someFolder/
                            </code>
                        </pre>
                        <p>
                            This will return the names of the files in the
                            folder
                            <i>someFolder</i> on Quote.
                        </p>
                        <p id="delete">
                            To delete a file is really simple all you have to
                            know is the name of the file you want to delete.
                        </p>
                        <pre>
                            <code class="bash">
                                quote -del marvin@example.com/essay.md
                            </code>
                        </pre>
                        <p>
                            This will delete the file at the path specified on
                            Quote.
                        </p>
                    </div>
                    <div className={styles.nav}>
                        <ul className={styles["nav-items"]}>
                            <li>
                                <a href="#basics">Basics</a>
                            </li>
                            <li>
                                <a href="#install">Install</a>
                            </li>
                            <li>
                                <a href="#setup">setup</a>
                            </li>
                            <li>
                                <a href="#put">Upload</a>
                            </li>
                            <li>
                                <a href="#get">Download</a>
                            </li>
                            <li>
                                <a href="#delete">Delete</a>
                            </li>
                        </ul>
                    </div>
                </article>
            </main>
        </>
    );
};
