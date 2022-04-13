import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <article className="elements__card">
            <button className="elements__card-delete" type="button"></button>
            <img className="elements__card-image" src={props.link} alt={`Фото ${props.name}`} onClick={handleClick} />
            <div className="elements__card-name">
                <h2 className="elements__card-title">{props.name}</h2>
                <div className="element__like-container">
                    <button className="elements__card-like" type="button"></button>
                    <span className="element__likes-volume">{props.likes}</span>
                </div>
            </div>
        </article>
    );
}

export default Card;