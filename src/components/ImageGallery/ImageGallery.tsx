import css from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard.js';

import { Image } from '../types';

interface ImageGalleryProps {
    images: Image[];
    onImageClick: (image: Image) => void;
}

export default function ImageGallery({images, onImageClick}: ImageGalleryProps) {
    return (
        <ul className={css.gallery}>
            {images.map(image => (
                <li key={image.id} className={css.galleryItem}>
                    <ImageCard image={image} onClick={() => onImageClick(image)} />
                </li>
            ))}
        </ul>
    );
}