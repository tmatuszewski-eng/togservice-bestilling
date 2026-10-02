const TEST_PHONE = "+4740564115";

const catalog = [{"name": "Rekvisita", "items": [{"name": "GA beger 36 cl", "unit": "25"}, {"name": "Store lokk", "unit": "50"}, {"name": "Vinglass", "unit": "15"}, {"name": "Mineralvannskopp (HVITE)", "unit": "30"}, {"name": "Tallerken 24cm", "unit": "100"}, {"name": "Tallerken 17 cm", "unit": "50"}, {"name": "Pølselommer", "unit": "100"}, {"name": "Rørepinne", "unit": "500"}, {"name": "Ølbeger Plast", "unit": "65"}, {"name": "Skje stor 16cm", "unit": "100"}, {"name": "Teskje 11cm", "unit": "100"}, {"name": "Papir takeaway pose GA", "unit": "10"}, {"name": "Kanisterpose til Bakst", "unit": "50"}, {"name": "Kaffefilter", "unit": "250"}, {"name": "Take Away eske", "unit": "25"}, {"name": "Pizzabrett", "unit": "25"}, {"name": "Form til middager, 3delt", "unit": "25"}, {"name": "Potetmosbrett", "unit": "100"}, {"name": "Lapp til åpnet pølseposer & ruccolaposer", "unit": "1 rull"}, {"name": "Kakeserviett Paper Doily 28 cm", "unit": "15"}, {"name": "Burgerlommer", "unit": "25"}, {"name": "Grillform aluminum (til burger & lasagne)", "unit": "5"}, {"name": "Stålull", "unit": "1"}, {"name": "Bestikkpose", "unit": "20"}, {"name": "Antisklimatter", "unit": "100"}, {"name": "Kaffeholder 2 beger", "unit": "10"}]}, {"name": "Tilbehør", "items": [{"name": "Kaffemelk", "unit": "1 eske"}, {"name": "Ketchup Idun", "unit": "1"}, {"name": "Sennep Idun", "unit": "1"}, {"name": "Rock Salt m/kvern 140g", "unit": "1"}, {"name": "Tellicherry pepper m/kvern", "unit": "1"}, {"name": "Sitronflaske", "unit": "1"}, {"name": "Brunt sukker", "unit": "50"}, {"name": "Hvit sukker", "unit": "50"}, {"name": "Suketter", "unit": "50"}, {"name": "Tannpetare (tannpirkere)", "unit": "100"}, {"name": "Tørket løk", "unit": "1"}, {"name": "Twinings Grønn Te sitron", "unit": "1"}, {"name": "Twinings English Breakfast Tea", "unit": "1"}, {"name": "Twinings Nype og Hibiskus", "unit": "1"}, {"name": "Honning", "unit": "1"}, {"name": "Oregano", "unit": "1"}, {"name": "Piffikrydder", "unit": "1"}, {"name": "Persille", "unit": "1"}]}, {"name": "Forbruksmateriell", "items": [{"name": "Kaffetrakter rengjøring", "unit": "1"}, {"name": "Suma D2 Rengjøringsmiddel", "unit": "1"}, {"name": "Suma D3 - Desifenskjon spray stark", "unit": "1"}, {"name": "WipeClean Ethanol disinfection", "unit": "1"}, {"name": "Bakepapir", "unit": "1 rull"}, {"name": "MASKINDISK PREMIUM", "unit": "1"}, {"name": "Tørremiddel A7", "unit": "1"}, {"name": "Antibac for hender", "unit": "1"}, {"name": "Antibac overflatespray", "unit": "1"}, {"name": "Håndsåpe", "unit": "1"}, {"name": "Minitørk", "unit": "1 rull"}, {"name": "Søppelsekk 125L", "unit": "1 rull"}, {"name": "Nitril hansker", "unit": "200 i eske"}, {"name": "Oppvaskhansker", "unit": "1"}, {"name": "Burnshield", "unit": "1"}, {"name": "Håndkrem", "unit": "1"}, {"name": "Dispenserserviett Hvit 2-lags", "unit": "1"}, {"name": "Diskbørste", "unit": "1"}, {"name": "Svinnposer (fryseposer)", "unit": "1 rull"}, {"name": "Tape klar", "unit": "1 rull"}, {"name": "Serviett 33x33 cm Vanilje 3-lags", "unit": "1"}]}, {"name": "Utstyr", "items": [{"name": "Display Disk", "unit": "1"}, {"name": "Boks til te", "unit": "1"}, {"name": "Serviettdispenser brun", "unit": "1"}, {"name": "Kakefat", "unit": "1"}, {"name": "Kakelokk", "unit": "1"}, {"name": "Kaffekolbe", "unit": "1"}, {"name": "Grå bolle til frukt", "unit": "1"}, {"name": "Pizzahjul", "unit": "1"}, {"name": "Pølseklype", "unit": "1"}, {"name": "Pølseholder til disken", "unit": "1"}, {"name": "Pølsepapirholder", "unit": "1"}, {"name": "Saks", "unit": "1"}, {"name": "Vannkoker i rustfritt stål", "unit": "1"}, {"name": "Grønnsakskniv", "unit": "1"}, {"name": "Vinåpner", "unit": "1"}, {"name": "\"Kjøpt i kafeen\"-klistremerker", "unit": "1 rull"}, {"name": "Post it", "unit": "1"}]}, {"name": "Snacks til Ekstra / Hvile", "items": [{"name": "Wasa knekkebrød", "unit": "1 eske"}, {"name": "Smålsulten", "unit": "1 eske"}, {"name": "First price vann", "unit": "6 pack"}, {"name": "GA sjokolade", "unit": "1 eske"}]}];

const state = {};
const categoriesEl = document.getElementById("categories");
const togEl = document.getElementById("tog");
const settEl = document.getElementById("sett");
const noteEl = document.getElementById("note");
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

function validate() {
  const ok = togEl.value.trim() && settEl.value.trim();
  errorEl.hidden = !!ok;
  if (!ok) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }
  return true;
}

function buildMessage() {
  const tog = togEl.value.trim();
  const sett = settEl.value.trim();
  const lines = [`TOG ${tog} | SETT ${sett}`, ""];

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
      if (category.name === "Snacks til Ekstra / Hvile") {
        categoryName = "SNACKS / HVILE";
      }

      lines.push(categoryName);
      lines.push(...selected);
      lines.push("");
    }
  });

  if (!anything) {
    lines.push("(Ingen varer valgt)");
    lines.push("");
  }

  const note = noteEl.value.trim();
  if (note) {
    lines.push(`Beskjed: ${note}`);
  }

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
  localStorage.removeItem("tog");
  localStorage.removeItem("sett");
  errorEl.hidden = true;

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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
