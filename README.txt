TOGSERVICE BESTILLING – TEST v0.3

Pliki:
- index.html – formularz
- style.css – wygląd
- app.js – lista produktów, +/- i wysyłanie SMS
- manifest.json – ustawienia PWA
- sw.js – działanie offline po pierwszym wejściu

TESTOWY NUMER SMS:
+47 405 64 115

Aby później zmienić numer:
otwórz app.js i zmień pierwszą linię:
const TEST_PHONE = "+4740564115";

WAŻNE:
Formularz można podejrzeć z pliku index.html na komputerze.
Pełne działanie offline/PWA i test SMS najlepiej sprawdzić po umieszczeniu plików
na GitHub Pages / Cloudflare Pages przez HTTPS.


ZMIANY W v0.2:
- krótszy, czytelniejszy format SMS
- pierwsza linia: TOG 710 | SETT 73
- ilość na początku: 4x First price vann
- mniej znaków ozdobnych i dwukropków
- skrócona nazwa kategorii SNACKS / HVILE
- komentarz w jednej linii jako: Beskjed: ...


ZMIANY W v0.3:
- wszystkie kategorie są domyślnie zwinięte po otwarciu formularza
- po naciśnięciu SEND SMS formularz zeruje wszystkie ilości
- po naciśnięciu SEND SMS czyści TOG, SETT i komentarz
- po naciśnięciu SEND SMS zamyka okno podglądu
- po naciśnięciu SEND SMS ponownie zwija wszystkie kategorie
- formularz wraca na górę i jest gotowy na nowe zamówienie

UWAGA:
Przeglądarka nie może sprawdzić, czy użytkownik faktycznie nacisnął „Wyślij”
w aplikacji Wiadomości. Dlatego reset następuje w momencie naciśnięcia SEND SMS
w formularzu i otwarcia aplikacji SMS.
