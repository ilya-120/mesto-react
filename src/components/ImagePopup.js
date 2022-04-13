import React from 'react';

function ImagePopup(props) {
    return (
        <div class={`popup popup_image ${props.card ? 'popup_opened' : ''}`}
            id="popup-image">
            <div class="popup__container-image">
                <button class="popup__container-close-button" type="button"
                    onClick={props.onClose}>
                </button>
                <img class="popup__card-image"
                    src={props.card ? props.card.link : ''}
                    alt={props.card ? props.card.name : ''}
                />
                <p class="popup__card-title">{props.card ? props.card.name : ''}</p>
            </div>
        </div>
    );
}

export default ImagePopup;