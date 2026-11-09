# Fotos für die Website

Die Seite funktioniert bewusst **auch ohne Fotos** — sie wirkt nicht
unfertig, sondern sachlich. Mit eigenen Aufnahmen wird sie aber deutlich
stärker, gerade bei einem Handwerksbetrieb.

**Wichtig:** Es müssen Fotos aus dem eigenen Betrieb sein. Bilder der
früheren Agentur dürfen nicht verwendet werden, Bilder aus dem Internet
ebenso wenig.

## Was gebraucht wird

Ein modernes Handy genügt völlig. Wichtiger als die Kamera ist das Licht.

| # | Motiv | Wofür |
|---|---|---|
| 1 | **Werkstatt, weite Aufnahme** — Halle mit Fahrzeug, quer | Aufmacher oben |
| 2 | **Jemand bei der Arbeit** — Lackierpistole in der Kabine, von der Seite | Leistungen |
| 3 | **Detail Lackoberfläche** — Spiegelung in frisch poliertem Lack | Leistungen |
| 4 | **Vorher/Nachher** — derselbe Schaden, zwei Aufnahmen aus gleicher Position | Ablauf |
| 5 | **Portrait Jana Göhring-König** — in der Werkstatt, nicht im Büro | Betrieb |
| 6 | **Das Team** — alle zusammen vor der Halle | Betrieb |
| 7 | **Außenansicht** mit Schild, damit Kunden das Gebäude wiedererkennen | Kontakt |

## Tipps

- **Quer fotografieren**, nicht hochkant — die Seite ist auf breite Bilder ausgelegt.
- **Tageslicht** nutzen oder die Hallenbeleuchtung komplett einschalten; keine Handy-Blitze.
- **Aufräumen** im Bildausschnitt. Ein Besen in der Ecke fällt auf dem Foto mehr auf als in echt.
- Bei Vorher/Nachher **vom selben Standpunkt** fotografieren, sonst wirkt der Vergleich nicht.
- **Keine Kennzeichen** fremder Kundenfahrzeuge erkennbar lassen, oder vorher fragen.
- Bei Personenaufnahmen das **Einverständnis der Mitarbeiter** einholen.

## Einbauen

Fotos als JPG oder PNG schicken, Originalgröße. Ich skaliere, beschneide
und binde sie ein — dafür sind in `index.html` bereits Stellen vorgesehen
(siehe Kommentar `Platz für ein Foto`).

Die Dateien kommen nach `assets/bilder/`. Als WebP mit etwa 1600 Pixeln
Breite sind sie scharf genug und bleiben unter 200 KB pro Bild.

## Die berechneten Lackflächen

In `assets/bilder/` liegen zwei Flächen, die ich rechnerisch erzeugt habe —
**keine Fotos, kein fremdes Material**. Sie füllen die Bildplätze, bis eure
eigenen Aufnahmen da sind.

- `lack-breit.webp` — unter dem Aufmacher, später: Werkstatt, weite Aufnahme
- `lack-rot.webp` — im Abschnitt „Der Betrieb", später: Portrait

Zum Austauschen genügt es, die Datei zu ersetzen oder im `<img src="…">`
den Pfad zu ändern. Die Zuschnitte (21:8 und 1:1) macht das CSS.
