const TEST_PHONE = "+4740564115";

const catalog = [{"name": "Rekvisita", "items": [{"name": "GA beger 36 cl", "unit": "25"}, {"name": "Store lokk", "unit": "50"}, {"name": "Vinglass", "unit": "15"}, {"name": "Mineralvannskopp (hvite)", "unit": "30"}, {"name": "Tallerken 24 cm", "unit": "100"}, {"name": "Tallerken 17 cm", "unit": "50"}, {"name": "Pølselommer", "unit": "100"}, {"name": "Rørepinne", "unit": "500"}, {"name": "Ølbeger plast", "unit": "65"}, {"name": "Skje stor 16 cm", "unit": "100"}, {"name": "Teskje 11 cm", "unit": "100"}, {"name": "Papir takeaway pose GA", "unit": "10"}, {"name": "Kanisterpose til bakst", "unit": "50"}, {"name": "Kaffefilter", "unit": "250"}, {"name": "Takeaway-eske", "unit": "25"}, {"name": "Pizzabrett", "unit": "25"}, {"name": "Form til middager, 3-delt", "unit": "25"}, {"name": "Potetmosbrett", "unit": "100"}, {"name": "Lapp til åpne pølseposer og ruccolaposer", "unit": "1 rull"}, {"name": "Kakeserviett Paper Doily 28 cm", "unit": "15"}, {"name": "Burgerlommer", "unit": "25"}, {"name": "Grillform i aluminium (til burger og lasagne)", "unit": "5"}, {"name": "Stålull", "unit": "1"}, {"name": "Bestikkpose", "unit": "20"}, {"name": "Antisklimatter", "unit": "100"}, {"name": "Kaffeholder 2 beger", "unit": "10"}]}, {"name": "Tilbehør", "items": [{"name": "Kaffemelk", "unit": "1 eske"}, {"name": "Ketchup Idun", "unit": "1"}, {"name": "Sennep Idun", "unit": "1"}, {"name": "Rock Salt m/kvern 140 g", "unit": "1"}, {"name": "Tellicherry-pepper m/kvern", "unit": "1"}, {"name": "Sitronflaske", "unit": "1"}, {"name": "Brunt sukker", "unit": "50"}, {"name": "Hvit sukker", "unit": "50"}, {"name": "Suketter", "unit": "50"}, {"name": "Tannpirkere", "unit": "100"}, {"name": "Tørket løk", "unit": "1"}, {"name": "Twinings grønn te med sitron", "unit": "1"}, {"name": "Twinings English Breakfast Tea", "unit": "1"}, {"name": "Twinings nype og hibiskus", "unit": "1"}, {"name": "Honning", "unit": "1"}, {"name": "Oregano", "unit": "1"}, {"name": "Piffikrydder", "unit": "1"}, {"name": "Persille", "unit": "1"}]}, {"name": "Forbruksmateriell", "items": [{"name": "Kaffetrakter rengjøring", "unit": "1"}, {"name": "Suma D2 rengjøringsmiddel", "unit": "1"}, {"name": "Suma D3 - desinfeksjonsspray sterk", "unit": "1"}, {"name": "WipeClean Ethanol disinfection", "unit": "1"}, {"name": "Bakepapir", "unit": "1 rull"}, {"name": "Maskindisk Premium", "unit": "1"}, {"name": "Tørremiddel A7", "unit": "1"}, {"name": "Antibac for hender", "unit": "1"}, {"name": "Antibac overflatespray", "unit": "1"}, {"name": "Håndsåpe", "unit": "1"}, {"name": "Minitørk", "unit": "1 rull"}, {"name": "Søppelsekk 125 L", "unit": "1 rull"}, {"name": "Nitrilhansker", "unit": "200 i eske"}, {"name": "Oppvaskhansker", "unit": "1"}, {"name": "Burnshield", "unit": "1"}, {"name": "Håndkrem", "unit": "1"}, {"name": "Dispenserserviett, hvit, 2-lags", "unit": "1"}, {"name": "Diskbørste", "unit": "1"}, {"name": "Svinnposer (fryseposer)", "unit": "1 rull"}, {"name": "Tape klar", "unit": "1 rull"}, {"name": "Serviett 33 × 33 cm, vanilje, 3-lags", "unit": "1"}]}, {"name": "Utstyr", "items": [{"name": "Display disk", "unit": "1"}, {"name": "Boks til te", "unit": "1"}, {"name": "Serviettdispenser brun", "unit": "1"}, {"name": "Kakefat", "unit": "1"}, {"name": "Kakelokk", "unit": "1"}, {"name": "Kaffekolbe", "unit": "1"}, {"name": "Grå bolle til frukt", "unit": "1"}, {"name": "Pizzahjul", "unit": "1"}, {"name": "Pølseklype", "unit": "1"}, {"name": "Pølseholder til disken", "unit": "1"}, {"name": "Pølsepapirholder", "unit": "1"}, {"name": "Saks", "unit": "1"}, {"name": "Vannkoker i rustfritt stål", "unit": "1"}, {"name": "Grønnsakskniv", "unit": "1"}, {"name": "Vinåpner", "unit": "1"}, {"name": "\"Kjøpt i kafeen\"-klistremerker", "unit": "1 rull"}, {"name": "Post-it", "unit": "1"}]}, {"name": "Snacks til Ekstra / Hvile", "items": [{"name": "Wasa knekkebrød", "unit": "1 eske"}, {"name": "Smålsulten", "unit": "1 eske"}, {"name": "First Price vann", "unit": "6-pakning"}, {"name": "GA sjokolade", "unit": "1 eske"}]}];

const state = {};
const categoriesEl = document.getElementById("categories");
const togEl = document.getElementById("tog");
const settEl = document.getElementById("sett");
const noteEl = document.getElementById("note");
const dateEl = document.getElementById("date");
const redskaperEl = document.getElementById("redskaper");
const nameEl = document.getElementById("name");
const errorEl = document.getElementById("error");

function keyFor(category, name) {
  return category + "::" + name;
}

function changeCount(key, delta) {
  state[key] = Math.max(0, (state[key] || 0) + delta);
  const el = document.querySelector(`[data-count="${CSS.escape(key)}"]`);
  if (el) {
    el.textContent = state[key];
    el.classList.toggle("active", state[key] > 0);
  }
}

function renderCatalog() {
  catalog.forEach((category, index) => {
    const details = document.createElement("details");
    details.className = "category";
    details.open = false;

    const summary = document.createElement("summary");
    summary.textContent = category.name;
    details.appendChild(summary);

    category.items.forEach(item => {
      const key = keyFor(category.name, item.name);
      state[key] = 0;

      const row = document.createElement("div");
      row.className = "item";

      const text = document.createElement("div");
      text.innerHTML = `<div class="item-name">${escapeHtml(item.name)}</div>
                        <div class="unit">Enh: ${escapeHtml(String(item.unit))}</div>`;

      const counter = document.createElement("div");
      counter.className = "counter";

      const minus = document.createElement("button");
      minus.type = "button";
      minus.textContent = "−";
      minus.setAttribute("aria-label", "Minus");
      minus.addEventListener("click", () => changeCount(key, -1));

      const count = document.createElement("div");
      count.className = "count";
      count.dataset.count = key;
      count.textContent = "0";
      count.title = "Klikk for å skrive inn antall";
      count.addEventListener("click", () => {
        const value = prompt("Antall:", String(state[key] || 0));
        if (value === null) return;
        const num = Math.max(0, parseInt(value, 10) || 0);
        state[key] = num;
        count.textContent = num;
        count.classList.toggle("active", num > 0);
      });

      const plus = document.createElement("button");
      plus.type = "button";
      plus.textContent = "+";
      plus.setAttribute("aria-label", "Pluss");
      plus.addEventListener("click", () => changeCount(key, 1));

      counter.append(minus, count, plus);
      row.append(text, counter);
      details.appendChild(row);
    });

    categoriesEl.appendChild(details);
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(date) {
  return new Intl.DateTimeFormat("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date);
}

function setTodayDate() {
  dateEl.value = formatDate(new Date());
}

function validate() {
  const missingTrain = !togEl.value.trim() || !settEl.value.trim();
  const missingName = !nameEl.value.trim();

  if (missingTrain || missingName) {
    const missing = [];
    if (missingTrain) missing.push("TOG og SETT");
    if (missingName) missing.push("navn / etternavn");
    errorEl.textContent = "Fyll inn " + missing.join(" og ") + " før du sender.";
    errorEl.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }

  errorEl.hidden = true;
  return true;
}

function buildMessage() {
  const tog = togEl.value.trim();
  const sett = settEl.value.trim();
  const date = dateEl.value.trim();
  const name = nameEl.value.trim();
  const lines = [`TOG ${tog} | SETT ${sett}`, `Dato: ${date}`, `Navn: ${name}`, ""];

  let anything = false;

  catalog.forEach(category => {
    const selected = category.items
      .map(item => {
        const count = state[keyFor(category.name, item.name)] || 0;
        return count > 0 ? `${count}x ${item.name}` : null;
      })
      .filter(Boolean);

    if (selected.length) {
      anything = true;
      let categoryName = category.name.toUpperCase();
      if (category.name === "Snacks til Ekstra / Hvile") categoryName = "SNACKS / HVILE";
      lines.push(categoryName);
      lines.push(...selected);
      lines.push("");
    }
  });

  if (redskaperEl.checked) {
    lines.push("Redskaper ønskes");
    lines.push("");
  }

  if (!anything && !redskaperEl.checked) {
    lines.push("(Ingen varer valgt)");
    lines.push("");
  }

  const note = noteEl.value.trim();
  if (note) lines.push(`Beskjed: ${note}`);

  return lines.join("\n").trim();
}

function resetForm() {
  // Zeruj wszystkie wybrane ilości
  Object.keys(state).forEach(key => {
    state[key] = 0;
    const el = document.querySelector(`[data-count="${CSS.escape(key)}"]`);
    if (el) {
      el.textContent = "0";
      el.classList.remove("active");
    }
  });

  // Wyczyść dane zamówienia
  togEl.value = "";
  settEl.value = "";
  noteEl.value = "";
  nameEl.value = "";
  redskaperEl.checked = false;
  localStorage.removeItem("tog");
  localStorage.removeItem("sett");
  errorEl.hidden = true;
  setTodayDate();

  // Zwiń wszystkie kategorie
  document.querySelectorAll(".category").forEach(details => {
    details.open = false;
  });

  // Zamknij podgląd, jeśli był otwarty
  const previewDialog = document.getElementById("previewDialog");
  if (previewDialog && previewDialog.open) {
    previewDialog.close();
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

function openSms() {
  if (!validate()) return;

  // Najpierw zapamiętaj treść wiadomości,
  // potem wyczyść formularz, aby po powrocie był gotowy na nowe zamówienie.
  const message = buildMessage();
  const body = encodeURIComponent(message);
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const separator = isiOS ? "&" : "?";
  const smsUrl = `sms:${TEST_PHONE}${separator}body=${body}`;

  resetForm();

  // Otwórz aplikację SMS z przygotowaną wiadomością.
  window.location.href = smsUrl;
}

document.getElementById("sendBtn").addEventListener("click", openSms);
document.getElementById("sendFromPreview").addEventListener("click", openSms);

const dialog = document.getElementById("previewDialog");
document.getElementById("previewBtn").addEventListener("click", () => {
  if (!validate()) return;
  document.getElementById("previewText").textContent = buildMessage();
  if (typeof dialog.showModal === "function") dialog.showModal();
});
document.getElementById("closePreview").addEventListener("click", () => dialog.close());

[togEl, settEl].forEach(el => {
  el.value = localStorage.getItem(el.id) || "";
  el.addEventListener("input", () => localStorage.setItem(el.id, el.value));
});

renderCatalog();
setTodayDate();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
