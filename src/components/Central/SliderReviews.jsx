import { useEffect } from "react";
import { useState } from "react";

export default function SliderReviews() {
  const texts = [
    "Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным",

    "Я уже несколько лет заказываю дизайнерскую одежду из Франции через ваш сервис, и он никогда меня не подводил. Важно иметь надежную компанию, которая позаботится о вашем заказе и предоставит все необходимые документы для ввоза в Украину",

    "Заказал шикарные часы из Швейцарии, и доставка была невероятно быстрой. Ваш сервис делает интернет-шоппинг более доступным и удобным",

    "Я заказал редкий антикварный предмет из Японии через ваш сервис, и остался впечатлен. Все пришло в отличном состоянии, и ваша гарантия качества действительно работает. Спасибо за ваше профессиональное обслуживание",

    "Ваш сервис действительно изменил мой способ покупок. Я больше не переживаю о таможенных вопросах и документах - все у вас в порядке. Спасибо за ваше качество и надежность",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //   delete
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // delete

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % texts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + texts.length) % texts.length);
  };

  //
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }
  //

  return (
    <div className="slider-reviews">
      <h4 className="slider__title">Отзывы</h4>

      <div className="slider__wrap">
        <div className="slider__img" onClick={handlePrev}>
          <img
            src="./img/vectorRight.png"
            alt="arrow"
            className="slider__img__vector"
          />
        </div>

        <div className="slider__text">
          {texts.map((text, index) => (
            <p key={index} className={index === currentIndex ? "visible" : ""}>
              {isWideScreen ? text : truncateText(text, 80)}
            </p>
          ))}
        </div>

        <div className="slider__img" onClick={handleNext}>
          <img
            src="./img/vectorLeft.png"
            alt="arrow"
            className="slider__img__vector"
          />
        </div>
      </div>
      {/*  */}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        pariatur commodi consequuntur dolorum ipsa, perferendis cum quia aliquam
        rem saepe at sunt? Rem minus ducimus odio aspernatur veritatis
        praesentium numquam. Consequatur ut autem rerum officiis iusto aliquid
        corporis aperiam. Nisi quaerat quae quisquam, repellat neque ut nulla.
        Excepturi dicta laboriosam molestias doloremque vero voluptatibus sequi
        minus, vel dolorum. Natus, vero. Itaque nemo, illo repellendus odit
        ipsam earum, perspiciatis voluptatum dolores accusantium illum iste.
        Debitis commodi ipsa laboriosam. Quasi molestiae nobis, aut temporibus,
        quidem voluptate corrupti esse optio laborum debitis ducimus. Provident
        mollitia suscipit tempore dolorum iste omnis neque eius, pariatur
        commodi ipsa voluptates fuga vitae aut quae velit itaque consectetur
        adipisci fugiat aliquam, rem doloremque laudantium? Tenetur optio at
        unde. Fuga, molestiae quam reprehenderit iste dolore expedita
        consequatur rem dolorem optio iusto. Magnam cum alias ea quas. Sed quo
        rerum tenetur. Repellat corporis laboriosam cupiditate! Ad recusandae
        aut labore perferendis!
      </p>
      {/*  */}
    </div>
  );
}
