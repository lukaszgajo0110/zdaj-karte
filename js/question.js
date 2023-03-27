//  Array of Objects
const quiz = [
{
	q: "Jaki jest numer na pogotowie ?",
	options: ["997", "998", "999"],
	answer: 2,
  },
{
	q: "Jaki jest numer alarmowy ?",
	options: ["111", "112", "123", "121"],
	answer: 1,
  },
{
	q: "Kartę rowerową wydaje nieodpłatnie, za pisemną zgodą rodzica lub opiekuna",
	options: ["dyrektor szkoły", "burmistrz", "senator", "radny"],
	answer: 0,
  },

{
	q: "Czego nie można robić podczas jazdy rowerem",
	options: ["doczepiać się (trzymać się) innych pojazdów", "wyprzedzać innych uczestników ruchu", "zawracać w miejscach do tego przeznaczonych"],
	answer: 0,
  },
{
	q: "Jednym z wymogów do zdobycia karty rowerowej jest",
	options: ["ukończenie dziesiątego roku życia", "ukończenie dziewiątego roku życia", "ukończenie ósmego roku życia"],
	answer: 0,
  },
{
	q: "W zorganizowanej kolumnie może jechać maksymalnie",
	options: ["20 rowerów", "10 rowerów", "15 rowerów"],
	answer: 2,
  },
{
	q: "Maksymalna odległość między rowerami poruszającymi się w kolumnie rowerów jednośladowych wynosi",
	options: ["3 metry", "5 metrów", "8 metrów"],
	answer: 1,
  },
{
	q: "Odstępy między kolumnami rowerzystów powinny wynosić",
	options: ["200 metrów", "100 metrów", "50 metrów"],
	answer: 0,
  },
{
	q: "Nie wymaga się uprawnienia do kierowania rowerem od osoby, która ukończyła",
	options: ["13 lat", "16 lat", "18 lat"],
	answer: 2,
  },
{
	q: "Kiedy piesi mogą przekraczać jezdnię poza przejściami dla pieszych?",
	options: ["nigdy", "gdy odległość od przejścia jest większa niż 100 metrów", "tylko poza obszarem zabudowanym"],
	answer: 1,
  },
{
	q: "Kierujący rowerem powinien w kolejności stosować się do",
	options: ["sygnalizacji świetlnej, poleceń policjanta kierującego ruchem, znaków drogowych", "poleceń policjanta kierującego ruchem, sygnalizacji świetlnej, znaków drogowych", "poleceń policjanta kierującego ruchem, znaków drogowych, sygnalizacji świetlnej"],
	answer: 1,
  },
{
	q: "Dziecko w wieku 6 lat może być przewożone rowerem",
	options: ["tylko na dodatkowym siodełku", "na kierownicy, przodem do kierunku jazdy", "na kierownicy, tyłem do kierunku jazdy", "nie może być przewożone"],
	answer: 0,
  },
{
	q: "Do kierowania rowerem po drodze publicznej osobę w wieku 12 lat uprawnia",
	options: ["zgoda wychowawcy podczas wycieczki klasowej", "pisemna zgoda rodziców", "tylko karta rowerowa"],
	answer: 2,
  },
{
	q: "W skład obowiązkowego wyposażenia roweru wchodzi",
	options: ["komplet kluczy", "pompka", "koszyk z przodu pojazdu","dzwonek lub inny sygnał dźwiękowy"],
	answer: 3,
  },
{
	q: "Jaki jest numer na policję ?",
	options: ["997", "998", "999"],
	answer: 0,
  },

{
	q: "Jaki jest numer na straż pożarną ?",
	options: ["997", "998", "999"],
	answer: 1,
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Ustąp pierwszeństwa", "Skrzyżowanie równorzędne", "Zakaz wjazdu", "STOP"],
	answer: 2,
	img: "src/znaki/B2.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Ustąp pierwszeństwa", "Skrzyżowanie równorzędne", "Zakaz wjazdu", "STOP"],
	answer: 3,
	img: "src/znaki/B20.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Nakaz jazdy w prawo za znakiem", "Skrzyżowanie równorzędne", "Droga jednokierunkowa", "Koniec drogi z pierwszeństwem"],
	answer: 0,
	img: "src/znaki/C2.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Przejście dla pieszych", "STOP", "Strefa zamieszkania", "Obszar zabudowany"],
	answer: 0,
	img: "src/znaki/D6.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Przejście dla pieszych", "STOP", "Strefa zamieszkania", "Obszar zabudowany"],
	answer: 3,
	img: "src/znaki/D42.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Przejście dla pieszych", "STOP", "Strefa zamieszkania", "Obszar zabudowany"],
	answer: 2,
	img: "src/znaki/D40.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Nakaz jazdy w prawo za znakiem", "Ruch okrężny", "Ustąp pierwszeństwa", "Obszar zabudowany"],
	answer: 1,
	img: "src/znaki/C12.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Ustąp pierwszeństwa", "Ustąp pierwszeństwa rowerzyście", "Droga rowerowa", "Zakaz wjazdu rowerów"],
	answer: 3,
	img: "src/znaki/B9.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Przejazd dla rowerzystów", "Przejście dla pieszych", "Strefa zamieszkania", "Obszar zabudowany"],
	answer: 0,
	img: "src/znaki/D6-a.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Ustąp pierwszeństwa", "Skrzyżowanie równorzędne", "Przejazd kolejowo-drogowy z zaporami", "Koniec drogi z pierwszeństwem"],
	answer: 1,
	img: "src/znaki/A-5.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Ustąp pierwszeństwa", "Niebezpieczny zakręt", "Droga z pierwszeństwem", "Koniec drogi z pierwszeństwem"],
	answer: 0,
	img: "src/znaki/A-7.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Ustąp pierwszeństwa", "Niebezpieczny zakręt", "Droga z pierwszeństwem", "Koniec drogi z pierwszeństwem"],
	answer: 2,
	img: "src/znaki/D1.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Ustąp pierwszeństwa", "Koniec drogi z pierwszeństwem", "Droga z pierszeństwem","Przejazd kolejowo-drogowy z zaporami"],
	answer: 1,
	img: "src/znaki/D2.svg",
  },
{
	q: "Co przedstawia ten znak?",
	options: ["Droga jednokierunkowa", "Nakaz jazdy prosto", "Koniec drogi z pierwszeństwem", "Droga z pierwszeństwem"],
	answer: 0,
	img: "src/znaki/D-3.svg",
  },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["ABC", "CBA", "ACB", "CAB"],
    answer: 2,
    img: "src/skrzyżowania/quiz-1.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["ABC", "BAC", "ACB", "CBA"],
    answer: 3,
    img: "src/skrzyżowania/quiz-2.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["CBA", "CAB", "BAC", "BCA"],
    answer: 0,
    img: "src/skrzyżowania/quiz-3.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["BAC", "ACB", "ABC", "CAB"],
    answer: 1,
    img: "src/skrzyżowania/quiz-4.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["ABDC", "DABC", "DACB", "DCAB"],
    answer: 1,
    img: "src/skrzyżowania/quiz-5.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["DACB", "ABDC", "DABC", "ABCD"],
    answer: 3,
    img: "src/skrzyżowania/quiz-6.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["DACB", "ABCD", "ACBD", "CABD"],
    answer: 1,
    img: "src/skrzyżowania/quiz-7.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["AB", "BA"],
    answer: 1,
    img: "src/skrzyżowania/quiz-8.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["AB", "BA"],
    answer: 1,
    img: "src/skrzyżowania/quiz-9.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["AB", "BA"],
    answer: 0,
    img: "src/skrzyżowania/quiz-10.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["AB", "BA"],
    answer: 1,
    img: "src/skrzyżowania/quiz-11.png",
    },
  {
    q: "Jaka jest kolejność przejazdu na tym skrzyżowaniu?",
    options: ["AB", "BA"],
    answer: 0,
    img: "src/skrzyżowania/quiz-12.png",
    },
  {
    q: "Czy ten pojazd, chcąc skręcić w prawo musi się zatrzymać przed wjazdem na skrzyżowanie?",
    options: ["NIE", "TAK", "Tak, ale tylko gdy z jego lewej strony nadjeżdza inny pojazd"],
    answer: 1,
    img: "src/skrzyżowania/quiz-13.png",
    },
  {
    q: "Co oznacza przerywana linia namalowana na jezdni przed wjazem na skrzyżowanie?",
    options: ["Że należy się zatrzymać", "Że należy ustąpić pierwszeństwa", "Że jest się na drodze z pierwszeństwem"],
    answer: 1,
    img: "src/skrzyżowania/quiz-14.png",
    },
  {
    q: "Co oznacza ciągła linia namalowana na jezdni przed wjazem na skrzyżowanie?",
    options: ["Że należy się zatrzymać", "Że należy ustąpić pierwszeństwa", "Że jest się na drodze z pierwszeństwem"],
    answer: 0,
    img: "src/skrzyżowania/quiz-15.png",
    },
  {
    q: "Co oznacza linia złożona z trójkątów?",
    options: ["Że należy się zatrzymać", "Że należy ustąpić pierwszeństwa", "Że jest się na drodze z pierwszeństwem"],
    answer: 1,
    img: "src/skrzyżowania/quiz-16.png",
    },
  

];
