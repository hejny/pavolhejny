import Head from 'next/head';
import * as React from 'react';
import { PAGE_TITLE } from '../config';

type Props = {
    title?: string;
};

export const Layout: React.FunctionComponent<Props> = ({ children, title }) => (
    <>
        <Head>
            <title>{title ? `${title} | ${PAGE_TITLE}` : PAGE_TITLE}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                rel="shortcut icon"
                href="https://1.gravatar.com/avatar/3d98c15957c5f5dd227e53dbc7cbb60d?s=64&r=pg&d=mm"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
                integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.3/css/simple-line-icons.css"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                (function(i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;
                    (i[r] =
                        i[r] ||
                        function() {
                            (i[r].q = i[r].q || []).push(arguments);
                        }),
                        (i[r].l = 1 * new Date());
                    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m);
                })(
                    window,
                    document,
                    'script',
                    '//www.google-analytics.com/analytics.js',
                    'ga',
                );
                ga('create', 'UA-70710834-1', 'auto');
                ga('send', 'pageview');
            `.replace(/\s+/gm, ' '),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'http://schema.org/',
                        '@type': 'Person',
                        name: 'Pavol Hejný',
                        image: 'https://1.gravatar.com/avatar/3d98c15957c5f5dd227e53dbc7cbb60d?s=300&r=pg&d=mm',
                        jobTitle: 'Web app developer',
                        telephone: '+420 774 080 996',
                        url: 'https://www.pavolhejny.com',
                        sameAs: [
                            'https://github.com/hejny/',
                            'http://www.facebook.com/hejny',
                            'http://instagram.com/pavolhejny',
                            'http://www.linkedin.com/in/hejny',
                        ],
                    }),
                }}
            />
        </Head>
        {children}
        <style jsx global>
            {`
                body {
                    font-family: roboto condensed, sans-serif;
                    text-align: center;
                    padding: 0;
                    margin: 0;
                    min-height: 100vh;
                    background: url(./static/background.jpg);
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-color: #000;
                }

                * {
                    transition: all 0.2s ease-out;
                }

                a {
                    text-decoration: underline;
                    color: rgba(255, 255, 255, 0.397);
                    outline: 0;
                }

                a:hover {
                    color: #fff;
                }
            `}
        </style>

        {/*
        <header>
            <h1>
                <a href="https://www.pavolhejny.com">Pavol Hejný</a> talks
            </h1>
        </header>
        <main></main>
        <footer>Made by Pavol Hejný</footer>
        */}
    </>
);
