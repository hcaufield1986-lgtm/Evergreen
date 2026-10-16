// Evergreen Painting, LLC — site behavior

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Quote form -> composes an email to the business (no backend needed).
  // Replace with a Formspree endpoint or similar for true online submission.
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      if (!name || !phone) {
        alert("Please add your name and phone number so we can reach you.");
        return;
      }
      var lines = [
        "New quote request from evergreenpaintingpa.com",
        "",
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + (data.get("email") || "—"),
        "Project type: " + (data.get("type") || "—"),
        "Timeline: " + (data.get("timeline") || "—"),
        "",
        "Details:",
        (data.get("details") || "—").toString().trim()
      ];
      var subject = encodeURIComponent("Quote request — " + name);
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href =
        "mailto:info@evergreenpaintingpa.com?subject=" + subject + "&body=" + body;
    });
  }
})();
