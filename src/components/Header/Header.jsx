import { useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__container">
          <div className="header__logo">
            <img
              className="header__logo__img"
              src="./img/vector.png"
              alt="logo"
            />
          </div>
          <h2 className="header-title__logo">fromBoard Delivery</h2>
        </div>

        <nav>
          <a
            href="#"
            className="menu-toggle"
            id="burger"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <div className="close">x</div>
            ) : (
              <div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            )}
          </a>
        </nav>
      </div>

      {isVisible && (
        <div>
          <div className="header__nav">
            <ul className="header__nav__ul">
              <li className="nav-item nav-item_calc">Калькулятор</li>
              {/* <li className="nav-item">О нас</li> */}
              {/* <li className="nav-item">Гарантии</li> */}
              {/* <li className="nav-item">Отзывы</li> */}
            </ul>
            <button className="btn">Оставить заявку</button>
          </div>

          <div className="header__price">
            {/* <ul className="header__list">
            <li>Доставляем товары из заграницы в Украину</li>
            <li>Стоимость от 550 гривен за заказ</li>
            <li>1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</li>
          </ul> */}

            {/* <div className="trait trait_hidden"></div> */}

            {/* <ul className="header__connection">
            <li className="header__mobile">+3 (800) 123 45-67</li>
            <li className="header__city">Звонки по Украине бесплатны</li>
          </ul> */}
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
    </header>
  );
}
