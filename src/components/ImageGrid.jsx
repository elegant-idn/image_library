import React, { useState } from 'react';
import './app.css';

const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png',
    'images/7.png',
    'images/8.png',
    'images/9.png',
    'images/10.png',
    'images/11.png',
    'images/12.png',
    'images/13.png',
    'images/14.png',
    'images/15.png'
];

const ImageGrid = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const toggleImage = (index) => {
        if (selectedImages.includes(index)) {
            setSelectedImages(selectedImages.filter((selected) => selected !== index));
        } else {
            setSelectedImages([...selectedImages, index]);
        }
    }

    return (
        <div className='image-container'>
            <div className='image-grid'>
                {images.map((imageUrl, index) => (
                    <div key={index} className={`image-item ${selectedImages.includes(index) ? 'image-selected' : ''}`} onClick={() => {
                        toggleImage(index);
                    }}>
                        <img src={imageUrl} alt={`item ${index}`} className='grid-image' />
                        <div className="bracket-container">
                            <div className="bracket top-left"></div>
                            <div className="bracket top-right"></div>
                            <div className="bracket bottom-left"></div>
                            <div className="bracket bottom-right"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid;