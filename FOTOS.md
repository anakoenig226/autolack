# Bilder auf der Website

## Aktueller Stand

In `assets/bilder/` liegen fünf Aufnahmen, die im November 2026 bereitgestellt
wurden, sowie zwei rechnerisch erzeugte Lackflächen.

| Datei | Wo | Zuschnitt |
|---|---|---|
| `betrieb-aussen.webp` | Bildbahn, Desktop | **echtes Foto**, schmales Band 3,7:1 |
| `betrieb-aussen-schmal.webp` | Bildbahn, Handy | **echtes Foto**, 1,9:1 |
| `_original-gebaeude.jpg` | unbeschnittenes Original | zum Neuzuschneiden |
| `felgen.webp` | Galerie „Aus der Werkstatt" | 1:1 |
| `motorrad.webp` | Galerie | 1:1 |
| `boot.webp` | Galerie | 1:1 |
| `jana.webp` | Abschnitt „Der Betrieb" | 4:5, eigenes Foto der Geschäftsführerin |
| `lack-rot.webp` | derzeit ungenutzt, als Reserve | 1:1, rechnerisch erzeugt |
| `lack-breit.webp` | derzeit ungenutzt, als Reserve | 2:1, rechnerisch erzeugt |

### Beim Zuschneiden beachtet

- **Seitlich wurde nichts abgeschnitten**, wo Schrift im Bild steht. Beim
  Gebäude und beim Boot hätte ein mittiger Zuschnitt das „A" von
  AUTO-LACKIEREREI gekappt.
- Auf der Vorlage mit dem Motorrad stand an der Wand **„Auto Lackierei
  Göhring"** — mit fehlendem „r". Das Bild ist so beschnitten, dass die
  Wandbeschriftung nicht mehr sichtbar ist.
- Die Logo-Varianten auf diesen Aufnahmen (mit Autokontur, Sprühpistole,
  „Seit 1859") weichen vom echten Firmenlogo ab, das in Kopf- und Fußzeile
  verwendet wird.

## Wenn echte Fotos aus dem Betrieb dazukommen

Dateien schicken, Originalgröße. Ich schneide zu und binde ein. Lohnend wären:

| Motiv | Ersetzt |
|---|---|
| Werkstatt, weite Aufnahme, quer | `betrieb-aussen.webp` |
| Jemand bei der Arbeit in der Kabine | `felgen.webp` |
| Vorher/Nachher desselben Schadens | neuer Abschnitt |
| Portrait Jana Göhring-König in der Werkstatt | `jana.webp` (derzeit ein Selfie) |
| Außenansicht mit Schild | Kontaktbereich |

### Tipps

- **Quer** fotografieren, nicht hochkant.
- **Tageslicht** oder volle Hallenbeleuchtung, keine Handy-Blitze.
- Im Bildausschnitt **aufräumen**.
- **Keine fremden Kennzeichen** erkennbar lassen.
- Bei Personenaufnahmen das **Einverständnis** der Mitarbeiter einholen.

### Technisch

Nach `assets/bilder/`, als WebP, etwa 1800 px Breite für quer, 900 px für
quadratisch, Qualität 82. Die Zuschnitte macht das CSS über `aspect-ratio`
und `object-fit: cover` — im HTML muss nur der Dateiname stimmen.
