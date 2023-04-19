import aboutImg from "../assets/imgs/about.png";

export default function About(props) {
  return (
    <div className="py-12 flex justify-center items-center">
      <section className="about-us px-8 ">
        <img
          className="block rounded-xl"
          src={aboutImg}
          alt=""
          class="about-us__img"
        />
        <div class="about-us__box">
          <h3 className="font-black text-4xl mb-8">O NAS</h3>
          <p class="text-xl">
            Examie to platforma edukacyjna obejmująca głównie zagadnienia
            związane z nauką wybranego zawodu w technikum. Aplikacja umożliwia
            uczenie się podstaw języków programowania wymaganego w danej
            klasyfikacji zawodowej, jak i rozwiązywania quizów z teorii z danej
            klasyfikacji i rozwiązywania egzaminów. Każdy użytkownik ma pokazany
            status przechodzonych kursów i statystyki z quizów bądź egzaminów. W
            przyszłości powstanie Examie Arena, która będzie polegała na
            rywalizacji graczy w obrębie nauki zawodu.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
