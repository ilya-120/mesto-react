function PopupWithForm(props) {
    return (
      <div className={`popup ${props.isOpen && 'popup_opened'}`} id={`popup-${props.name}`}>
        <div className="popup__container">
          <button
            className="popup__container-close-button"
            type="button"
            onClick={props.onClose}
          />
          <h2 className="popup__container-title">{props.title}</h2>
          <form name={props.name} className={`popup__container-form popup__${props.name}`} noValidate>
            {props.children}
            <button type="submit" className="popup__container-submit-button" value="Да">{props.buttonTitle}</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default PopupWithForm