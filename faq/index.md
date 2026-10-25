---
layout: default
title: Häufige Fragen
description: "Häufige Fragen zur Elektrokontrolle und zum Sicherheitsnachweis (SiNa): Wann ist die Kontrolle Pflicht, wie läuft sie ab, was passiert bei Mängeln, was gilt beim Hausverkauf? Antworten von simon gasser elektrokontrollen."
faq:
  - frage: "Wann muss ich meine elektrische Installation kontrollieren lassen?"
    antwort: "Die Niederspannungs-Installationsverordnung (NIV, SR 734.27) legt fest, wie oft elektrische Installationen periodisch kontrolliert werden müssen. Bei Wohnbauten beträgt die Kontrollperiode in der Regel 20 Jahre, bei Gewerbe 10 Jahre, bei Restaurants, Schulen oder Tankstellen 5 Jahre und bei Baustellen 1 Jahr. Ihr Netzbetreiber (Elektrizitätswerk) fordert Sie rechtzeitig schriftlich auf, einen Sicherheitsnachweis einzureichen."
  - frage: "Was ist ein Sicherheitsnachweis (SiNa)?"
    antwort: "Der Sicherheitsnachweis bestätigt, dass Ihre elektrische Installation kontrolliert wurde und den Sicherheitsvorschriften entspricht. Er wird zusammen mit einem Mess- und Prüfprotokoll von einem unabhängigen Kontrollorgan ausgestellt und beim Netzbetreiber eingereicht. Auf Wunsch senden wir ihn für Sie direkt ans Elektrizitätswerk."
  - frage: "Wer darf die Kontrolle durchführen?"
    antwort: "Die periodische Kontrolle muss ein unabhängiges Kontrollorgan oder eine akkreditierte Inspektionsstelle durchführen, das nicht an der Erstellung der Installation beteiligt war. simon gasser elektrokontrollen ist ein unabhängiges Kontrollunternehmen. Sie können also frei wählen, wer die Mängel danach behebt."
  - frage: "Wie läuft eine Elektrokontrolle ab?"
    antwort: "Wir kontrollieren den Sicherungskasten, lösen die FI-Schutzschalter aus, messen den Isolationswiderstand, prüfen die Verbindungen (Schraubenkontrolle) und machen eine Sichtkontrolle. Danach gehen wir durch alle Räume und prüfen die frei zugänglichen Steckdosen und Installationen. Fragen zu Ihrer Installation können Sie direkt vor Ort stellen."
  - frage: "Wie lange dauert die Kontrolle?"
    antwort: "Die Dauer hängt von der Grösse und vom Alter der Installation ab. Bei einem Einfamilienhaus dauert die Kontrolle selten länger als anderthalb Stunden. Bei der Terminbuchung sehen Sie, wie viel Zeit wir einplanen."
  - frage: "Was passiert, wenn Mängel gefunden werden?"
    antwort: "Sie erhalten einen Kontrollbericht mit den Mängeln. Auf Wunsch senden wir ihn direkt Ihrem Elektroinstallateur, der die Mängel behebt. Sobald er uns die Behebung bestätigt hat, stellen wir den Sicherheitsnachweis aus und senden ihn ans Elektrizitätswerk. Bei grösseren, gefährlichen Mängeln machen wir eine kurze Nachkontrolle."
  - frage: "Brauche ich beim Verkauf meines Hauses einen Sicherheitsnachweis?"
    antwort: "Bei einer Handänderung verlangt die NIV eine Kontrolle, wenn die letzte Kontrolle mehr als fünf Jahre zurückliegt. Bei älteren Liegenschaften können sich Verkäufer und Käufer auch einigen, dass ein Kontrollbericht mit der Liste der Mängel genügt und der Käufer die Mängel behebt."
  - frage: "Was gilt bei alten Installationen (Nullung Schema III)?"
    antwort: "Seit August 2024 gelten für Installationen mit Nullung Schema III (in der Regel vor ca. 1975 erstellt) verschärfte Auflagen des ESTI. Mehr dazu auf unserer Seite [Info alte Installation](/info-alte-installation/)."
  - frage: "Was kostet eine Elektrokontrolle?"
    antwort: "Der Preis hängt von der Art und Grösse der Liegenschaft und vom Umfang der Installation ab. Rufen Sie uns an oder schreiben Sie uns, dann nennen wir Ihnen den Preis für Ihr Objekt."
  - frage: "Wie buche ich einen Termin?"
    antwort: "Sie buchen Ihren Termin direkt online in unserem Kalender unter [Termin buchen](/termin-buchen/). Telefonisch erreichen Sie uns Montag bis Donnerstag von 9 bis 12 Uhr: Schaffhausen 052 557 22 77, Flawil 071 554 80 00."
  - frage: "In welchen Regionen sind Sie tätig?"
    antwort: "Wir haben zwei Standorte: Schaffhausen (Brunnengasse 2) für die Region Schaffhausen, Weinland und Winterthur und den Hauptsitz in Flawil (Krankenhausstrasse 14) für Flawil, Gossau, Uzwil, Degersheim, Wil, St. Gallen, Herisau und Umgebung."
---

<div class="page">
  <h1 class="page-title">Häufige Fragen zur Elektrokontrolle</h1>

  <p>Hier beantworten wir die Fragen, die uns Hauseigentümer am häufigsten stellen. Ihre Frage ist nicht dabei? Rufen Sie uns an oder <a style="color:#ff8000" href="{{ "/termin-buchen/" | relative_url }}">buchen Sie direkt einen Termin</a>.</p>

  <!-- Von Simon bestätigt: Kontrollperioden, Handänderung 5 Jahre, Dauer max. ca. 1,5 h. Preisfrage bewusst ohne Zahl – optional Preisrahmen ergänzen. -->
  {% for f in page.faq %}
  <h2 id="frage-{{ forloop.index }}">{{ f.frage }}</h2>
  {{ f.antwort | markdownify }}
  {% endfor %}

  <hr />
  <p>Standorte: <a style="color:#ff8000" href="{{ "/elektrokontrolle-schaffhausen/" | relative_url }}">Elektrokontrolle Schaffhausen</a> · <a style="color:#ff8000" href="{{ "/elektrokontrolle-flawil/" | relative_url }}">Elektrokontrolle Flawil</a></p>
</div>
