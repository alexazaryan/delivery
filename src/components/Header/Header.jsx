export default function Header() {
  return (
    <header className="header">
      <div className="header__wrap header__wrap_bottom">
        <div className="header__container">
          <div className="header__logo">
            <img
              className="header__logo__img"
              // src="/img/vector.png"
              src="./img/vector.png"
              alt="logo"
            />
          </div>
          <h2 className="header-title__logo">fromBoard Delivery</h2>
        </div>

        <div className="header__container">
          <div className="header__menu">
            <ul className="header__menu__ul header__menu__ul_hidden">
              <li>Доставляем товары из заграницы в Украину</li>
              <li>Стоимость от 550 гривен за заказ</li>
              <li>1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</li>
            </ul>
            <div className="trait trait_hidden"></div>
            <ul className="header__menu__ul">
              <li className="header__mobile">+3 (800) 123 45-67</li>
              <li className="header__city header__city_hidden">
                Звонки по Украине бесплатны
              </li>
            </ul>
          </div>
          <div className="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="header__nav header__wrap">
        <ul className="header__nav__ul">
          <li className="nav-item nav-item_calc">Калькулятор</li>
          <li className="nav-item">О нас</li>
          <li className="nav-item">Гарантии</li>
          <li className="nav-item">Отзывы</li>
        </ul>
        <button className="btn">Оставить заявку</button>
      </div>
    </header>
  );
}
