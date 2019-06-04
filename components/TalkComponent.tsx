import * as React from 'react';
import { Talk } from '../model/Talk';

type Props = {
    talk: Talk;
};

export const TalkComponent: React.FunctionComponent<Props> = ({ talk }) => (
    <div className="talk">
        <div className="thumbnail empty"></div>

        <div className="info">
            <h1 className="name">Testování v praxi</h1>
            <h2>
                <span>2019</span> | <span>Digisemestr</span>
            </h2>

            <p className="description"></p>
            <ul>
                <li>
                    <a href="https://www.seleniumhq.org/">Selenium</a> - Automatické "proklikávání" stránek
                </li>
                <li>
                    <a href="https://www.cypress.io/">Cypress</a> - Automatické "proklikávání" stránek
                </li>
                <li>
                    <a href="https://sentry.io/">Sentry</a> - Trackování chyb
                </li>
                <li>
                    <a href="https://uptimerobot.com/">Uptime Robot</a> - Sledování, zda je stránka funkční
                </li>
                <li>
                    <a href="https://www.marketingminer.com/">Marketing Miner</a> - Komplexní marketingový tool
                    hlídající konkrétní stránky
                </li>
                <li>
                    <a href="https://www.cloudflare.com/">Cloudflare</a> - Služba, která vás dokáže odstínit od
                    obrovských výkyvů návštěvnosti
                </li>
                <li>
                    <a href="https://analytics.google.com/">Google Analytics</a> - Komplexní webová analytika
                </li>
                <li>
                    <a href="https://www.hotjar.com">Hotjar</a> - Nástroj na Heatmapy
                </li>
                <li>
                    <a href="https://heatmap.com/">Heatmap.com</a> - Nástroj na Heatmapy
                </li>
                <li>
                    <a href="https://www.smartlook.com/">Smartlook</a> - Nástroj na nahrávání uživatelů na stránce
                </li>
            </ul>
            <p></p>

            <a href="?id=testovani-v-praxi&amp;noBegin=1&amp;noEnd=1#p1" target="_blank">
                <button>Prezentace</button>
            </a>
        </div>
    </div>
);
