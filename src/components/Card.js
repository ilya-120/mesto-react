import React from 'react';

function Card({card, link, name, likes, onCardClick}) {

    function handleClick() {
        onCardClick(card)
    }

    return (
        <article className="elements__card">
            <button className="elements__card-delete" type="button"></button>
            <img className="elements__card-image" src={link} alt={`Фото ${name}`} onClick={handleClick} />
            <div className="elements__card-name">
                <h2 className="elements__card-title">{name}</h2>
                <div className="element__like-container">
                    <button className="elements__card-like" type="button"></button>
                    <span className="element__likes-volume">{likes}</span>
                </div>
            </div>
        </article>
    );
}

export default Card;