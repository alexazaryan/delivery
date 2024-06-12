export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer__wrap_left">
          <div className="footer__box__img">
            <img src="./img/vector.png" className="footer__img" lt="logo" />
          </div>

          <p>FromBoard Delivery</p>
        </div>

        <div className="footer__wrap_right">
          <ul className="footer-box__ul">
            <li className="footer__tel">+3 (800) 123 45-67</li>
            <li>Звонки по Украине бесплатны</li>
          </ul>
        </div>

        <p className="footer__text__p">
          НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что
          цены носят информационный и ознакомительный характер, а значит ни в
          какой мере не являются публичной офертой, которая определена. Вся
          информация на сайте может содержать неточности, орфографические и иные
          ошибки, она не является полной, окончательно и исчерпывающей
        </p>
      </div>
    </div>
  );
}
