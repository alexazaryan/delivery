export default function FormQuestion() {
  const handleSubmit = (event) => {
    event.preventDefault();

    event.target.reset();

    alert("Форма отправлена");
  };

  return (
    <div className="form-question">
      <h2 className="form-question__title">Остались вопросы?</h2>

      <form className="form-question__container" onSubmit={handleSubmit}>
        <div className="form-question__group">
          <input
            type="text"
            className="form-question__input"
            placeholder="Имя"
          />
          <input
            type="email"
            className="form-question__input"
            placeholder="Почта"
          />
        </div>
        <div className="form-question__group">
          <input
            type="text"
            className="form-question__input"
            placeholder="Телефон"
          />
          <input
            type="text"
            className="form-question__input"
            placeholder="Тема вопроса"
          />
        </div>
        <div className="form-question__group">
          <textarea
            className="form-question__textarea"
            placeholder="Сообщение..."
          ></textarea>
        </div>

        <button className="btn btn_form">Оставить заявку</button>
      </form>
    </div>
  );
}
