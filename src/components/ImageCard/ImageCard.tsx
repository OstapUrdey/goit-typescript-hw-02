import css from './ImageCard.module.css';
import { Image } from '../types';

interface ImageCardProps {
    image: Image;
    onClick: () => void;
}

export default function ImageCard({image, onClick}: ImageCardProps) {
    return (
        <div onClick={onClick} className={css.card}>
            <img src={image.urls.small} alt={image.alt_description} className={css.cardImage}/>
        </div>
    );
}