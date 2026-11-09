/* ============================================================
   Bewegung auf der Seite — bewusst zurueckhaltend.
   Laesst sich komplett abschalten, indem diese Datei nicht
   eingebunden wird; die Seite funktioniert dann unveraendert.
   ============================================================ */
(function () {
  "use strict";
  var ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- 1. Abschnitte beim Hereinscrollen einblenden --- */
  var ziele = document.querySelectorAll(
    ".abschnitt-kopf, .karte, .schritt, .band, .ueber > div, .wege > *, .daten, .zahlen, .flaeche"
  );
  if (ruhig || !("IntersectionObserver" in window)) {
    ziele.forEach(function (e) { e.classList.add("da"); });
  } else {
    ziele.forEach(function (e) { e.classList.add("zeig"); });
    var beobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        // Karten innerhalb einer Gruppe leicht versetzt einblenden
        var geschwister = el.parentElement ? [].slice.call(el.parentElement.children) : [];
        var i = geschwister.indexOf(el);
        el.style.transitionDelay = (i > 0 ? Math.min(i, 5) * 70 : 0) + "ms";
        el.classList.add("da");
        beobachter.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    ziele.forEach(function (e) { beobachter.observe(e); });
  }

  /* --- 2. Zahlen hochzaehlen --- */
  var zahlenFeld = document.querySelector(".zahlen");
  if (zahlenFeld && !ruhig && "IntersectionObserver" in window) {
    var gezaehlt = false;
    new IntersectionObserver(function (e, o) {
      if (!e[0].isIntersecting || gezaehlt) return;
      gezaehlt = true; o.disconnect();
      zahlenFeld.querySelectorAll("b").forEach(function (b) {
        var roh = b.textContent.trim();
        var zahl = parseFloat(roh.replace(",", "."));
        if (isNaN(zahl)) return;
        var komma = roh.indexOf(",") > -1;
        var suffix = komma ? "" : (roh.match(/[^\d]+$/) || [""])[0];
        var dauer = 900, start = performance.now();
        function schritt(t) {
          var p = Math.min(1, (t - start) / dauer);
          var e2 = 1 - Math.pow(1 - p, 3);          // weich auslaufend
          var wert = zahl * e2;
          b.textContent = komma
            ? wert.toFixed(1).replace(".", ",")
            : Math.round(wert) + suffix;
          if (p < 1) requestAnimationFrame(schritt);
          else b.textContent = roh;
        }
        requestAnimationFrame(schritt);
      });
    }, { threshold: 0.4 }).observe(zahlenFeld);
  }

  /* --- 3. Kopfzeile verdichten + Aufmacher + Parallaxe --- */
  var kopf  = document.querySelector(".kopf");
  var text  = document.querySelector(".auf-text");
  var bilder = [].slice.call(document.querySelectorAll(".flaeche img"));
  var offen = false;

  function zeichne() {
    offen = false;
    var y = window.scrollY || 0;

    if (kopf) kopf.classList.toggle("eng", y > 40);

    if (text && !ruhig) {
      var p = Math.min(1, y / 560);
      text.style.transform = "translateY(" + (p * 26).toFixed(1) + "px) scale(" + (1 - p * 0.055).toFixed(4) + ")";
      text.style.opacity = (1 - p * 0.65).toFixed(3);
    }

    if (!ruhig) {
      for (var i = 0; i < bilder.length; i++) {
        var b = bilder[i], r = b.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > innerHeight + 200) continue;
        var m = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; // -1 .. 1
        b.style.transform = "scale(1.1) translateY(" + (m * -22).toFixed(1) + "px)";
      }
    }
  }
  function beiScroll() {
    if (offen) return;
    offen = true;
    requestAnimationFrame(zeichne);
  }
  addEventListener("scroll", beiScroll, { passive: true });
  addEventListener("resize", beiScroll, { passive: true });
  zeichne();
})();
