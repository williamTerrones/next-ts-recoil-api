import React, { CSSProperties } from 'react';

const loadingStyles:CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor:'rgba(0,0,0,0.8)',
    width: '100vw',
    height: '100vh',
    color:'#fff '
}

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={loadingStyles}>
            <div className='text-center'>
                <h3>Cargando</h3>
            </div>
        </div>
    )
}

export default Loading