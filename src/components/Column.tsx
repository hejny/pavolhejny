import * as React from 'react';

interface IColumnProps {
    children?: React.ReactNode;
    columns?: number;
}

export function Column(props: IColumnProps) {
    const { children, columns } = props;
    return (
        <>
            <div className="column">{children}</div>

            <style jsx>
                {`
                    .column {
                        width: ${100 / (columns || 2)};
                    }
                `}
            </style>
        </>
    );
}
