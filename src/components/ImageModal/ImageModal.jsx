import css from './ImageModal.module.css';

import Modal from 'react-modal';

Modal.setAppElement('#root')

export default function ImageModal({image, onClose}) {
    return (
        <Modal
            isOpen={!!image}
            onRequestClose={onClose}
            overlayClassName={css.modalOverlay}
            className={css.modalContent}
            >
                {image && (
                    <div className={css.modalBody}>
                        <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage}/>
                        <p>Author: {image.user.name}</p>
                        <p>Likes: {image.likes}</p>
                    </div>
                )}
        </Modal>
    )
}