import React from 'react';

export default function Title({title}) {
    return (
        <div style={{
            backgroundColor: 'var(--lightGreen)'
        }}>
            <h2 className="text-title"><strong>{title}</strong></h2>
        </div>


    );
}