---
layout: default
title: Elektrokontrolle & SiNa Flawil
description: "Unabhängige Elektrokontrolle und Sicherheitsnachweis (SiNa) in Flawil, Gossau, Uzwil, Wil und Herisau. Hauptsitz Krankenhausstrasse 14, 9230 Flawil, 071 554 80 00. Termin online buchen."
schema_standort: flawil
---
{%- assign s = site.data.standorte.flawil -%}

<div class="page">
  <h1 class="page-title">Elektrokontrolle &amp; Sicherheitsnachweis (SiNa) in Flawil</h1>

  <p><strong>simon gasser elektrokontrollen</strong> hat seinen Hauptsitz in Flawil. Von hier aus kontrollieren wir als unabhängiges Kontrollunternehmen elektrische Installationen in Flawil, Gossau, Uzwil, Wil, Herisau und Umgebung und stellen den Sicherheitsnachweis (SiNa) aus, den Ihr Elektrizitätswerk verlangt.</p>

  <p><strong>Persönlich, unabhängig und unkompliziert:</strong> Sie buchen Ihren Termin direkt online, und die Kontrolle macht ein Kontrolleur, den Sie mit Namen kennen.</p>

  <p>👉 <a style="color:#ff8000" href="{{ "/termin-buchen/" | relative_url }}"><strong>Termin online buchen</strong></a> 🗓 Jederzeit möglich, ohne Warten am Telefon. Telefonisch sind wir Montag bis Donnerstag, 9 bis 12 Uhr erreichbar, siehe <a style="color:#ff8000" href="#kontakt">Kontakt</a>.</p>

  <h2 id="leistungen">Unsere Leistungen in der Region Flawil</h2>
  <ul>
    <li><strong>Periodische Kontrolle</strong> der elektrischen Installation, wenn Sie vom Netzbetreiber zur Einreichung des Sicherheitsnachweises aufgefordert werden (bei Wohnbauten in der Regel alle 20 Jahre).</li>
    <li><strong>Sicherheitsnachweis (SiNa)</strong> mit Mess- und Prüfprotokoll, den wir auf Wunsch direkt ans Elektrizitätswerk senden.</li>
    <li><strong>Kontrolle bei Handänderung</strong>, wenn Sie Ihre Liegenschaft verkaufen.</li>
    <li><strong>Abnahmekontrolle</strong> (unabhängige Kontrolle) für Installationsfirmen nach Neu- und Umbauten, siehe <a style="color:#ff8000" href="{{ "/installationsfirmen/" | relative_url }}">Installationsfirmen</a>.</li>
    <li><strong>Kontrollen für Immobilienverwaltungen</strong> inklusive Terminierung mit den Mietern, siehe <a style="color:#ff8000" href="{{ "/immobilienverwaltungen/" | relative_url }}">Immobilienverwaltungen</a>.</li>
  </ul>

  <h2 id="ablauf">So läuft es ab 📋</h2>
  <ol>
    <li><strong>Aufforderung:</strong> Ihr Netzbetreiber bzw. Elektrizitätswerk fordert Sie schriftlich auf, einen Sicherheitsnachweis einzureichen.</li>
    <li><strong>Termin buchen:</strong> Sie wählen online einen passenden Termin oder rufen uns an.</li>
    <li><strong>Unabhängige Kontrolle:</strong> Wir prüfen Sicherungskasten, Schutzschalter, Isolation, Verbindungen und machen einen Rundgang durch alle Räume.</li>
    <li><strong>Mängelbehebung:</strong> Finden wir Mängel, erhalten Sie einen verständlichen Kontrollbericht. Auf Wunsch senden wir ihn direkt Ihrem Elektroinstallateur, der die Mängel behebt.</li>
    <li><strong>Sicherheitsnachweis:</strong> Ohne Mängel bzw. nach der Mängelbehebung stellen wir den Sicherheitsnachweis aus und senden eine Kopie ans Elektrizitätswerk. Damit ist für Sie alles erledigt ✅.</li>
  </ol>
  <p>Mehr Antworten finden Sie in den <a style="color:#ff8000" href="{{ "/faq/" | relative_url }}">häufigen Fragen</a>.</p>

  <h2 id="einzugsgebiet">Einzugsgebiet</h2>
  <p>Vom Hauptsitz in Flawil aus sind wir unterwegs in {% for o in s.gebiet %}{{ o }}{% if forloop.rindex == 2 %} und {% elsif forloop.last == false %}, {% endif %}{% endfor %} sowie in den umliegenden Gemeinden. Ihr Ort ist nicht dabei? Fragen Sie uns einfach.</p>

  <h2 id="kontrolleur">Ihr Kontrolleur: Simon Gasser</h2>
  <!-- TODO Simon: Bitte prüfen, ob hier das bestehende Porträt bleiben soll oder ob ein Foto im Einsatz (z. B. am Sicherungskasten / am Standort Flawil) besser passt. Wer kontrolliert in der Region Flawil effektiv? Falls jemand anderes, Name/Foto anpassen. -->
  <div class="mitarbeiter">
    <div class="mitarbeiter-einzeln">
      <img src="{{ "/assets/images/Simon.jpg" | relative_url }}" alt="Simon Gasser, Elektrokontrolleur" width="200" style="border-radius:50%" />
      <strong>Simon Gasser</strong><br />
      Inhaber
    </div>
  </div>
  <p>Bei uns wissen Sie, wer zu Ihnen nach Hause kommt. Simon Gasser und sein Team arbeiten seit über zehn Jahren daran, Elektrokontrollen für alle Beteiligten einfach und unkompliziert zu machen. Haben Sie Fragen zu Ihrer Installation, fragen Sie einfach direkt bei der Kontrolle nach. Mehr <a style="color:#ff8000" href="{{ "/uber-uns/" | relative_url }}">über uns</a>.</p>

  <hr />
  <div class="filialen">
    <div class="niederlassung">
      <h3 id="kontakt">Hauptsitz Flawil</h3>
      <p>simon gasser gmbh<br />
      elektrokontrollen<br />
      {{ s.strasse }}<br />
      {{ s.plz }} {{ s.ort }}<br />
      ☎️ <a style="color:#ff8000; padding:0.3em" href="tel:{{ s.telefon_link }}">{{ s.telefon_anzeige }}</a><br />
      📧 <a style="color:#ff8000; padding:0.3em" href="mailto:info@simon-gasser.ch?subject=Elektrokontrolle%20Flawil">info@simon-gasser.ch</a></p>
      <p>Telefonzeiten: Montag bis Donnerstag, 9 bis 12 Uhr.<br />
      <a style="color:#ff8000" href="{{ "/termin-buchen/" | relative_url }}">Termin online buchen</a> 🗓</p>
    </div>
  </div>
</div>
