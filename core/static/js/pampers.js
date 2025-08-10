



// /static/js/products.js
document.addEventListener("DOMContentLoaded", () => {
  // PAGE DETECTION (you can also set <body data-page="pampers"> in templates for more control)
  const pageNameFromBody = document.body.dataset.page;
  const pageName = pageNameFromBody || (window.location.pathname.split("/").pop().replace(".html", "") || "pampers");
  console.log("[products.js] pageName:", pageName);

  // PRODUCT DATA (edit the arrays below for each page as needed)
  const productData = {
    pampers: [
      { name: "Diaper Pants", price: 680, mrp: 800, img: "/static/images/diaperpants.png", category: "Diaper Pants", rating: 5 },
      { name: "Super Cute's", price: 450, mrp: 500, img: "/static/images/supercutes.png", category: "Super Cute's", rating: 4 },
      { name: "Mee Premium", price: 700, mrp: 1040, img: "/static/images/meepremium.png", category: "Mee Premium", rating: 4.5 },
      { name: "Mee Diaper Pants", price: 580, mrp: 860, img: "/static/images/meediaperpants.png", category: "Mee Diaper Pants", rating: 5 },
      { name: "Mee Pampers", price: 800, mrp: 950, img: "/static/images/meepampers.png", category: "Diaper Pants", rating: 5 },
      { name: "Diaper Combo", price: 1300, mrp: 1850, img: "/static/images/diapercombo.png", category: "Diaper Combo", rating: 5 }
    ],
    bottle: [
      { name: "Mee Steel bottle", price: 466, mrp: 499, img: "/static/images/steel.png", category: "Steel Bottle", rating: 5 },
      { name: "Luvlap", price: 300, mrp: 340, img: "/static/images/luvlap.png", category: "Plastic Bottle", rating: 4 },
      { name: "Philips", price: 600, mrp: 699, img: "/static/images/philips.png", category: "Premium Bottle", rating: 4.5 },
      { name: "Aveta", price: 300, mrp: 350, img: "/static/images/aveeta.png", category: "Plastic Bottle", rating: 5 },
      { name: "Chicco", price: 499, mrp: 550, img: "/static/images/chicco.png", category: "Steel Bottle", rating: 5 },
      { name: "Small Wonder", price: 480, mrp: 520, img: "/static/images/smallwonder.png", category: "Plastic Bottle", rating: 5 }
    ],
    girl: [
      { name: "Halemons Floral", price: 800, mrp: 1000, img: "/static/images/girl1.png", category: "Dress", rating: 5 },
      { name: "Halemons Victoria", price: 600, mrp: 850, img: "/static/images/girl2.png", category: "Dress", rating: 4.5 },
      { name: "Newborn Cutie", price: 1200, mrp: 1500, img: "/static/images/girl3.png", category: "Gown", rating: 5 },
      { name: "Fareto Baby", price: 350, mrp: 500, img: "/static/images/girl4.png", category: "Top", rating: 4 },
      { name: "Zibiyu ", price: 900, mrp: 1200, img: "/static/images/girl5.png", category: "Dress", rating: 5 },
      { name: "Poppees", price: 500, mrp: 700, img: "/static/images/girl6.png", category: "Dress", rating: 4 }
    ],
   soap: [
      { name: "Gentle Baby Soap", price: 382, mrp: 466, img: "/static/images/soap1.png", category: "Naturalsoap", rating: 5 },
      { name: "Baby Soap", price: 325, mrp: 500, img: "/static/images/soap2.png", category: "soap", rating: 4.5 },
      { name: "Natural soap", price: 385, mrp: 450, img: "/static/images/soap3.png", category: "Normal soap", rating: 5 },
      { name: "Pro Baby Soap", price: 340, mrp: 500, img: "/static/images/soap4.png", category: "soap", rating: 4 },
      { name: "Mee Baby soap", price: 390, mrp: 680, img: "/static/images/soap5.png", category: "Baby soap", rating: 5 },
      { name: "Milk Baby soap", price: 400, mrp: 700, img: "/static/images/soap6.png", category: "soap", rating: 4 }
    ],
     stroller: [
      { name: "Twin Baby", price: 3829, mrp: 4668, img: "/static/images/stroll1.png", category: " Big stroller", rating: 5 },
      { name: "Baby Rocker", price: 3250, mrp: 5000, img: "/static/images/s2.png", category: "stroller", rating: 4.5 },
      { name: "Lavern", price: 3850, mrp: 4500, img: "/static/images/s3.png", category: "small stroller", rating: 5 },
      { name: "Rock roll", price: 3405, mrp: 5000, img: "/static/images/s4.png", category: "stroller", rating: 4 },
      { name: "Kinger", price: 3900, mrp: 6800, img: "/static/images/s5.png", category: " medium stroller", rating: 5 },
      { name: "Bravo", price: 4000, mrp: 7000, img: "/static/images/s6.png", category: "stroller", rating: 4 }
    ],
      offer: [
      { name: "Diaper Combo", price: 1300, mrp: 1850, img: "/static/images/diapercombo.png", category: "Diaper Combo", rating: 5 },
      { name: "Marcus", price: 1199, mrp: 1460, img: "/static/images/marcus.png", category: "Dress", rating: 4.5 },
    { name: "Halemons Floral", price: 800, mrp: 1000, img: "/static/images/girl1.png", category: "Dress", rating: 5 },
      { name: "Natural soap", price: 385, mrp: 450, img: "/static/images/soap3.png", category: "soap", rating: 5 },
      { name: "Lavern", price: 3850, mrp: 4500, img: "/static/images/s3.png", category: "stroller", rating: 5 },
      { name: "Philips", price: 600, mrp: 699, img: "/static/images/philips.png", category: "Premium Bottle", rating: 4.5 },

    ],
       boy: [
      { name: "Mama miel baby", price: 3200, mrp: 3850, img: "/static/images/b1.png", category: "Dress", rating: 5 },
      { name: "Marcus", price: 1199, mrp: 1460, img: "/static/images/marcus.png", category: "Dress", rating: 4.5 },
    { name: "Caleb", price: 800, mrp: 1000, img: "/static/images/b3.png", category: "Dress", rating: 5 },
      { name: "Mee mee premium", price: 3850, mrp: 4550, img: "/static/images/b4.png", category: "dress", rating: 5 },
      { name: "Saphis", price: 3850, mrp: 4500, img: "/static/images/b5.png", category: "dress", rating: 5 },
      { name: "Archer", price: 600, mrp: 699, img: "/static/images/b6.png", category: "dress", rating: 4.5 },

    ],
  };

  // load products for current page (safe)
  let products = Array.isArray(productData[pageName]) ? [...productData[pageName]] : [];
  console.log("[products.js] initial products:", products.length);

  // if none found, show a message and stop
  const container = document.getElementById("product-container");
  const pagination = document.getElementById("pagination");
  if (!container) {
    console.error("[products.js] No #product-container found in DOM. Make sure your page has <div id='product-container'></div>");
    return;
  }

  if (products.length === 0) {
    container.innerHTML = `<p style="padding:20px;text-align:center;color:#666">No products found for page: <strong>${pageName}</strong></p>`;
    if (pagination) pagination.innerHTML = "";
    console.warn(`[products.js] no products for page "${pageName}" — check productData keys or set <body data-page="${pageName}">`);
    return;
  }

  // safe fill to 40 items (doesn't loop infinitely)
  const base = [...products];
  while (products.length < 40 && base.length > 0) {
    const needed = Math.min(base.length, 40 - products.length);
    products.push(...base.slice(0, needed));
  }
  console.log("[products.js] total products after fill:", products.length);

  // pagination/filter state
  const itemsPerPage = 6;
  let currentPage = 1;
  let filteredProducts = [...products];

  // --- build dynamic filter UI (if filter panel exists) ---
  const filterPanel = document.getElementById("filterPanel") || document.querySelector(".filter-box");
  const allCategories = Array.from(new Set(products.map(p => p.category))).sort();
  if (filterPanel) {
    // build checkboxes from categories
    filterPanel.innerHTML = `<h3>Filter</h3>` + allCategories.map(cat =>
      `<label><input type="checkbox" value="${cat}"> ${cat}</label>`
    ).join("");
  }

  // restore saved filters (global across pages)
  const STORAGE_KEY = "selectedFilters";
  const savedFilters = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  // set checkbox states and attach handlers
  const checkboxSelector = filterPanel ? `${filterPanel.tagName === "DIV" ? `#${filterPanel.id}` : ".filter-box"} input[type="checkbox"]` : '.filter-box input[type="checkbox"]';
  const checkboxes = filterPanel ? Array.from(filterPanel.querySelectorAll('input[type="checkbox"]')) : Array.from(document.querySelectorAll('.filter-box input[type="checkbox"]'));
  checkboxes.forEach(cb => {
    cb.checked = savedFilters.includes(cb.value);
    cb.addEventListener("change", () => {
      const selected = [...(filterPanel ? filterPanel.querySelectorAll('input[type="checkbox"]:checked') : document.querySelectorAll('.filter-box input[type="checkbox"]:checked'))].map(i => i.value);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
      applyFilter();
    });
  });

  // overlay + toggle (if you have a filter button with id='filterToggle')
  const filterToggle = document.getElementById("filterToggle");
  let overlay = document.getElementById("filterOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "filterOverlay";
    Object.assign(overlay.style, {
      position: "fixed", left: 0, top: 0, width: "100%", height: "100%",
      background: "rgba(0,0,0,0.35)", zIndex: 999, visibility: "hidden", opacity: "0", transition: "opacity .18s"
    });
    document.body.appendChild(overlay);
  }
  if (filterToggle && filterPanel) {
    filterToggle.addEventListener("click", () => {
      filterPanel.classList.toggle("active");
      if (filterPanel.classList.contains("active")) {
        overlay.style.visibility = "visible";
        overlay.style.opacity = "1";
      } else {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.style.visibility = "hidden", 180);
      }
    });
    overlay.addEventListener("click", () => {
      filterPanel.classList.remove("active");
      overlay.style.opacity = "0";
      setTimeout(() => overlay.style.visibility = "hidden", 180);
    });
  }

  // ------- rendering / pagination -------
  function renderProducts(page = 1) {
    container.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredProducts.slice(start, end);

    if (paginatedItems.length === 0) {
      container.innerHTML = `<p style="text-align:center;color:#666;padding:30px">No products match the selected filters.</p>`;
      if (pagination) pagination.innerHTML = "";
      return;
    }

    // 
    paginatedItems.forEach(p => {
  container.innerHTML += `
    <div class="product-card">
      <span class="new-tag">NEW</span>
      <img src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <h4>${p.name}</h4>
        <div class="stars">${'★'.repeat(Math.floor(p.rating))}</div>
        <div class="price-row">
          <span class="mrp">MRP ₹${p.mrp}</span>
          <span class="price">₹${p.price}</span>
        </div>
        <button class="buy-btn" data-product='${JSON.stringify(p)}'>Buy</button>
      </div>
    </div>`;
});

   // Attach click handlers after rendering
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const product = JSON.parse(e.target.dataset.product);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "/checkout"; // go to checkout
  });
});
  }

  function renderPagination() {
    if (!pagination) return;
    pagination.innerHTML = "";
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = i === currentPage ? "active" : "";
      btn.addEventListener("click", () => {
        currentPage = i;
        renderProducts(currentPage);
        renderPagination();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      pagination.appendChild(btn);
    }
  }

  function applyFilter() {
    const selected = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    filteredProducts = selected.length ? products.filter(p => selected.includes(p.category)) : [...products];
    currentPage = 1;
    renderProducts(currentPage);
    renderPagination();
  }

  // init
  applyFilter();
});
