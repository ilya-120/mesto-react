import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.updateCardLike(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(setCards(cards.filter(c => c._id !== card._id)))
    }

    React.useEffect(() => {
        api
            .getInitialCards()
            .then((cardListRes) => {
                setCards(cardListRes)
            })
            .catch((err) => {
                console.log(`Ошибка загрузки данных: ${err}`);
            });
    }, [])
    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                <button className="profile__avatar-button"
                    onClick={onEditAvatar}>
                </button>
                <div className="profile__info">
                    <div className="profile__author">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button aria-label="Редактировать"
                            className="profile__edit-button"
                            type="button"
                            onClick={onEditProfile}>
                        </button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button"
                    onClick={onAddPlace}>
                </button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        card={card}
                        onCardClick={onCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                )
                )}
            </section>
        </main>
    );
}

export default Main;