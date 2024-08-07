export default function Central() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    alert("Форма отправлена!");
  };

  return (
    <div className="central">
      <div className="central__wrap">
        <div className="central__text">
          <h2 className="central__title">
            Без проблемная доставка купленных вещей из США, Европы и Азии
            в Украины
          </h2>
          <p className="central__paragraph">
            Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш
            сервис позволяет вам легко и удобно заказывать товары со всего мира
            и получать их в Украину. Быстрая доставка, выгодные цены и широкий
            ассортимент товаров делают шопинг еще приятнее. Присоединяйтесь к
            нам и откройте для себя новый мир покупок!
          </p>
        </div>
        <div className="central-img">
          <img
            className="central-img__rectangle"
            src="./img/rectangle.png"
            alt="photo"
          />
        </div>
      </div>

      <div className="central__form">
        <div className="central__form__text">
          <h3 className="central__form__title">Калькулятор доставки</h3>

          <p className="central__form__paragraph">
            Посчитайте, сколько будет стоить перевозка покупки из зарубежа
          </p>
        </div>

        {/*  form start*/}
        <form className="central__form__group" onSubmit={handleSubmit}>
          <div className="form__name_wrap">
            <input type="text" className="form__name form" placeholder="Имя" />
          </div>
          <input type="text" className="form" placeholder="Почта" />
          <input type="text" className="form" placeholder="Телефон" />
          <input type="text" className="form" placeholder="Общая площадь, м²" />
          <input type="text" className="form" placeholder="Вес, кг" />
          <input type="text" className="form" placeholder="Страна покупки" />
          <input type="text" className="form" placeholder="Город покупки" />
          <input type="text" className="form" placeholder="Область доставки" />
          <input type="text" className="form" placeholder="Город доставки" />
          <button type="submit" className="btn btn_form">
            Заказать расчёт
          </button>
        </form>
        {/* <form/> */}
      </div>
    </div>
  );
}
