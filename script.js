
/* =========================================
   1. DATA PRODUK CIPICI STORE
========================================= */

const products = [
  // ELEKTRONIK
  {id:1,name:"Wireless Headphone",price:250000,category:"Elektronik",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"},
  {id:2,name:"Smart Watch",price:350000,category:"Elektronik",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"},
  {id:3,name:"Mechanical Keyboard",price:450000,category:"Elektronik",image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"},
  {id:4,name:"Wireless Mouse",price:120000,category:"Elektronik",image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"},
  {id:5,name:"Smartphone",price:2500000,category:"Elektronik",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"},
  {id:6,name:"Laptop",price:7500000,category:"Elektronik",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"},
  {id:7,name:"Digital Camera",price:1800000,category:"Elektronik",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"},
  {id:8,name:"Bluetooth Speaker",price:220000,category:"Elektronik",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"},
  {id:9,name:"Gaming Controller",price:300000,category:"Elektronik",image:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500"},
  {id:10,name:"Tablet",price:2100000,category:"Elektronik",image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"},

  // FASHION
  {id:11,name:"Sneakers",price:320000,category:"Fashion",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"},
  {id:12,name:"Hoodie Premium",price:180000,category:"Fashion",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"},
  {id:13,name:"Basic T-Shirt",price:85000,category:"Fashion",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"},
  {id:14,name:"Jacket Casual",price:270000,category:"Fashion",image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"},
  {id:15,name:"Backpack",price:220000,category:"Fashion",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"},
  {id:16,name:"Denim Jeans",price:195000,category:"Fashion",image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"},
  {id:17,name:"Casual Shirt",price:145000,category:"Fashion",image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500"},
  {id:18,name:"Running Shoes",price:380000,category:"Fashion",image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"},
  {id:19,name:"Cap Premium",price:65000,category:"Fashion",image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500"},
  {id:20,name:"Sweater",price:165000,category:"Fashion",image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500"},

  // AKSESORIS
  {id:21,name:"Sunglasses",price:95000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"},
  {id:22,name:"Wrist Watch",price:280000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"},
  {id:23,name:"Leather Wallet",price:70000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=500"},
  {id:24,name:"Laptop Sleeve",price:150000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500"},
  {id:25,name:"Phone Case",price:45000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1603313011108-4c4f5e9f7f7b?w=500"},
  {id:26,name:"Silver Necklace",price:125000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500"},
  {id:27,name:"Minimalist Ring",price:55000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500"},
  {id:28,name:"Travel Bag",price:195000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500"},
  {id:29,name:"Bracelet",price:75000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500"},
  {id:30,name:"Keychain",price:25000,category:"Aksesoris",image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500"},

  // RUMAH DAN LIFESTYLE
  {id:31,name:"Water Bottle",price:45000,category:"Rumah",image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"},
  {id:32,name:"Desk Lamp",price:130000,category:"Rumah",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"},
  {id:33,name:"Office Chair",price:750000,category:"Rumah",image:"https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500"},
  {id:34,name:"Table Organizer",price:65000,category:"Rumah",image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500"},
  {id:35,name:"Coffee Mug",price:35000,category:"Rumah",image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500"},
  {id:36,name:"Room Clock",price:85000,category:"Rumah",image:"https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500"},
  {id:37,name:"Pillow",price:55000,category:"Rumah",image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500"},
  {id:38,name:"Mini Plant",price:40000,category:"Rumah",image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"},
  {id:39,name:"Storage Box",price:60000,category:"Rumah",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500"},
  {id:40,name:"Table Mat",price:30000,category:"Rumah",image:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=500"}
];


/* =========================================
   2. DATA LOCAL STORAGE
========================================= */

let cart = JSON.parse(localStorage.getItem("cipici_cart")) || [];
let orders = JSON.parse(localStorage.getItem("cipici_orders")) || [];
let users = JSON.parse(localStorage.getItem("cipici_users")) || [];
let currentUser = JSON.parse(localStorage.getItem("cipici_currentUser")) || null;

let selectedCategory = "Semua";
let toastTimer;

const rupiah = number =>
  "Rp" + Number(number).toLocaleString("id-ID");

function saveData() {
  localStorage.setItem("cipici_cart", JSON.stringify(cart));
  localStorage.setItem("cipici_orders", JSON.stringify(orders));
  localStorage.setItem("cipici_users", JSON.stringify(users));
  localStorage.setItem("cipici_currentUser", JSON.stringify(currentUser));
}


/* =========================================
   3. NOTIFIKASI
========================================= */

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================================
   4. NAVIGASI HALAMAN
========================================= */

function showPage(page) {
  const pages = {
    home: "homePage",
    cart: "cartPage",
    account: "accountPage",
    checkout: "checkoutPage",
    history: "historyPage",
    receipt: "receiptPage"
  };

  Object.values(pages).forEach(id => {
    document.getElementById(id).classList.remove("active");
  });

  document.getElementById(pages[page]).classList.add("active");

  if (page === "cart") renderCart();
  if (page === "history") renderHistory();
  if (page === "checkout") renderCheckout();
  if (page === "account") updateAccount();

  window.scrollTo({top:0,behavior:"smooth"});
}

function toggleMobileNav() {
  document.getElementById("mainNav").classList.toggle("open");
}


/* =========================================
   5. MENAMPILKAN PRODUK
========================================= */

function renderProducts(data = products) {
  const container = document.getElementById("productList");

  document.getElementById("productCount").textContent =
    data.length + " produk ditemukan";

  if (!data.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⌕</div>
        <h3>Produk tidak ditemukan</h3>
        <p>Coba kata kunci pencarian lainnya.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = data.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/500x400?text=CIPICI+STORE'"
        >
        <span class="product-label">${product.category}</span>
      </div>

      <div class="product-info">
        <small>${product.category.toUpperCase()}</small>
        <h3>${product.name}</h3>

        <div class="product-bottom">
          <span class="price">${rupiah(product.price)}</span>
          <button
            class="add-btn"
            onclick="addToCart(${product.id})"
            aria-label="Tambah ${product.name}"
          >+</button>
        </div>
      </div>
    </article>
  `).join("");
}


/* =========================================
   6. FILTER KATEGORI
========================================= */

function filterCategory(category, button) {
  selectedCategory = category;

  const filtered = category === "Semua"
    ? products
    : products.filter(p => p.category === category);

  renderProducts(filtered);

  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  } else {
    const navButtons = document.querySelectorAll(".nav-link");

    navButtons.forEach(btn => {
      if (btn.textContent.trim() === (
        category === "Rumah" ? "Rumah & Lifestyle" :
        category === "Semua" ? "Semua Produk" : category
      )) {
        btn.classList.add("active");
      }
    });
  }

  document.getElementById("mainNav").classList.remove("open");

  document.getElementById("products").scrollIntoView({
    behavior:"smooth"
  });
}


/* =========================================
   7. SEARCH PRODUK
========================================= */

function searchProducts() {
  const keyword = document
    .getElementById("searchInput")
    .value.toLowerCase().trim();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.category.toLowerCase().includes(keyword)
  );

  selectedCategory = "Semua";

  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.classList.remove("active");
  });

  document.querySelector(".nav-link").classList.add("active");

  renderProducts(filtered);

  document.getElementById("products").scrollIntoView({
    behavior:"smooth"
  });
}


/* =========================================
   8. TAMBAH PRODUK KE KERANJANG
========================================= */

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  const existing = cart.find(p => p.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  saveData();
  updateCartCount();

  showToast(product.name + " berhasil ditambahkan!");
}


/* =========================================
   9. JUMLAH KERANJANG
========================================= */

function updateCartCount() {
  const total = cart.reduce((sum,p) => sum + p.qty,0);

  document.getElementById("cartCount").textContent = total;
}

function getCartTotal() {
  return cart.reduce((sum,p) => sum + (p.price*p.qty),0);
}

function getTotalItems() {
  return cart.reduce((sum,p) => sum+p.qty,0);
}


/* =========================================
   10. UBAH JUMLAH PRODUK
========================================= */

function changeQuantity(id, amount) {
  const item = cart.find(p => p.id === id);

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(p => p.id !== id);
  }

  saveData();
  renderCart();
  updateCartCount();
}


/* =========================================
   11. HAPUS PRODUK
========================================= */

function removeFromCart(id) {
  const item = cart.find(p => p.id === id);

  if (!item) return;

  cart = cart.filter(p => p.id !== id);

  saveData();
  renderCart();
  updateCartCount();

  showToast("Produk berhasil dihapus.");
}


/* =========================================
   12. TAMPILKAN KERANJANG
========================================= */

function renderCart() {
  const container = document.getElementById("cartItems");

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">♧</div>
        <h3>Keranjang masih kosong</h3>
        <p>Yuk, pilih produk favoritmu terlebih dahulu.</p>
        <button class="btn btn-primary"
          onclick="showPage('home')">
          Mulai belanja →
        </button>
      </div>
    `;

    document.getElementById("cartSubtotal").textContent = rupiah(0);
    document.getElementById("cartTotal").textContent = rupiah(0);

    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}"
        onerror="this.src='https://placehold.co/200?text=Product'">

      <div>
        <h4>${item.name}</h4>
        <strong>${rupiah(item.price)}</strong>

        <div class="quantity">
          <button onclick="changeQuantity(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQuantity(${item.id},1)">+</button>
        </div>
      </div>

      <div>
        <b>${rupiah(item.price*item.qty)}</b>
        <br>
        <button class="remove-btn"
          onclick="removeFromCart(${item.id})">
          Hapus
        </button>
      </div>
    </div>
  `).join("");

  document.getElementById("cartSubtotal").textContent =
    rupiah(getCartTotal());

  document.getElementById("cartTotal").textContent =
    rupiah(getCartTotal());
}


/* =========================================
   13. CHECKOUT
========================================= */

function startCheckout() {
  if (!cart.length) {
    showToast("Keranjang masih kosong!");
    return;
  }

  if (!currentUser) {
    showToast("Silakan masuk akun terlebih dahulu.");
    showPage("account");
    return;
  }

  showPage("checkout");
}

function renderCheckout() {
  const container = document.getElementById("checkoutItems");

  container.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <span>${item.name} × ${item.qty}</span>
      <strong>${rupiah(item.price*item.qty)}</strong>
    </div>
  `).join("");

  document.getElementById("checkoutTotal").textContent =
    rupiah(getCartTotal());

  document.getElementById("recipient").value =
    currentUser?.name || "";
}


/* =========================================
   14. PROSES PESANAN
========================================= */

document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();

  if (!cart.length) {
    showToast("Keranjang kosong!");
    return;
  }

  if (!currentUser) {
    showPage("account");
    return;
  }

  const recipient = document.getElementById("recipient").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const province = document.getElementById("province").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.getElementById("payment").value;

  if (!recipient || !phone || !province || !address || !payment) {
    showToast("Lengkapi semua data pesanan!");
    return;
  }

  const order = {
    id: "CPC-" + Date.now(),
    userEmail: currentUser.email,
    recipient,
    phone,
    province,
    address,
    payment,
    date: new Date().toLocaleString("id-ID"),
    items: cart.map(p => ({...p})),
    total: getCartTotal(),
    status: "Menunggu Konfirmasi"
  };

  orders.unshift(order);

  cart = [];

  saveData();
  updateCartCount();

  this.reset();

  showReceipt(order);
  showToast("Pesanan berhasil dibuat!");
});


/* =========================================
   15. BUKTI TRANSAKSI
========================================= */

function showReceipt(order) {
  const container = document.getElementById("receiptContent");

  container.innerHTML = `
    <div class="receipt-paper">

      <div class="paper-header">
        <h2>CIPICI STORE</h2>
        <p>SHOP YOUR WAY</p>
        <p>Bukti Transaksi Pembelian</p>
      </div>

      <div class="paper-section">
        <h4>INFORMASI PESANAN</h4>
        <div class="paper-detail">
          Nomor pesanan: ${order.id}<br>
          Tanggal: ${order.date}<br>
          Status: ${order.status}
        </div>
      </div>

      <div class="paper-section">
        <h4>INFORMASI PEMBELI</h4>
        <div class="paper-detail">
          Nama: ${escapeHTML(order.recipient)}<br>
          Nomor HP: ${escapeHTML(order.phone)}<br>
          Kota: ${escapeHTML(order.province)}<br>
          Alamat: ${escapeHTML(order.address)}<br>
          Pembayaran: ${escapeHTML(order.payment)}
        </div>
      </div>

      <div class="paper-section">
        <h4>DAFTAR PEMBELIAN</h4>

        ${order.items.map(item => `
          <div class="paper-line">
            <span>${escapeHTML(item.name)} × ${item.qty}</span>
            <b>${rupiah(item.price*item.qty)}</b>
          </div>
        `).join("")}
      </div>

      <div class="paper-total">
        <span>TOTAL PEMBAYARAN</span>
        <span>${rupiah(order.total)}</span>
      </div>

      <div class="paper-footer">
        <strong>TERIMA KASIH SUDAH BERBELANJA!</strong><br>
        CIPICI STORE · SHOP YOUR WAY<br>
        Simpan bukti transaksi ini sebagai catatan pembelian.
      </div>
    </div>

    <div class="receipt-actions">
      <button class="btn btn-primary" onclick="window.print()">
        Cetak bukti transaksi ↗
      </button>

      <button class="btn btn-ghost" onclick="showPage('history')">
        Riwayat pesanan
      </button>
    </div>
  `;

  showPage("receipt");
}


/* =========================================
   16. RIWAYAT TRANSAKSI
========================================= */

function renderHistory() {
  const container = document.getElementById("historyList");

  const myOrders = orders.filter(order =>
    order.userEmail === currentUser?.email
  );

  if (!myOrders.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">▤</div>
        <h3>Belum ada transaksi</h3>
        <p>Pesanan yang berhasil dibuat akan muncul di sini.</p>
        <button class="btn btn-primary" onclick="showPage('home')">
          Belanja sekarang →
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = myOrders.map(order => `
    <div class="history-card">

      <div class="history-top">
        <div>
          <h3>${order.id}</h3>
          <p>${order.date}</p>
        </div>

        <span class="status ${order.status === "Dibatalkan" ? "cancelled" : ""}">
          ${order.status}
        </span>
      </div>

      <p>Nama penerima: ${escapeHTML(order.recipient)}</p>
      <p>Jumlah jenis produk: ${order.items.length}</p>
      <p>Total barang: ${order.items.reduce((s,p)=>s+p.qty,0)}</p>
      <p>Total pembayaran: <b>${rupiah(order.total)}</b></p>

      <div class="history-actions">
        <button class="receipt-btn"
          onclick="viewOrder('${order.id}')">
          Lihat bukti transaksi
        </button>

        <button class="cancel-btn"
          onclick="cancelOrder('${order.id}')"
          ${order.status === "Dibatalkan" ? "disabled" : ""}>
          Batalkan pesanan
        </button>
      </div>

    </div>
  `).join("");
}


/* =========================================
   17. LIHAT BUKTI TRANSAKSI
========================================= */

function viewOrder(id) {
  const order = orders.find(o => o.id === id);

  if (!order || order.userEmail !== currentUser?.email) return;

  showReceipt(order);
}


/* =========================================
   18. PEMBATALAN PESANAN
========================================= */

function cancelOrder(id) {
  const order = orders.find(o => o.id === id);

  if (!order || order.userEmail !== currentUser?.email) return;

  if (order.status === "Dibatalkan") return;

  const confirmCancel = confirm(
    "Apakah kamu yakin ingin membatalkan pesanan ini?"
  );

  if (!confirmCancel) return;

  order.status = "Dibatalkan";

  saveData();
  renderHistory();

  showToast("Pesanan berhasil dibatalkan.");
}


/* =========================================
   19. REGISTER AKUN
========================================= */

function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function register() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value;

  const message = document.getElementById("registerMessage");

  if (!name || !email || !password) {
    message.textContent = "Semua data harus diisi.";
    message.className = "message error";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password minimal 6 karakter.";
    message.className = "message error";
    return;
  }

  if (users.some(user => user.email === email)) {
    message.textContent = "Email sudah terdaftar.";
    message.className = "message error";
    return;
  }

  users.push({name,email,password});

  saveData();

  message.textContent = "Pendaftaran berhasil! Silakan login.";
  message.className = "message success";

  document.getElementById("loginEmail").value = email;

  showLogin();
}


/* =========================================
   20. LOGIN AKUN
========================================= */

function login() {
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const message = document.getElementById("loginMessage");

  const user = users.find(u =>
    u.email === email && u.password === password
  );

  if (!user) {
    message.textContent = "Email atau password salah.";
    message.className = "message error";
    return;
  }

  currentUser = {
    name:user.name,
    email:user.email
  };

  saveData();
  updateAccount();

  message.textContent = "";

  showToast("Selamat datang, " + user.name + "!");

  showPage("account");
}


/* =========================================
   21. UPDATE AKUN
========================================= */

function updateAccount() {
  const authForms = document.getElementById("authForms");
  const profileArea = document.getElementById("profileArea");

  if (currentUser) {
    authForms.classList.add("hidden");
    profileArea.classList.remove("hidden");

    document.getElementById("profileName").textContent =
      currentUser.name;

    document.getElementById("profileEmail").textContent =
      currentUser.email;
  } else {
    authForms.classList.remove("hidden");
    profileArea.classList.add("hidden");
  }
}


/* =========================================
   22. LOGOUT
========================================= */

function logout() {
  if (!confirm("Yakin ingin keluar dari akun?")) return;

  currentUser = null;

  saveData();
  updateAccount();

  showToast("Kamu berhasil keluar.");
  showPage("home");
}


/* =========================================
   23. KEAMANAN TAMPILAN TEKS
========================================= */

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[char]);
}


/* =========================================
   24. INISIALISASI WEBSITE
========================================= */

function initStore() {
  renderProducts();
  renderCart();
  updateCartCount();
  updateAccount();

  if (currentUser) {
    showPage("home");
  }
}

initStore();
