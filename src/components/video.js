import React from 'react';

export default ({ src }) => {
    return (
        <video
            autoPlay
            muted
            loop
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: '100%',
                width: '100%',
                zIndex: '-1',
                contain: 'cover',
                objectFit: 'fill',
                objectPosition: 'center'
            }}
            src={src}
        >
            <source src={src} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
        </video>
    )
}