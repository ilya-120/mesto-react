import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';

function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState();
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getAppInfo()
            .then(([userInfoRes, cardListRes]) => {
                setUserAvatar(userInfoRes.avatar)
                setUserName(userInfoRes.name);
                setUserDescription(userInfoRes.about);
                setCards(cardListRes)
            })
            .catch((err) => {
                console.log(`Ошибка загрузки данных: ${err}`);
            });
    }, [])
    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                <button className="profile__avatar-button"
                    onClick={props.onEditAvatar}>
                </button>
                <div className="profile__info">
                    <div className="profile__author">
                        <h1 className="profile__title">{userName}</h1>
                        <button aria-label="Редактировать"
                            className="profile__edit-button"
                            type="button"
                            onClick={props.onEditProfile}>
                        </button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button"
                    onClick={props.onAddPlace}>
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
                        onCardClick={props.onCardClick}
                    />
                )
                )}
            </section>
        </main>
    );
}

export default Main;