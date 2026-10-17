/* PALLZZ STORE settings: edit the values below before publishing. */
const STORE = {
  name: "PALLZZ STORE",
  // Indonesian number in international format: 62 + number without the leading 0.
  whatsapp: "628812940024",
  // Add the real business address when available. Do not publish a guessed address.
  address: "",
  // Optional: paste a Google Maps share URL for the real business location.
  mapsUrl: ""
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function whatsappUrl(message = "Halo PALLZZ STORE, saya ingin bertanya.") {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3000);
}

// Intro animation; the page remains usable if animations are disabled.
window.addEventListener("load", () => {
  window.setTimeout(() => $("#intro")?.classList.add("hide"), 1250);
});

$("#year").textContent = new Date().getFullYear();

// Mobile navigation
const menuToggle = $("#menuToggle");
const nav = $("#nav");
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.textContent = opened ? "×" : "☰";
});
$$(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

// WhatsApp buttons
$$("[data-whatsapp]").forEach(link => {
  link.href = whatsappUrl(link.dataset.whatsapp);
  link.target = "_blank";
  link.rel = "noopener";
});

// Service cards prepare a contextual WhatsApp message.
$$("[data-order]").forEach(link => {
  link.href = whatsappUrl(`Halo ${STORE.name}, saya ingin bertanya tentang ${link.dataset.order}. Boleh minta detail dan harga terbaru?`);
  link.target = "_blank";
  link.rel = "noopener";
});

// Gallery filter and preview dialog
const filters = $$(".filter");
const galleryItems = $$(".gallery-item");
const galleryCount = $("#galleryCount");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.toggle("active", item === button));
  const type = button.dataset.filter;
  let visible = 0;
  galleryItems.forEach(item => {
    const show = type === "all" || item.dataset.kind === type;
    item.hidden = !show;
    if (show) visible++;
  });
  galleryCount.textContent = `${visible} item`;
}));

const dialog = $("#galleryDialog");
galleryItems.forEach(item => item.addEventListener("click", () => {
  $("#dialogTitle").textContent = item.dataset.title;
  $("#dialogArt").textContent = item.dataset.kind === "video" ? "▶" : "✧";
  if (typeof dialog.showModal === "function") dialog.showModal();
  else showToast("Galeri: " + item.dataset.title);
}));
$("#dialogClose").addEventListener("click", () => dialog.close());
$("#dialogOk").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

// Order form: validates input and opens WhatsApp with a prefilled message.
// It does not send anything automatically; the customer reviews and sends it.
$("#orderForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const get = name => String(form.get(name) || "").trim();
  const customerPhone = get("customerPhone");
  if (customerPhone.replace(/\D/g, "").length < 8) {
    showToast("Periksa kembali nomor WhatsApp kamu.");
    $("#customerPhone").focus();
    return;
  }
  const message = [
    `Halo ${STORE.name}, saya ingin melakukan pemesanan.`,
    "",
    `Nama: ${get("customerName")}`,
    `WhatsApp pelanggan: ${customerPhone}`,
    `Alamat/kota: ${get("customerAddress") || "-"}`,
    `Produk/layanan: ${get("customerProduct")}`,
    `Detail pesanan: ${get("customerDetail")}`,
    `Catatan: ${get("customerNote") || "-"}`,
    "",
    "Mohon info ketersediaan dan harga terbaru. Terima kasih."
  ].join("\n");
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  showToast("WhatsApp dibuka. Periksa pesan lalu tekan Kirim.");
});

// Address and map link remain intentionally unconfigured until the owner supplies them.
if (STORE.address) {
  $("#storeAddress").textContent = STORE.address;
  $(".location-section .section-heading .muted").textContent = "Informasi lokasi bisnis PALLZZ STORE.";
}
if (STORE.mapsUrl) {
  const mapLink = $(".location-info .button");
  mapLink.href = STORE.mapsUrl;
  mapLink.textContent = "Lihat lokasi di Google Maps ↗";
}
