import * as React from 'react';
import { Talk } from '../model/Talk';

type ITalkComponentProps = {
    talk: Talk;
};

export function TalkComponent(props: ITalkComponentProps) {
    const {
        talk: { id, description },
    } = props;
    return (
        <div className="talk">
            <div className="thumbnail empty"></div>

            <div className="info">
                <h1 className="name">Testování v praxi {id}</h1>
                <h2>
                    <span>2019</span> | <span>Digisemestr</span>
                </h2>

                <p className="description">{description}</p>

                <a href="?id=testovani-v-praxi&amp;noBegin=1&amp;noEnd=1#p1" target="_blank">
                    <button>Prezentace</button>
                </a>
            </div>
        </div>
    );
}
