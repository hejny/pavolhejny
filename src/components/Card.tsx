import * as React from 'react';

interface ICardProps {
    uri: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export function Card(props: ICardProps) {
    const { children, title, className } = props;
    return (
        <>
            <div className={['card', className].filter((x) => x).join(' ')}>
                {/*<h1>{title}</h1>*/}
                {children}
            </div>

            <style jsx>
                {`
                    .card {
                        background-color: #997777;
                        height: 50vh;
                    }

                    .about {
                        background: url('./static/background.jpg');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-color: #000;
                    }
                `}
            </style>
        </>
    );
}
