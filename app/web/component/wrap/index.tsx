import React from 'react';
import './index.less';

export function Wrap(props) {
    const { children } = props;

    return (
        <div className="wrap-container">
            {children}
        </div>
    )
}