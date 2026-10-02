# Website Auto-Lackiererei Göhring GmbH — Anleitung

**Stand: 23.09.2026 — die Seite ist live unter https://www.lack-goehring.de**

| Was | Wo |
|---|---|
| Live-Adresse | https://www.lack-goehring.de |
| Quellcode | github.com/anakoenig226/autolack |
| Hosting | Vercel, Projekt `autolackiererei-goehring` (Konto `autolack`) |
| Technische Ersatzadresse | autolackiererei-goehring.vercel.app |
| Domain & DNS | STRATO, Auftragsnummer 9168074 |
| E-Mail | STRATO, unverändert (MX/SPF nicht angetastet) |

Gesetzte DNS-Einträge bei STRATO:

    A      @     216.198.79.1
    CNAME  www   c1f8b2740cebb43f.vercel-dns-017.com.

Der Stand **vor** der Umstellung liegt in `dns-sicherung-vorher.txt`.


Dieser Ordner enthält die vollständige, fertige Website. Sie ist statisch,
es gibt keine Datenbank und keinen Server im Hintergrund.

## Inhalt

| Pfad | Was es ist |
|---|---|
| `index.html` | Grundgerüst, Titel, Beschreibung, Vorschaubild, Firmendaten für Google |
| `assets/` | Programmcode (JS) und Gestaltung (CSS) der Seite |
| `images/` | 11 Fotos |
| `videos/` | 2 Videos (Streiflicht, Sprühnebel) |
| `fonts/` | Schriften Inter und Instrument Serif, lokal eingebunden |
| `og-image.jpg` | Vorschaubild beim Teilen per WhatsApp / Facebook |
| `favicon.ico/.svg`, `icon-*.png`, `apple-touch-icon.png` | Das kleine Logo im Browser-Tab und in Google-Ergebnissen (G-Monogramm) |
| `site.webmanifest` | Icons und Farben, wenn die Seite aufs Handy gelegt wird |
| `robots.txt`, `sitemap.xml` | Damit Google alle Seiten findet |
| `vercel.json` | Sorgt dafür, dass Unterseiten direkt aufrufbar sind |
| `serve.py` | Nur zum lokalen Ansehen: `python3 serve.py`, dann http://127.0.0.1:8787 |

Die Seiten sind: `/`, `/impressum`, `/datenschutz` und sechs Leistungsseiten
unter `/leistungen/…`.

## Hinterlegte Kontaktdaten

- **Telefon (alle Anruf-Buttons):** +49 3628 641510 — Festnetz
- **WhatsApp-Button:** +49 173 5755304 — Firmenhandy
- **E-Mail:** info@lack-goehring.de
- **Adresse:** August-Brömel-Straße 3, 99310 Arnstadt

## Veröffentlichen (erledigt am 23.09.2026)

> Die Schritte 1–4 sind abgeschlossen. Sie bleiben hier als Doku stehen,
> falls die Seite jemals erneut aufgesetzt werden muss.

### 1. Konten anlegen

Ein Konto bei **github.com** und eines bei **vercel.com** (beide kostenlos).
Bei Vercel mit dem GitHub-Konto anmelden, dann greifen sie ineinander.

### 2. Diesen Ordner zu GitHub hochladen

Auf github.com ein neues, **privates** Repository anlegen (z. B.
`lackiererei-goehring`). GitHub zeigt danach die passenden Befehle an; sie
lauten sinngemäß:

    git remote add origin https://github.com/DEIN-NAME/lackiererei-goehring.git
    git push -u origin main

### 3. Bei Vercel veröffentlichen

Vercel → **Add New… → Project** → das Repository auswählen → **Deploy**.
Vercel erkennt die Seite automatisch als statisch, es muss nichts eingestellt
werden. Der Projektname bestimmt die Vorschau-Adresse
(z. B. `lackiererei-goehring.vercel.app`). Diese Adresse sieht später niemand
mehr, sobald die eigene Domain verbunden ist.

### 4. Domain lack-goehring.de verbinden

In Vercel: **Projekt → Settings → Domains** → `lack-goehring.de` und
`www.lack-goehring.de` eintragen. Vercel zeigt daraufhin die DNS-Werte an,
die bei **Strato** einzutragen sind (üblicherweise ein A-Eintrag für die
Hauptdomain und ein CNAME-Eintrag für `www`).

> **Achtung — E-Mail:** Bei Strato dürfen ausschließlich die A- und
> CNAME-Einträge geändert werden. Die **MX-Einträge müssen unverändert
> bleiben**. An ihnen hängt `info@lack-goehring.de`. Werden sie gelöscht oder
> überschrieben, kommen keine Firmen-E-Mails mehr an.

### 5. Die beiden anderen Domains umleiten

- `auto-lackiererei-göhring.de` (Umlaut) — liegt beim externen Dienstleister
  (Anbieter udmedia.de). Dort muss die Umleitung beauftragt werden.
- `auto-lackiererei-goehring.de` (ohne Umlaut) — zeigt derzeit auf die
  Wix-Seite.

Beide in Vercel als zusätzliche Domains eintragen und auf `lack-goehring.de`
weiterleiten lassen.

### 6. Erst danach kündigen

Die Wix-Seite und das alte Hosting bei udmedia laufen weiter, bis die neue
Seite unter der eigenen Domain nachweislich funktioniert. **Nicht vorher
kündigen.**

## Änderungen später

Datei ändern, dann:

    git add -A
    git commit -m "Beschreibung der Änderung"
    git push

Vercel veröffentlicht die neue Fassung automatisch innerhalb einer Minute.

**Fotos austauschen:** neue Datei mit exakt demselben Namen in `images/`
legen (gleiches Format `.webp`), dann wie oben hochladen.

## Offene Punkte

- **WhatsApp-Button auf einem echten Handy testen.** Ob unter der Nummer
  tatsächlich ein WhatsApp-Konto läuft, lässt sich nur so feststellen —
  wa.me meldet ungültige Nummern nicht zurück.
- **Hero-Bilder sind sehr groß** (`hero-before.webp` 3,9 MB,
  `hero-after.webp` 3,4 MB). Zusammen 7,3 MB, die jeder Handybesucher als
  Erstes lädt. Ließe sich ohne sichtbaren Qualitätsverlust stark verkleinern.
- **Datenschutzerklärung** erwähnt den WhatsApp-Button nicht. Wer ihn
  antippt, übermittelt Daten an Meta. Ein kurzer Absatz dazu wäre sauberer.
- **Firmenname im Impressum** steht als „Autolackiererei Göhring GmbH“.
  Im Handelsregister lautet er „Auto-Lackiererei Göhring GmbH“.

## Impressumsdaten (bestätigt)

    Auto-Lackiererei Göhring GmbH
    August-Brömel-Straße 3, 99310 Arnstadt
    Geschäftsführerin: Jana Göhring-König
    Registergericht: Amtsgericht Jena
    Registernummer: HRB 503606
    Eine Umsatzsteuer-Identifikationsnummer nach § 27a UStG liegt nicht vor.

---

## Google Search Console (eingerichtet 23.09.2026)

- Property-Typ: **Domain** (`sc-domain:lack-goehring.de`), deckt Haupt- und www-Adresse ab
- Bestätigt per TXT-Eintrag bei STRATO:
  `google-site-verification=mvOpCHO3jVS_1jQyuY_4LJs84CGm1m3uwFSEcNRxZHM`
  **Diesen Eintrag nicht löschen** — sonst geht die Bestätigung verloren.
- Sitemap `https://www.lack-goehring.de/sitemap.xml` eingereicht, Status Success, 9 Seiten
- Erfassung der Startseite angefordert

## Weiterleitungen der alten Domains (vorbereitet 23.09.2026)

In Vercel sind diese vier Adressen als **308 Permanent Redirect** auf
`https://www.lack-goehring.de` angelegt. Sie greifen, sobald das DNS der
jeweiligen Domain auf Vercel zeigt:

    xn--auto-lackiererei-ghring-plc.de       (= auto-lackiererei-göhring.de)
    www.xn--auto-lackiererei-ghring-plc.de
    auto-lackiererei-goehring.de
    www.auto-lackiererei-goehring.de

Zu setzende DNS-Einträge (für beide Domains identisch):

    A      @     216.198.79.1
    CNAME  www   c1f8b2740cebb43f.vercel-dns-017.com.

> **⚠️ An beiden alten Domains hängt E-Mail.** Die MX-Einträge dürfen auf
> keinen Fall verändert oder durch einen Nameserver-Wechsel verloren gehen:
>
> - `auto-lackiererei-göhring.de` → Google Workspace (aspmx.l.google.com u.a.)
> - `auto-lackiererei-goehring.de` → mail.ud11.udmedia.de
>
> Es dürfen **nur A und CNAME** geändert werden, die Nameserver bleiben beim
> bisherigen Anbieter (udmedia bzw. Wix).

Zuständig: Umlaut-Domain der externe Dienstleister (udmedia), Domain ohne
Umlaut wird laut Vercel über **Wix** verwaltet (Mac).

---

## Weiterleitung auto-lackiererei-goehring.de — AKTIV seit 24.09.2026

Gesetzt im **Wix-Konto von Jana Göhring** (`lack-goehring@gmx.de`),
Menü: Domains → „…" → DNS-Einträge verwalten.

Vorher (Wix-Website):

    A      @     185.230.63.107 / .186 / .171
    CNAME  www   cdn3.wixdns.net

Jetzt (Vercel-Weiterleitung):

    A      @     216.198.79.1
    CNAME  www   c1f8b2740cebb43f.vercel-dns-017.com

> Hinweis: Wix akzeptiert **keinen Punkt am Ende** des CNAME-Werts.

Unverändert geblieben (E-Mail):

    MX            10 mail.ud11.udmedia.de
    CNAME  mail   mail.ud11.udmedia.de

Alle vier Varianten (mit/ohne www, http/https) landen per 308 auf
`https://www.lack-goehring.de`. Damit führt auch der **Website-Button im
Google-Unternehmensprofil** auf die neue Seite.

Der DNS-Stand davor liegt in `dns-wix-domain-vorher.txt`, die alten
Wix-Seiteninhalte in `wix-seite-archiv/`.

**Die Wix-Website ist damit offline** (sie bleibt im Wix-Konto erhalten).
Vor einer Kündigung des Wix-Abos klären: Bei wem ist die Domain registriert?
Wix zeigt sie als „von Drittanbieter verwaltet" an.

### Weiterhin offen

`auto-lackiererei-göhring.de` (mit Umlaut) — das erste Google-Ergebnis.
DNS liegt bei Rene Langenhan / Leuchtpunktart (udmedia), nicht erreichbar.
Die 308-Weiterleitung ist in Vercel vorbereitet und greift, sobald dort
A und CNAME gesetzt sind. Alternative: Domainumzug zu STRATO per KK-Antrag
durch die Geschäftsführerin. Achtung: Google-Workspace-MX und DNSSEC.

---

## Weiterleitung auto-lackiererei-göhring.de — AKTIV seit 02.10.2026

**Wichtige Erkenntnis:** Das udmedia-Konto gehört der **Auto-Lackiererei Göhring
GmbH selbst** (Kundennummer 11341, Account `ud11_s00`) — nicht Rene Langenhan.
Er war dort nur als Dienstleister tätig. Ein Domainumzug zu STRATO ist damit
hinfällig, die Domain war die ganze Zeit in eigener Hand.

Beide alten Domains werden in diesem Konto verwaltet:
`auto-lackiererei-goehring.de` (Nameserver bei Wix) und
`auto-lackiererei-göhring.de` (Nameserver bei udmedia).

Zugang: https://login.udmedia.de → Domains → DNS-Einstellungen (Stiftsymbol)

Geändert wurden:

    A      @     194.117.254.51  ->  216.198.79.1
    A      *     194.117.254.51  ->  216.198.79.1
    AAAA   @     2a05:d580:0:1337::33  ->  GELÖSCHT
    AAAA   *     2a05:d580:0:1337::33  ->  GELÖSCHT

Die AAAA-Einträge mussten weg, sonst hätten Besucher über IPv6 weiterhin den
alten Server erreicht. Die fünf **MX-Einträge (Google Workspace) blieben
unverändert** — dort werden laut Inhaberin ohnehin keine Postfächer genutzt.

> **Eigenheit des udmedia-Editors:** Löschungen greifen sofort, Textänderungen
> erst mit „Änderungen speichern" — und gehen verloren, wenn die Tabelle
> zwischendurch neu lädt. Deshalb immer **erst löschen, dann ändern, dann
> speichern.**

Alle vier Varianten (mit/ohne www, http/https) liefern 308 auf
`https://www.lack-goehring.de`, SSL-Zertifikat von Let's Encrypt vorhanden.

### Alte Website

Die alte statische Seite von 2009/2021 liegt weiterhin auf dem udmedia-Webspace,
ist über keine echte Domain mehr erreichbar. Die generische Adresse
`ud11-500.ud11.udmedia.de` wurde im Kundenmenü auf „offline" gestellt; udmedia
liefert dort allerdings noch aus. Eine Google-Abfrage (`site:ud11.udmedia.de`)
ergab **keine Treffer** — die Adresse ist nicht indexiert.

Eine vollständige Kopie der alten Seite (7 Seiten, 40 Bilder) liegt in
`udmedia-alte-seite/`. Ein Löschen der Dateien auf dem Webspace ist damit
gefahrlos möglich, aber nicht nötig.

**Kostenfrage:** Der Webspace-Tarif „StartXL 3.0" bei udmedia wird jetzt nur
noch für die Domainverwaltung und die alten Dateien gebraucht. Ob ein
kleinerer Tarif reicht, sollte geprüft werden — die Domains müssen dabei
erhalten bleiben.

---

## DNS von Wix zurück zu udmedia geholt (02.10.2026)

**Anlass:** Das Wix-Abo soll gekündigt werden. Die Weiterleitung von
`auto-lackiererei-goehring.de` lag aber in **Wix' DNS-Zone** — die Domain
selbst ist bei udmedia registriert, nur die Nameserver zeigten auf Wix.
Bei einer Kündigung hätte Wix die Zone gelöscht und die Domain wäre
komplett ausgefallen (nicht nur die Weiterleitung).

Die Domain hat **kein DNSSEC**, der Nameserver-Wechsel war daher unkritisch.

Durchgeführt in udmedia: Domains → DNS-Einstellungen → Stiftsymbol →
Reiter **„Standard-Nameserver"** → Rückfrage mit OK bestätigt. Danach legt
udmedia eine Standardzone mit den eigenen Werten an, die korrigiert wurde:

    A      @     194.117.254.51  ->  216.198.79.1
    A      *     194.117.254.51  ->  216.198.79.1
    AAAA   @     GELÖSCHT
    AAAA   *     GELÖSCHT
    MX     @     10 mail.ud11.udmedia.de   (unverändert gelassen)

### ⚠️ Wix erst kündigen, wenn die Umstellung durch ist

Die Delegierung bei der DENIC braucht einige Stunden. Prüfen lässt sie
sich im Terminal:

    dig +short auto-lackiererei-goehring.de NS

- Antwort `ns2.wixdns.net, ns3.wixdns.net` → **noch nicht umgestellt, nicht kündigen**
- Antwort `ns3.powerdns.de, ns4.powerdns.de` → **umgestellt, Wix kann weg**

Danach zusätzlich prüfen, dass die Weiterleitung noch greift:

    curl -sIL https://www.auto-lackiererei-goehring.de/ | grep -i location

Sie muss auf `https://www.lack-goehring.de/` zeigen.

## Laufende Kosten — Überblick

| Posten | Status |
|---|---|
| Vercel (Hosting neue Seite) | kostenlos (Hobby) |
| GitHub (Quellcode) | kostenlos |
| STRATO (lack-goehring.de + E-Mail) | wird gebraucht |
| udmedia (beide alten Domains) | wird gebraucht — hier liegt die Registrierung |
| **Wix Premium** | **kann nach der DNS-Umstellung gekündigt werden** |

Der udmedia-Tarif „StartXL 3.0" hostet nach dem Löschen der alten Dateien
keine Website mehr, wird aber für die Domainregistrierung weiter benötigt.
Ein kleinerer Domain-Tarif könnte reichen — bei udmedia erfragen, dabei
unbedingt den Erhalt beider Domains sicherstellen.
