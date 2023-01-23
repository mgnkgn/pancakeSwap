import React from 'react';

export const MotionImageContainer = ({ images, className }) => {
    return (
        <div className={className}>
            {images.map((image, i) => (
                <img key={i} src={image} className={`fmg${i + 1}`} />
            ))}
        </div>
    );
};
