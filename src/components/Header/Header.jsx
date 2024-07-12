import { useState } from "react";
// import Calculator from "../Calculator/Calculator";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Calc start
  // const [calculatorOpen, setCalculatorOpen] = useState(false);

  // const openCalculator = () => {
  //   setCalculatorOpen(true);
  // };

  // const closeCalculator = () => {
  //   setCalculatorOpen(false);
  // };
  // Calc end

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

        <div className="header__oll__blok" id="burger">
          <div className="header__price">
            <ul className="header__list">
              <li>Доставляем товары из заграницы в Украину</li>
              <li>Стоимость от 550 гривен за заказ</li>
              <li>1 $ = 93 ₴ | 1 € = 99 ₴ | 1 ¥ = 13 ₴</li>
            </ul>

            <div className="trait trait_hidden"></div>

            <ul className="header__connection">
              <li className="header__mobile">+3 (800) 123 45-67</li>
              <li className="header__city">Звонки по Украине бесплатны</li>
            </ul>
          </div>
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

      {/*  */}
      <div className="header__blok">
        <div className="header__blok__nav">
          <ul className="header__nav__ul">
            <li className="nav-item nav-item_calc">
              Калькулятор
              {/* <li className="nav-item nav-item_calc" onClick={openCalculator}> */}
              {/* {calculatorOpen && <Calculator onClose={closeCalculator} />} */}
            </li>
            <li className="nav-item">О нас</li>
            <li className="nav-item nav-item_guarantee">Гарантии</li>
            <li className="nav-item">Отзывы</li>
          </ul>
        </div>
        <button className="btn">Оставить заявку</button>
      </div>
      {/*  */}

      {isVisible && (
        <div className="header__content">
          <div className="header__nav">
            <ul className="header__nav__ul">
              <li className="nav-item nav-item_calc">Калькулятор</li>
            </ul>
            <button className="btn">Оставить заявку</button>
          </div>

          <div className="header__price"></div>
        </div>
      )}
    </header>
  );
}
