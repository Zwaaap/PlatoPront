/* ==========================================================================
   1. MENU DATA
   ========================================================================== */

const DISHES = [
  // Ulam
  { id: 1,  name: "Chicken Adobo",              price: 85,  category: "Ulam",     emoji: "🍗", file: "chicken-adobo",              description: "Soy-vinegar braised chicken",                    isBestSeller: true },
  { id: 2,  name: "Pork Adobo",                 price: 90,  category: "Ulam",     emoji: "🍖", file: "pork-adobo",                 description: "Pork braised in soy sauce, vinegar and garlic" },
  { id: 3,  name: "Pork Sinigang",              price: 95,  category: "Ulam",     emoji: "🍲", file: "pork-sinigang",              description: "Sour tamarind soup with veggies",                isBestSeller: true },
  { id: 4,  name: "Kare-Kare",                  price: 120, category: "Ulam",     emoji: "🥘", file: "kare-kare",                  description: "Peanut stew with bagoong on the side",           isBestSeller: true },
  { id: 5,  name: "Pinakbet",                   price: 70,  category: "Ulam",     emoji: "🥬", file: "pinakbet",                   description: "Mixed vegetables in shrimp paste" },
  { id: 6,  name: "Lechon Kawali",              price: 110, category: "Ulam",     emoji: "🥓", file: "lechon-kawali",              description: "Crispy deep-fried pork belly",                   isBestSeller: true },
  { id: 7,  name: "Chicken Tinola",             price: 85,  category: "Ulam",     emoji: "🍗", file: "chicken-tinola",             description: "Ginger chicken soup with papaya" },
  { id: 8,  name: "Bistek Tagalog",             price: 105, category: "Ulam",     emoji: "🥩", file: "bistek-tagalog",             description: "Beef strips in soy-calamansi with onions" },
  { id: 9,  name: "Menudo",                     price: 95,  category: "Ulam",     emoji: "🍖", file: "menudo",                     description: "Pork and liver stew in tomato sauce" },
  { id: 10, name: "Afritada",                   price: 90,  category: "Ulam",     emoji: "🍗", file: "afritada",                   description: "Chicken in tomato sauce with potatoes" },
  { id: 11, name: "Caldereta",                  price: 120, category: "Ulam",     emoji: "🍖", file: "caldereta",                  description: "Spicy beef stew with liver spread" },
  { id: 12, name: "Mechado",                    price: 110, category: "Ulam",     emoji: "🥩", file: "mechado",                    description: "Beef braised in tomato and soy sauce" },
  { id: 13, name: "Dinuguan",                   price: 85,  category: "Ulam",     emoji: "🥘", file: "dinuguan",                   description: "Pork blood stew with vinegar and chili" },
  { id: 14, name: "Sisig",                      price: 115, category: "Ulam",     emoji: "🍳", file: "sisig",                      description: "Chopped pork on a sizzling plate",               isBestSeller: true },
  { id: 15, name: "Bulalo",                     price: 140, category: "Ulam",     emoji: "🍲", file: "bulalo",                     description: "Beef shank and bone marrow soup" },
  { id: 16, name: "Nilaga",                     price: 100, category: "Ulam",     emoji: "🍲", file: "nilaga",                     description: "Boiled beef or pork with cabbage and corn" },
  { id: 17, name: "Pritong Bangus",             price: 90,  category: "Ulam",     emoji: "🐟", file: "pritong-bangus",             description: "Fried milkfish with vinegar dip" },
  { id: 18, name: "Tortang Talong",             price: 60,  category: "Ulam",     emoji: "🍆", file: "tortang-talong",             description: "Eggplant omelette" },
  { id: 19, name: "Ginataang Kalabasa at Sitaw",price: 65,  category: "Ulam",     emoji: "🥥", file: "ginataang-kalabasa-at-sitaw",description: "Squash and string beans in coconut milk" },
  { id: 20, name: "Chopsuey",                   price: 75,  category: "Ulam",     emoji: "🥦", file: "chopsuey",                   description: "Stir-fried mixed vegetables" },
  { id: 21, name: "Lumpiang Shanghai (6 pcs)",  price: 70,  category: "Ulam",     emoji: "🥟", file: "lumpiang-shanghai",          description: "Crispy pork spring rolls" },
  { id: 22, name: "Pork Humba",                 price: 105, category: "Ulam",     emoji: "🍖", file: "pork-humba",                 description: "Sweet and savory braised pork belly" },
  { id: 23, name: "Laing",                      price: 75,  category: "Ulam",     emoji: "🍃", file: "laing",                      description: "Taro leaves in spicy coconut milk" },
  { id: 24, name: "Paksiw na Lechon",           price: 95,  category: "Ulam",     emoji: "🍖", file: "paksiw-na-lechon",           description: "Lechon simmered in sweet-sour liver sauce" },
  { id: 25, name: "Sinigang na Hipon",          price: 130, category: "Ulam",     emoji: "🦐", file: "sinigang-na-hipon",          description: "Sour shrimp soup with kangkong" },

  // Sides
  { id: 26, name: "Plain Rice",                 price: 15,  category: "Sides",    emoji: "🍚", file: "plain-rice",                 description: "Steamed and fluffy" },
  { id: 27, name: "Garlic Rice",                price: 25,  category: "Sides",    emoji: "🍚", file: "garlic-rice",                description: "Sinangag with toasted garlic" },
  { id: 28, name: "Sabaw ng Baboy",             price: 30,  category: "Sides",    emoji: "🍜", file: "sabaw-ng-baboy",             description: "Hot pork broth with veggies" },
  { id: 29, name: "Gulaman",                    price: 20,  category: "Sides",    emoji: "🍮", file: "gulaman",                    description: "Sweet jelly in brown sugar syrup" },
  { id: 30, name: "Atchara",                    price: 20,  category: "Sides",    emoji: "🥕", file: "atchara",                    description: "Pickled green papaya" },
  { id: 31, name: "Itlog na Maalat at Kamatis", price: 25,  category: "Sides",    emoji: "🥚", file: "itlog-na-maalat-at-kamatis", description: "Salted egg with sliced tomato" },
  { id: 32, name: "Ensaladang Talong",          price: 35,  category: "Sides",    emoji: "🍆", file: "ensaladang-talong",          description: "Grilled eggplant salad" },
  { id: 33, name: "Pritong Itlog",              price: 20,  category: "Sides",    emoji: "🍳", file: "pritong-itlog",              description: "Sunny-side-up fried egg" },
  { id: 34, name: "Bagoong Alamang",            price: 15,  category: "Sides",    emoji: "🦐", file: "bagoong-alamang",            description: "Sauteed shrimp paste" },
  { id: 35, name: "Java Rice",                  price: 25,  category: "Sides",    emoji: "🍛", file: "java-rice",                  description: "Rice cooked with turmeric and tomato" },

  // Merienda
  { id: 36, name: "Turon (2 pcs)",              price: 30,  category: "Merienda", emoji: "🍌", file: "turon",                      description: "Banana spring rolls with caramel" },
  { id: 37, name: "Halo-Halo",                  price: 65,  category: "Merienda", emoji: "🍧", file: "halo-halo",                  description: "Shaved ice with sweet toppings",                 isBestSeller: true },
  { id: 38, name: "Banana Cue",                 price: 20,  category: "Merienda", emoji: "🍌", file: "banana-cue",                 description: "Caramelized fried saba banana" },
  { id: 39, name: "Camote Cue",                 price: 20,  category: "Merienda", emoji: "🍠", file: "camote-cue",                 description: "Caramelized fried sweet potato" },
  { id: 40, name: "Puto (3 pcs)",               price: 25,  category: "Merienda", emoji: "🍥", file: "puto",                       description: "Steamed rice cakes" },
  { id: 41, name: "Kutsinta",                   price: 25,  category: "Merienda", emoji: "🍮", file: "kutsinta",                   description: "Chewy brown rice cakes with coconut" },
  { id: 42, name: "Bibingka",                   price: 40,  category: "Merienda", emoji: "🥞", file: "bibingka",                   description: "Rice cake baked with salted egg" },
  { id: 43, name: "Suman",                      price: 30,  category: "Merienda", emoji: "🌿", file: "suman",                      description: "Sticky rice in banana leaf" },
  { id: 44, name: "Biko",                       price: 35,  category: "Merienda", emoji: "🍘", file: "biko",                       description: "Sticky rice cake with latik" },
  { id: 45, name: "Pancit Canton",              price: 50,  category: "Merienda", emoji: "🍜", file: "pancit-canton",              description: "Stir-fried noodles with veggies" },
  { id: 46, name: "Palitaw",                    price: 30,  category: "Merienda", emoji: "🥥", file: "palitaw",                    description: "Sweet rice patties with grated coconut" },
  { id: 47, name: "Maruya",                     price: 25,  category: "Merienda", emoji: "🍌", file: "maruya",                     description: "Banana fritters with sugar" },

  // Drinks
  { id: 48, name: "Iced Tea",                   price: 25,  category: "Drinks",   emoji: "🧋", file: "iced-tea",                   description: "Cold and refreshing" },
  { id: 49, name: "Buko Juice",                 price: 35,  category: "Drinks",   emoji: "🥥", file: "buko-juice",                 description: "Fresh young coconut water and meat" },
  { id: 50, name: "Calamansi Juice",            price: 30,  category: "Drinks",   emoji: "🍋", file: "calamansi-juice",            description: "Sweet and sour calamansi" },
  { id: 51, name: "Melon Juice",                price: 30,  category: "Drinks",   emoji: "🍈", file: "melon-juice",                description: "Cantaloupe cooler" },
  { id: 52, name: "Salabat",                    price: 25,  category: "Drinks",   emoji: "🫖", file: "salabat",                    description: "Hot ginger tea" }
];

const CATEGORIES = ["All", "Ulam", "Sides", "Merienda", "Drinks"];
const DELIVERY_FEE = 30;


/* ==========================================================================
   2. PHOTO OVERRIDES & CREDITS
   By default, each dish loads from images/<file>.jpg.
   To use an online image instead, add it to ONLINE_PHOTOS and PHOTO_CREDITS.
   ========================================================================== */

const WIKIMEDIA_BASE = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const ONLINE_PHOTOS = {
  "pork-adobo":     `${WIKIMEDIA_BASE}Philippine_pork_adobo_cooked_in_a_kawali.jpg?width=640`,
  "chicken-tinola": `${WIKIMEDIA_BASE}9826Tinolang_manok_01.jpg?width=640`
};

const PHOTO_CREDITS = {
  ...(window.CREDITS || {}),
  "pork-adobo": {
    u:  "https://commons.wikimedia.org/wiki/File:Philippine_pork_adobo_cooked_in_a_kawali.jpg",
    by: "Paul Goyette, CC BY-SA 2.0"
  },
  "chicken-tinola": {
    u:  "https://commons.wikimedia.org/wiki/File:9826Tinolang_manok_01.jpg",
    by: "Judgefloro, CC0 1.0"
  }
};


/* ==========================================================================
   3. STATE & HELPERS
   ========================================================================== */

let cart = {};
let activeCategory = "All";

const $ = (id) => document.getElementById(id);

function getDishById(id) {
  return DISHES.find((dish) => dish.id === Number(id));
}

function updateCartCount() {
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  $("cc").textContent = totalItems;
}


/* ==========================================================================
   4. HTML TEMPLATE BUILDERS
   ========================================================================== */

function createDishImage(dish, className = "") {
  const src = ONLINE_PHOTOS[dish.file] || `images/${dish.file}.jpg`;
  const classAttr = className ? ` class="${className}"` : "";

  return `<img${classAttr} src="${src}" alt="${dish.name}" loading="lazy" onerror="this.remove()">`;
}

function createDishCard(dish) {
  return `
    <div class="card">
      <div class="pic" aria-hidden="false">
        <span class="tag">${dish.category}</span>
        ${dish.emoji}${createDishImage(dish)}
      </div>
      <div class="body">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <div class="row">
          <span class="price">₱${dish.price}</span>
          <button class="btn" data-add="${dish.id}" aria-label="Add ${dish.name} to order">Add</button>
        </div>
      </div>
    </div>
  `;
}


/* ==========================================================================
   5. RENDER FUNCTIONS
   ========================================================================== */

function renderMenu() {
  $("tabs").innerHTML = CATEGORIES.map((category) => {
    const isActive = category === activeCategory ? " on" : "";
    return `<button class="chip${isActive}" data-cat="${category}">${category}</button>`;
  }).join("");

  const visibleDishes = DISHES.filter(
    (dish) => activeCategory === "All" || dish.category === activeCategory
  );

  $("mgrid").innerHTML = visibleDishes.map(createDishCard).join("");
}

function renderCart() {
  const itemIds = Object.keys(cart);

  if (itemIds.length === 0) {
    $("cart").innerHTML = `
      <div style="text-align:center">
        <div class="emptyart"><img src="images/logo.png" alt=""></div>
        <p>Your order is empty. <a href="#menu">Pick dishes from the menu</a>.</p>
      </div>
    `;
    $("tot").textContent = "";
    return;
  }

  let subtotal = 0;

  $("cart").innerHTML = itemIds.map((id) => {
    const dish = getDishById(id);
    const quantity = cart[id];
    subtotal += dish.price * quantity;

    return `
      <div class="item">
        <span>
          ${createDishImage(dish, "thumb")}
          <span>
            ${dish.name}<br>
            <small class="price">₱${dish.price}</small>
          </span>
        </span>
        <span class="qty">
          <button data-m="${id}" aria-label="Remove one ${dish.name}">−</button>
          <span>${quantity}</span>
          <button data-add="${id}" aria-label="Add one ${dish.name}">+</button>
        </span>
      </div>
    `;
  }).join("");

  $("tot").textContent = `Subtotal: ₱${subtotal} (+ ₱${DELIVERY_FEE} delivery)`;
}

function renderCredits() {
  $("credits-list").innerHTML = DISHES.map((dish) => {
    const credit = PHOTO_CREDITS[dish.file];
    const query = encodeURIComponent(`${dish.name} Filipino dish`);
    const googleUrl = `https://www.google.com/search?tbm=isch&q=${query}`;
    const wikimediaUrl = `https://commons.wikimedia.org/w/index.php?ns6=1&search=${query}`;

    const linkHtml = credit
      ? `<a href="${credit.u}" target="_blank" rel="noopener">photo by ${credit.by}</a>`
      : `<a href="${wikimediaUrl}" target="_blank" rel="noopener">Wikimedia Commons</a> or <a href="${googleUrl}" target="_blank" rel="noopener">Google</a>`;

    return `<li><strong>${dish.name}</strong>: ${linkHtml}</li>`;
  }).join("");
}


/* ==========================================================================
   6. ROUTING
   ========================================================================== */

function handleRoute() {
  let pageId = (location.hash || "#home").slice(1);
  if (!$(pageId)) pageId = "home";

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("on", page.id === pageId);
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.toggle("on", link.dataset.p === pageId);
  });

  if (pageId === "order") renderCart();
  if (pageId === "credits") renderCredits();

  window.scrollTo(0, 0);
}


/* ==========================================================================
   7. EVENT LISTENERS
   ========================================================================== */

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add], [data-m], [data-cat]");
  if (!button) return;

  // Add item to cart
  if (button.dataset.add) {
    const id = button.dataset.add;
    cart[id] = (cart[id] || 0) + 1;
    updateCartCount();

    if ($("order").classList.contains("on")) {
      renderCart();
    } else {
      button.textContent = "Added!";
      setTimeout(() => {
        button.textContent = "Add";
      }, 900);
    }
  }

  // Remove one item from cart
  if (button.dataset.m) {
    const id = button.dataset.m;
    cart[id]--;
    if (cart[id] <= 0) delete cart[id];
    updateCartCount();
    renderCart();
  }

  // Switch menu category
  if (button.dataset.cat) {
    activeCategory = button.dataset.cat;
    renderMenu();
  }
});

$("place").addEventListener("click", () => {
  const statusBox = $("ok");
  const customerName = $("n").value.trim();
  const address = $("l").value.trim();
  const phone = $("ph").value.trim();

  if (Object.keys(cart).length === 0 || !customerName || !address || !phone) {
    statusBox.style.background = "#B3340E";
    statusBox.textContent = "Add at least one dish and fill in your name, address, and mobile number.";
    statusBox.style.display = "block";
    return;
  }

  statusBox.style.background = "#2e7d32";
  statusBox.textContent = `Order placed. Thank you, ${customerName}! Your food is on its way.`;
  statusBox.style.display = "block";

  cart = {};
  updateCartCount();
  renderCart();
});

$("send").addEventListener("click", () => {
  $("ok2").style.display = "block";
});


/* ==========================================================================
   8. INITIALIZATION
   ========================================================================== */

$("best").innerHTML = DISHES
  .filter((dish) => dish.isBestSeller)
  .map(createDishCard)
  .join("");

renderMenu();
window.addEventListener("hashchange", handleRoute);
handleRoute();