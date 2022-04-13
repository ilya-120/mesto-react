import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard(null)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-card"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_type_title"
          id="input-names"
          type="text"
          name="name"
          required
          minlength="2"
          maxlength="40"
          placeholder="Имя">
        </input>
        <span
          class="popup__error input-names-error">
        </span>
        <input
          class="popup__input popup__input_type_subtitle"
          id="input-about"
          type="text"
          name="about"
          required
          minlength="2"
          maxlength="200"
          placeholder="О себе">
        </input>
        <span
          class="popup__error input-about-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          class="popup__input popup__input_type_name"
          id="input-name"
          required
          minlength="2"
          maxlength="40"
          type="text"
          name="name"
          placeholder="Название">
        </input>
        <span
          class="popup__error input-name-error">
        </span>
        <input
          class="popup__input popup__input_type_link"
          id="input-link"
          required
          type="url"
          name="link"
          placeholder="Ссылка на картинку">
        </input>
        <span
          class="popup__error input-link-error">
        </span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          class="popup__input popup__input_type_link"
          id="input-avatarLink"
          required
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар">
        </input>
        <span
          class="popup__error input-avatarLink-error">
        </span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
