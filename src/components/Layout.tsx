import Head from 'next/head';
import * as React from 'react';

type Props = {
    title: string;
};

export const Layout: React.FunctionComponent<Props> = ({ children, title }) => (
    <div>
        <Head>
            <title>{`${title} | Pavol Hejný`}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="https://1.gravatar.com/avatar/3d98c15957c5f5dd227e53dbc7cbb60d?s=64&amp;r=pg&amp;d=mm ?&gt;" />
        </Head>
        <header>
            <h1>
                <a href="https://www.pavolhejny.com">Pavol Hejný</a> talks
            </h1>
        </header>
        <main>{children}</main>
        <footer>Made by Pavol Hejný</footer>
    </div>
);
