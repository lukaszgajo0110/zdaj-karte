const qNumer = document.querySelector(".numer"),
  qText = document.querySelector(".polecenie"),
  optKontener = document.querySelector(".odpowiedzi"),
  quizNaglowek = document.querySelector(".quiz-naglowek"),
  quizGra = document.querySelector(".quiz-gra"),
  quizWynik = document.querySelector(".wynik");

let licznikPoprawnych = 0;
let aktualnePytanie;
let dostepnePytania = [];
let dostepneOdpowiedzi = [];
let poprawneOdpowiedzi = 0;
let probyOdpowiedzi = 0;

//Do tablicy dostepnych pytań wrzucamy pytania z pliku, które rzeczywiście są dostępne
function setDostepnePytania() {
  const liczbaPytan = quiz.length;
  for (let i = 0; i < liczbaPytan; i++) {
    dostepnePytania.push(quiz[i]);
  }
}

//Tutaj generowane jest całe pytanie czyli numer, polecenie i opcje do wyboru
function getNowePytanie() {
  qNumer.innerHTML = "Pytanie " + (licznikPoprawnych + 1) + " z " + 15; //Wyświetlanie aktualnego numeru pytania

  //Wylosowanie randomowego pytania i przypisanie mu numeru
  const qIndex =
    dostepnePytania[Math.floor(Math.random() * dostepnePytania.length)];
  aktualnePytanie = qIndex;
  qText.innerHTML = aktualnePytanie.q;

  //Zapisanie indeksu wylosowanego pytania i usunięcie go z pola dostępnych pytań
  const index1 = dostepnePytania.indexOf(qIndex);
  dostepnePytania.splice(index1, 1);

  //Jezeli pytanie ma zdjecie to je wyswietlamy
  if (aktualnePytanie.hasOwnProperty("img")) {
    const img = document.createElement("img");
    img.src = aktualnePytanie.img;
    qText.appendChild(img);
  }

  //Dodanie opcji odpowiedzi i sprawdzenie ich długości
  const opcjaDlugosc = aktualnePytanie.options.length;
  for (let i = 0; i < opcjaDlugosc; i++) {
    dostepneOdpowiedzi.push(i);
  }
  optKontener.innerHTML = "";
  let opoznienieAnimacji = 0.15;
  //Tutaj konkretnie utworzenie opcji
  for (let i = 0; i < opcjaDlugosc; i++) {
    const optIndex =
      dostepneOdpowiedzi[Math.floor(Math.random() * dostepneOdpowiedzi.length)]; //randomowa kolejność opcji
    const index2 = dostepneOdpowiedzi.indexOf(optIndex);
    dostepneOdpowiedzi.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = aktualnePytanie.options[optIndex];
    option.id = optIndex;
    option.style.opoznienieAnimacji = opoznienieAnimacji + "s";
    opoznienieAnimacji = opoznienieAnimacji + 0.15;
    option.className = "option";
    optKontener.appendChild(option);
    option.setAttribute("onclick", "getWynik(this)");
  }
  licznikPoprawnych++;
}

//Obługa kliknięć czyli czerwono lub zielono
function getWynik(elememt) {
  const id = parseInt(elememt.id);
  // get the answer by compating the id of clickes option
  if (id === aktualnePytanie.answer) {
    elememt.classList.add("poprawna"); //zielony kolor na poprawną
    poprawneOdpowiedzi++;
  } else {
    elememt.classList.add("bledna"); //czerwony kolor na błędną

    //Wyświetlanie na zielono poprawnej odpowiedzi gdy zaznaczyliśmy źle
    const opcjaDlugosc = optKontener.children.length;
    for (let i = 0; i < opcjaDlugosc; i++) {
      if (parseInt(optKontener.children[i].id) === aktualnePytanie.answer) {
        optKontener.children[i].classList.add("poprawna");
      }
    }
  }
  probyOdpowiedzi++;
  //Blokowanie klikania dalej po odpowiedzi na pytanie
  const opcjaDlugosc = optKontener.children.length;
  for (let i = 0; i < opcjaDlugosc; i++) {
    optKontener.children[i].classList.add("odpowiedziane");
  }
}

//Funckja dalej sprawdza czy nie jesteśmy na końcu i jeśli jesteśmy to kończy quiz a jeśli nie to tworzy nowe pytanie
function dalej() {
  if (licznikPoprawnych === 15) {
    quizGra.classList.add("hide"); //ukrywamy okno gry
    quizWynik.classList.remove("hide");

    //dane w oknie z wynikami
    quizWynik.querySelector(".odp-poprawne").innerHTML = poprawneOdpowiedzi;
    quizWynik.querySelector(".odp-bledne").innerHTML =
      probyOdpowiedzi - poprawneOdpowiedzi;
    const percentage = (poprawneOdpowiedzi / 15) * 100;
    quizWynik.querySelector(".odp-proc").innerHTML =
      percentage.toFixed(2) + "%";
    quizWynik.querySelector(".odp-wynik").innerHTML =
      poprawneOdpowiedzi + " / " + 15;
  } else {
    getNowePytanie();
  }
}

function resetQuiz() {
  licznikPoprawnych = 0;
  poprawneOdpowiedzi = 0;
  probyOdpowiedzi = 0;
  dostepnePytania = [];
}

function jeszczeRaz() {
  quizWynik.classList.add("hide"); //ukryj wynik
  quizGra.classList.remove("hide"); //usun "ukrycie" z okna gry
  resetQuiz();
  startQuizu();
}

function powrot() {
  quizWynik.classList.add("hide");
  quizNaglowek.classList.remove("hide");
  resetQuiz();
}

function startQuizu() {
  quizNaglowek.classList.add("hide");
  quizGra.classList.remove("hide");
  setDostepnePytania();
  getNowePytanie();
}
