import * as React from 'react';

interface IColumnProps {
    children?: React.ReactNode;
    columns?: number;
}

export function Column(props: IColumnProps) {
    let { children, columns } = props;
    columns = columns || 2;
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
