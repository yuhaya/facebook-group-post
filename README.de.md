# Facebook-Gruppenbeitrag (Matrix-Marketing)

> Einmal einrichten — viele Gruppen × viele Texte × viele Fingerprint-Browser. Mehr Reichweite, weniger Copy-Paste.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Repository:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## Was diese Automation leistet

Ein **AutoAI**-Desktop-Projekt. Nach dem Import können Sie:

| Fähigkeit | Nutzen |
|---|---|
| **In Facebook-Gruppen posten** | Gruppenseite öffnen und Beitrag mit Text + Bildern oder Text + einem Video veröffentlichen |
| **Matrix-Skalierung** | Viele Gruppen-URLs + viele Texte → **jede Gruppe erhält jeden Text** (Aufgaben = Gruppen × Texte) |
| **Multi-Account-Browser** | Aufgaben per **Round-Robin** auf gewählte Fingerprint-Browser (1 Browser = 1 Konto) |
| **Medienpools** | Bildpool (N Bilder/Beitrag, zyklisch) oder Videopool (1 Video/Beitrag, zyklisch) |
| **Optional anonym** | Schalter „Anonym posten“ im Composer automatisch aktivieren |
| **Menschenähnlicher Zeitplan** | Tageslimit, Zufallsintervall, Tagesfenster (Übernacht-Fenster möglich) |

### Warum „Matrix-Posting“?

Manuelles Gruppenmarketing skaliert nicht.

Beispiele:

- **20 Gruppen × 5 Texte = 100 Aufgaben**, verteilt auf mehrere Browser  
- Gleiches Angebot mit variierenden Texten/Medien in verschiedene Communities  
- Übernacht-Fenster, damit Posts zur Online-Zeit der Zielgruppe landen  

**Produktive Task-Gruppen verbrauchen fast keine AI-Tokens.** Tokens dienen vor allem Agent-Entwicklung, Anpassung und Fehlerbehebung.

> Nur mit eigenen oder autorisierten Konten/Gruppen nutzen. Facebook-Regeln und lokales Recht beachten.

---

## Voraussetzungen

- **AutoAI-Desktop-Client** ([Download](https://www.xrobot.tech/de/download/))
  - **Windows:** nur x86 / x64 (kein ARM)
  - **macOS:** nur Apple Silicon (M-Serie; kein Intel Mac)
- AutoAI-Konto ([Registrieren](https://www.xrobot.tech/de/register/) · [Anmelden](https://www.xrobot.tech/de/login/))
- Mindestens ein **Fingerprint-Browser**, bei Facebook angemeldet
- **Kontingent:** AutoAI enthält **eine kostenlose Fingerprint-Browser-Umgebung**. Für Matrix/Mehrkonten weitere Slots im Client oder im [Konto](https://www.xrobot.tech/de/account/) **kaufen**

---

## Schnellstart

### 1. Client herunterladen

👉 [https://www.xrobot.tech/de/download/](https://www.xrobot.tech/de/download/)

### 2. Registrieren und anmelden

1. [Registrieren](https://www.xrobot.tech/de/register/) (E-Mail + Code/Passwort).
2. Optional Website-[Login](https://www.xrobot.tech/de/login/). **Im Desktop-Client mit demselben Konto anmelden.**

### 3. Facebook-Fingerprint-Browser vorbereiten

AutoAI liefert **eine kostenlose Fingerprint-Umgebung** (**Plattform-Browser**). Für ein Konto reicht das. Matrix funktioniert besser mit **mehreren Browsern (Konten)** — bei Bedarf Kontingent kaufen und weitere Umgebungen anlegen.

1. Sidebar **Browser** öffnen.
2. **Plattform-Browser** (kostenlos integriert) bevorzugen; BitBrowser/AdsPower möglich.
3. **Erstellen** → **Starten** → ggf. **Cast** einschalten.
4. Im Browser **manuell bei Facebook anmelden**.
5. Mehr Konten: Kontingent kaufen → weitere Browser → je Facebook-Login → bei der Task-Gruppe alle auswählen.

### 4. Von GitHub importieren

1. **Automatisierung → Import**.
2. Repo-Adresse einfügen: `https://github.com/yuhaya/facebook-group-post` (oder `yuhaya/facebook-group-post` / `git@github.com:yuhaya/facebook-group-post.git`).
3. **Import starten**.
4. Projekt unter **Automatisierung → Meine Automatisierungen**.

### 5. Task-Gruppe erstellen (Matrix-Lauf)

1. **Meine Automatisierungen**.
2. **Kartenkörper klicken** (nicht den Experten-Button unten).
3. Formular: Gruppen-URLs, Texte (`==sep==`), Browser, Medien, Zeitplan.
4. **Erstellen** → Zeiten und Anzahl prüfen.
5. Bei Aufforderung oben rechts **Aufgaben**-Masterschalter einschalten.
6. Fortschritt unter **Task-Gruppenverwaltung**.

**Aufgabenanzahl:** `Gruppen × Texte`. Danach Round-Robin auf Browser.

---

## Formularfelder

| Feld | Bedeutung |
|---|---|
| Gruppen-URLs | Eine URL pro Zeile; jede Gruppe erhält alle Texte |
| Texte | Trennen mit `==sep==` |
| Anonym posten | An → Schalter im Composer aktivieren falls vorhanden |
| Medientyp | Bilder (mehrere) / Video (eins pro Beitrag) |
| Bilder/Videos | Pool, der Reihe nach, dann zyklisch |
| Bilder pro Beitrag | Anzahl aus dem Pool |
| Browser | Ausführende Fingerprint-Umgebungen |
| Tageslimit | Max. Posts pro Browser im Fenster |
| Intervall min/max | Zufallsverzögerung (Sekunden) |
| Tagesstart/-ende | **Start > Ende** = Übernacht (z. B. `22:00`→`06:00`) |

---

## Anpassen

Offizielle Skripte passen ggf. nicht zu Ihrer UI-Sprache oder Region — mit dem eingebauten Agenten anpassen.

### Rechenleistung aufladen (für Agent-Chat)

Produktive Läufe ≈ 0 Token. **Agent-Änderungen/Troubleshooting** verbrauchen **AI-Rechenleistung**.

1. Auf der Website **USD-Guthaben aufladen**.  
2. Im Client Profil/Wallet → **AI-Rechenleistung kaufen**.  
3. Danach Agent-Chat starten.

### Agent beauftragen

**A. Entwicklungmodus** — Karte → **Browser-Automatisierungs-Experte** → gestarteter Debug-Browser → Wunsch beschreiben → **Skript testen**.

**B. Troubleshooting** — **Task-Gruppenverwaltung** → **Untersuchen und beheben**.

### Weiteres

- [Erste Schritte](https://www.xrobot.tech/blog/de/guide/getting-started) · [Von Null bauen](https://www.xrobot.tech/blog/de/guide/custom-automation)
- [Fälle](https://www.xrobot.tech/de/cases/) · [Download](https://www.xrobot.tech/de/download/) · [Registrieren](https://www.xrobot.tech/de/register/) · [Login](https://www.xrobot.tech/de/login/)

---

## Tipps

- Lieber **mehrere Browser (Konten)**. Zuerst die **kostenlose** Umgebung; beim Skalieren weitere Fingerprint-Slots kaufen.  
- Intervalle und Limits konservativ; Übernacht-Fenster für Auslandstageszeiten.  
- Texte/Medien variieren.  
- Vor großen Gruppen Facebook-Logins prüfen.  
- Produktion ≈ **0 Token**.

---

## Projektinfo

| | |
|---|---|
| Paket-ID | `fb-group-post` |
| Anzeigename | Facebook-Gruppenbeitrag |
| Laufzeit | AutoAI-Desktop (Browser-Automatisierung) |

`AGENTS.md` ist für Agent-Entwickler im Client. Kunden folgen dieser README.

---

## Support

- Website: [https://www.xrobot.tech](https://www.xrobot.tech)

Bei Problemen zuerst **Entwicklungs-/Troubleshooting-Modus**, nicht manuell am Skript.
