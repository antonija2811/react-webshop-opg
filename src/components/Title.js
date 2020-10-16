import React from 'react';

export default function Title({title}) {
    return (
        <div style={{
            borderBottom: '1px solid var(--mainGrey)',
            color: 'var(--mainDark)',
            textTransform: 'uppercase',
            fontSize: '1.2rem',
            marginBottom: '0',
            padding: '0.5rem'
        }}>
            <span><strong>{title}</strong></span>
        </div>


    );
}