export default function BoxService() {
  return (
    <div className="box-service">
      {/* 1 */}
      <h3 className="box-service__title">Наши преимущества</h3>
      <div className="box-service__wrap">
        <div className="box-service__group">
          <div className="box-service__img">
            <img className="img__picture" src="./img/board.png" alt="picture" />
          </div>

          <ul className="box-service__list">
            <li>
              <h4 className="box-service__group__title">Растоможка груза</h4>
            </li>
            <li>
              Мы берём на себя все формальности и бумажную волокиту, связанную с
              растаможкой груза
            </li>
          </ul>
        </div>
      </div>

      {/* 2 */}
      <div className="box-service__wrap">
        <div className="box-service__group">
          <div className="box-service__img">
            <img
              className="img__picture"
              src="./img/package.png"
              alt="picture"
            />
          </div>

          <ul className="box-service__list">
            <li>
              <h4 className="box-service__group__title">Надёжная упаковка</h4>
            </li>
            <li>
              Все товары упаковываются нашими специалистами с особым вниманием
              к деталям, гарантируя, что они дойдут в безопасности и в отличном
              состоянии
            </li>
          </ul>
        </div>
      </div>

      {/* 3 */}
      <div className="box-service__wrap">
        <div className="box-service__group">
          <div className="box-service__img">
            <img
              className="img__picture"
              src="./img/delivery.png"
              alt="picture"
            />
          </div>

          <ul className="box-service__list">
            <li>
              <h4 className="box-service__group__title">Быстро и выгодно</h4>
            </li>
            <li>
              Мы предлагаем быструю и выгодную доставку, чтобы вы могли
              насладиться покупками как можно скорее.
            </li>
          </ul>
        </div>
      </div>

      {/* 4 */}
      <div className="box-service__wrap">
        <div className="box-service__group">
          <div className="box-service__img">
            <img className="img__picture" src="./img/group.png" alt="picture" />
          </div>

          <ul className="box-service__list">
            <li>
              <h4 className="box-service__group__title">Удобный сервис</h4>
            </li>
            <li>
              Стремимся сделать процесс доставки максимально удобным для вас,
              чтобы опыт остался приятным и беззаботным
            </li>
          </ul>
        </div>
      </div>

      {/* 5 */}
      <div className="box-service__wrap">
        <div className="box-service__group">
          <div className="box-service__img">
            <img className="img__picture" src="./img/clear.png" alt="picture" />
          </div>

          <ul className="box-service__list">
            <li>
              <h4 className="box-service__group__title">Прозрачность работы</h4>
            </li>
            <li>
              Мы предоставляем полный контроль над каждым этапом доставки, от
              момента заказа до момента прибытия заказа
            </li>
          </ul>
        </div>
      </div>

      {/* 6 */}
      <div className="box-service__wrap">
        <div className="box-service__group">
          <div className="box-service__img">
            <img
              className="img__picture"
              src="./img/garantee.png"
              alt="picture"
            />
          </div>

          <ul className="box-service__list">
            <li>
              <h4 className="box-service__group__title">Страхование груза</h4>
            </li>
            <li>
              Наше страхование обеспечивает полную защиту и покрытие почти все
              неприятные и неожиданные ситуации
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
