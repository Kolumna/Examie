// export const egzaminyZawodowe = [
//   {
//     nrKwalifikacji: "02",
//     kwalifikacje: { name: ["INFORMATYK"] },
//     color: "bg-zinc-400",
//     border: "border-zinc-500",
//     active: false,
//   },
//   {
//     nrKwalifikacji: "03",
//     kwalifikacje: { name: ["INFORMATYK", "PROGRAMISTA"] },
//     color: "bg-slate-400",
//     border: "border-slate-500",
//     active: true,
//   },
//   {
//     nrKwalifikacji: "04",
//     kwalifikacje: { name: ["PROGRAMISTA"] },
//     color: "bg-gray-400",
//     border: "border-gray-500",
//     active: false,
//   },
//   {
//     nrKwalifikacji: "05",
//     kwalifikacje: { name: ["TEST"] },
//     color: "bg-green-400",
//     border: "border-green-500",
//     active: false,
//   },
// ];

export const kursy = [
  {
    id: 0,
    name: "HTML&CSS",
    modules: [
      {
        id: 0,
        nazwa: "Wprowadzenie do HTML",
        content: [
          {
            type: "title",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
            value: "Wprowadzenie do HTML",
          },
          {
            type: "text",
            value:
              "W tym kursie dowiesz się jak działa HTML, jakie są jego podstawowe cechy i jakie są jego zastosowania.",
          },
          {
            type: "list",
            label: "Kurs obejmuje następujące tematy:",
            value: ["Znaczniki", "Atrybuty", "Formularze", "Projekt"],
          },
          {
            type: "code",
            language: "css",
            value: "<h1>Lubię placki</h1>",
          },
          {
            type: "title",
            value: "Czym jest HTML?",
          },
          {
            type: "text",
            value: "HTML to skrót od HyperText Markup Language.",
          },
        ],
      },
      {
        id: 1,
        nazwa: "Znaczniki",
        content: [
          {
            type: "title",
            value: "Znaczniki",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 2,
        nazwa: "Atrybuty",
        content: [
          {
            type: "title",
            value: "Atrybuty",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 3,
        nazwa: "Formularze",
        content: [
          {
            type: "title",
            value: "Formularze",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 4,
        nazwa: "Wprowadzenie do CSS",
        content: [
          {
            type: "title",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
            value: "Wprowadzenie do CSS",
          },
          {
            type: "text",
            value:
              "W tym kursie dowiesz się jak działa CSS, jakie są jego podstawowe cechy i jakie są jego zastosowania.",
          },
          {
            type: "list",
            label: "Kurs obejmuje następujące tematy:",
            value: ["Selektory", "Właściwości", "Projekt"],
          },
          {
            type: "code",
            language: "css",
            value: "h1 { color: red; }",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "JavaScript",
    modules: [
      {
        id: 0,
        nazwa: "Wprowadzenie do JavaScript",
        paragraphs: [
          {
            id: 0,
            type: "title",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            value: "Wprowadzenie do JavaScript",
          },
          {
            id: 1,
            type: "text",
            value:
              "W tym kursie dowiesz się jak działa JavaScript, jakie są jego podstawowe cechy i jakie są jego zastosowania.",
          },
          {
            id: 2,
            type: "important",
            value:
              "Polecam ukończyć najpierw kurs HTML i CSS, aby móc lepiej zrozumieć podstawy JavaScript.",
          },
          {
            id: 3,
            type: "list",
            label: "Kurs obejmuje następujące tematy:",
            value: [
              "Zmienne",
              "Typy danych",
              "Operatory",
              "Funkcje",
              "Obiekty",
              "Tablice",
              "Pętle",
              "Warunki",
              "Zdarzenia",
              "Formularze",
              "Biblioteki",
              "Frameworki",
              "Projekt",
            ],
          },
          {
            id: 4,
            type: "code",
            language: "javascript",
            value: 'const name = "Bambo łobuzie";\nconsole.log(name);',
          },
          {
            id: 5,
            type: "title",
            value: "Czym jest JavaScript?",
          },
          {
            id: 6,
            type: "text",
            value:
              "JavaScript jest językiem programowania, który pozwala na tworzenie interaktywnych stron internetowych. Jest to język skryptowy, który jest interpretowany przez przeglądarkę. Jest to język wysokiego poziomu, który jest łatwy do nauki i stosowania.",
          },
          {
            id: 7,
            type: "important",
            value:
              "JavaScript jest jednym z najpopularniejszych języków programowania na świecie. Jest to język, który jest używany do tworzenia aplikacji webowych, aplikacji mobilnych, aplikacji desktopowych, gier, a nawet aplikacji do robotyki.",
          },
          {
            id: 8,
            type: "title",
            value: "Historia JavaScript",
          },
          {
            id: 9,
            type: "text",
            value:
              "JavaScript został stworzony w 1995 roku przez Brendana Eicha. Pierwsza wersja języka nosiła nazwę Mocha, a następnie LiveScript. W 1996 roku nazwa została zmieniona na JavaScript. W 1997 roku JavaScript został wprowadzony do przeglądarek Netscape Navigator 2.0.",
          },
        ],
      },
      {
        id: 1,
        nazwa: "Zmienne",
        content: [
          {
            type: "title",
            value: "Zmienne",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 2,
        nazwa: "Typy danych",
        content: [
          {
            type: "title",
            value: "Typy danych",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 3,
        nazwa: "Operatory",
        content: [
          {
            type: "title",
            value: "Operatory",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 4,
        nazwa: "Funkcje",
        content: [
          {
            type: "title",
            value: "Funkcje",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 5,
        nazwa: "Obiekty",
        content: [
          {
            type: "title",
            value: "Obiekty",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 6,
        nazwa: "Tablice",
        content: [
          {
            type: "title",
            value: "Tablice",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 7,
        nazwa: "Pętle",
        content: [
          {
            type: "title",
            value: "Pętle",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
      {
        id: 8,
        nazwa: "Warunki",
        content: [
          {
            type: "title",
            value: "Warunki",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni, harum id deleniti assumenda minus, quaerat at laborum illo unde ratione dicta pariatur, veritatis itaque molestiae delectus doloremque tenetur! Iure!",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "PHP",
    modules: [
      {
        id: 0,
        nazwa: "Wprowadzenie do PHP",
        content: [
          {
            type: "title",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
            value: "Wprowadzenie do PHP",
          },
          {
            type: "text",
            value:
              "W tym kursie dowiesz się jak działa PHP, jakie są jego podstawowe cechy i jakie są jego zastosowania.",
          },
          {
            type: "list",
            label: "Kurs obejmuje następujące tematy:",
            value: ["Zmienne", "Tablice", "Pętle", "Warunki", "Projekt"],
          },
          {
            type: "code",
            language: "php",
            value: '<?php echo="Siemano!" ?>',
          },
        ],
      },
    ],
  },
];
