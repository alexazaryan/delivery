export default function Diplomas() {
  return (
    <div className="diplomas__box">
      <h3 className="diplomas__title">Гарантии качества</h3>

      <p className="diplomas__text">
        Наши гарантии качества включают в себя полный спектр документов,
        необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на
        мировом рынке. Мы предоставляем вам надёжность и уверенность
      </p>

      <div className="diplomas__box__group">
        {/* 1 */}
        <div className="diplomas__box__wrap">
          <div className="diplomas__img">
            <img
              className="diplomas__img__picture"
              src="./img/rectangle_3.png"
              alt="picture"
            />
          </div>
          <h4>Свидетельство о регистрации в ES</h4>
        </div>

        {/* 2 */}
        <div className="diplomas__box__wrap">
          <div className="diplomas__img">
            <img
              className="diplomas__img__picture"
              src="./img/rectangle_1.png"
              alt="picture"
            />
          </div>
          <h4>Свидетельство о регистрации в США</h4>
        </div>

        {/* 3 */}
        <div className="diplomas__box__wrap">
          <div className="diplomas__img">
            <img
              className="diplomas__img__picture"
              src="./img/rectangle_2.png"
              alt="picture"
            />
          </div>
          <h4>Свидетельство о регистрации в Китае</h4>
        </div>

        {/* 4 */}
        <div className="diplomas__box__wrap">
          <div className="diplomas__img">
            <img
              className="diplomas__img__picture"
              src="./img/rectangle_4.png"
              alt="picture"
            />
          </div>
          <h4>Свидетельство о регистрации в Великобритнии</h4>
        </div>
      </div>
      <button className="btn btn_modifier">Показать больше документов</button>
    </div>
  );
}
