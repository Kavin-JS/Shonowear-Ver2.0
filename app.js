// Products array - WILL BE REPLACED WITH JSON DATA
let products = [
    { id: 1, name: 'Elite Hoodie', price: 3999, img: '🎌', cat: 'apparel', sz: true, new: true },
    { id: 2, name: 'Manga T-Shirt', price: 1499, img: '👕', cat: 'apparel', sz: true },
    { id: 3, name: 'Hero Figure', price: 4999, img: '🗿', cat: 'figures', new: true },
    { id: 4, name: 'Dragon Poster', price: 899, img: '📜', cat: 'posters' },
    { id: 5, name: 'Cap - Anime', price: 1299, img: '🧢', cat: 'apparel', sz: true },
    { id: 6, name: 'Mystery Box', price: 5999, img: '🎁', cat: 'boxes', new: true },
    { id: 7, name: 'Battle Jacket', price: 5499, img: '🧥', cat: 'apparel', sz: true },
    { id: 8, name: 'Legend Statue', price: 7999, img: '🗽', cat: 'figures' },
    { id: 9, name: 'Art Book Vol 1', price: 1899, img: '📖', cat: 'books' },
    { id: 10, name: 'Neon Sign', price: 3499, img: '✨', cat: 'decor', new: true }
];

let curProd = 0, selSz = '';

document.addEventListener('DOMContentLoaded', () => {
    loadHomeProducts();
    loadCollectionProducts();
    updateNav();
    setCartBadge();
    setupMobileMenu();
});

function go(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
    window.scrollTo(0, 0);
}

function setupMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('mob-menu');
    const overlay = document.getElementById('mob-ov');
    if (toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.add('on');
            overlay.classList.add('on');
        });
    }
}

function closeMob() {
    document.getElementById('mob-menu').classList.remove('on');
    document.getElementById('mob-ov').classList.remove('on');
}

function loadHomeProducts() {
    const grid = document.getElementById('home-products');
    if (!grid) return;
    grid.innerHTML = products.slice(0, 6).map(p => renderProductCard(p)).join('');
}

function loadCollectionProducts() {
    const grid = document.getElementById('col-products');
    if (!grid) return;
    grid.innerHTML = products.map(p => renderProductCard(p)).join('');
}

function renderProductCard(p) {
    return `
    <div class="prd-card" onclick="openProduct(${p.id})">
      ${p.new ? '<div class="prd-badge">NEW</div>' : ''}
      <div class="prd-img">
        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:linear-gradient(135deg,var(--surface),var(--bg3));">${p.img}</div>
      </div>
      <div class="prd-ov">
        <button class="prd-ov-btn" onclick="addToCart(); event.stopPropagation();">ADD TO CART</button>
      </div>
      <div class="prd-info">
        <div class="prd-name">${p.name}</div>
        <div class="prd-price">₹${p.price.toLocaleString()}</div>
      </div>
    </div>
  `;
}

function openProduct(id) {
    curProd = id;
    const p = products.find(x => x.id === id);
    if (!p) return;

    let detail = `
    <h2>${p.name}</h2>
    <div class="det-price">₹${p.price.toLocaleString()}</div>
    <p class="det-desc">Premium anime merchandise. High quality authentic product. Perfect for collectors and anime enthusiasts.</p>
  `;

    if (p.sz) {
        detail += `
      <div class="det-sz">
        <label>SELECT SIZE</label>
        <select id="size-sel" onchange="selSz = this.value">
          <option value="">Choose size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="2XL">2XL</option>
        </select>
      </div>
    `;
    }

    detail += `<button class="btn-r" onclick="addToCart()">ADD TO CART</button>`;
    document.getElementById('detail-content').innerHTML = detail;
    go('product-detail');
}

function getCart() {
    const c = localStorage.getItem('sw_cart');
    return c ? JSON.parse(c) : [];
}

function saveCart(c) {
    localStorage.setItem('sw_cart', JSON.stringify(c));
    loadCart();
    setCartBadge();
}

function setCartBadge() {
    const n = getCart().length;
    const b = document.querySelector('.cart-badge');
    b.textContent = n;
    b.style.display = n > 0 ? 'flex' : 'none';
}

function addToCart() {
    const p = products.find(x => x.id === curProd);
    if (!p) return;

    const sz = p.sz ? selSz : '';
    const key = p.id + (sz ? '-' + sz : '');
    const c = getCart();
    const ex = c.find(i => i.k === key);

    if (ex) {
        ex.q++;
    } else {
        c.push({ k: key, id: p.id, name: p.name + (sz ? ` (${sz})` : ''), price: p.price, img: p.img, q: 1 });
    }

    saveCart(c);
    toast(`Added — ${p.name}`, 'g');
}

function loadCart() {
    const c = getCart();
    const box = document.getElementById('cart-items');
    const tr = document.getElementById('cart-total');
    const btn = document.getElementById('co-btn');

    if (!c.length) {
        box.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-bag-shopping"></i>
        Your cart is empty.
        <br><br>
        <button class="btn-o" onclick="go('collection')" style="clip-path:none;margin-top:10px">BROWSE</button>
      </div>
    `;
        tr.style.display = 'none';
        btn.style.display = 'none';
        return;
    }

    let total = 0;
    box.innerHTML = c.map((it, i) => {
        total += it.price * it.q;
        return `
      <div class="ci">
        <div style="width:100%;height:auto;aspect-ratio:3/4;background:linear-gradient(135deg,var(--surface),var(--bg3));display:flex;align-items:center;justify-content:center;font-size:2rem;">${it.img}</div>
        <div class="ci-info">
          <div class="ci-name">${it.name}</div>
          <div class="ci-price">₹${(it.price * it.q).toLocaleString()}</div>
          <div class="qty-row">
            <button class="qb" onclick="chgQ(${i},-1)">−</button>
            <span class="qn">${it.q}</span>
            <button class="qb" onclick="chgQ(${i},1)">+</button>
            <button class="rm-btn" onclick="rmItem(${i})">REMOVE</button>
          </div>
        </div>
      </div>
    `;
    }).join('');

    document.getElementById('total-amt').textContent = '₹' + total.toLocaleString();
    document.getElementById('subtotal-amt').textContent = '₹' + total.toLocaleString();
    tr.style.display = 'block';
    btn.style.display = 'block';
}

function chgQ(i, d) {
    const c = getCart();
    c[i].q += d;
    if (c[i].q <= 0) c.splice(i, 1);
    saveCart(c);
}

function rmItem(i) {
    const c = getCart();
    c.splice(i, 1);
    saveCart(c);
}

function doPayment() {
    if (localStorage.getItem('sw_in') !== 'true') {
        toast('Please log in to checkout.');
        setTimeout(() => go('login'), 1200);
        return;
    }
    if (!getCart().length) {
        toast('Cart is empty!');
        return;
    }
    saveCart([]);
    showPop('🎌', 'Order Placed!', 'Your items will arrive in 7 days. Arigatou!');
    setTimeout(() => {
        closePop();
        go('home');
    }, 3000);
}

function doLogin() {
    const u = document.getElementById('l-user').value.trim();
    const p = document.getElementById('l-pass').value.trim();
    const s = localStorage.getItem('sw_u');

    if (!s) {
        toast('No account found — sign up first.');
        return;
    }

    const usr = JSON.parse(s);
    if (u === usr.username && p === usr.password) {
        localStorage.setItem('sw_in', 'true');
        localStorage.setItem('sw_n', u);
        toast('Welcome back, ' + u + '! ⚡', 'g');
        updateNav();
        setTimeout(() => go('home'), 800);
    } else {
        toast('Invalid credentials.');
    }
}

function doSignup() {
    const u = document.getElementById('s-user').value.trim();
    const e = document.getElementById('s-email').value.trim();
    const p = document.getElementById('s-pass').value.trim();

    if (!u || !e || !p) {
        toast('Please fill all fields.');
        return;
    }

    localStorage.setItem('sw_u', JSON.stringify({ username: u, email: e, password: p }));
    toast('Account created! Sign in now.', 'g');
    setTimeout(() => go('login'), 900);
}

function logout() {
    localStorage.removeItem('sw_in');
    localStorage.removeItem('sw_n');
    updateNav();
    toast('Signed out.');
    go('home');
}

function updateNav() {
    const on = localStorage.getItem('sw_in') === 'true';
    const nm = localStorage.getItem('sw_n') || '';

    document.getElementById('nav-login').style.display = on ? 'none' : 'inline-flex';
    document.getElementById('nav-user').style.display = on ? 'flex' : 'none';

    if (on) document.getElementById('nav-uname').textContent = nm;

    const mobLogin = document.getElementById('mob-login');
    const mobLogout = document.getElementById('mob-logout');
    if (mobLogin) mobLogin.style.display = on ? 'none' : 'flex';
    if (mobLogout) mobLogout.style.display = on ? 'flex' : 'none';
}

function submitMsg() {
    const m = document.getElementById('ct-msg').value.trim();
    if (!m) {
        toast('Please describe your issue.');
        return;
    }
    ['ct-name', 'ct-email', 'ct-msg'].forEach(id => {
        document.getElementById(id).value = '';
    });
    toast('Message sent! We\'ll respond within 24 hours.', 'g');
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const grid = document.getElementById('col-products');
    const noRes = document.getElementById('col-no-res');

    if (!query) {
        loadCollectionProducts();
        noRes.style.display = 'none';
        return;
    }

    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
    noRes.style.display = filtered.length ? 'none' : 'block';
}

function toast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast' + (type ? ' ' + type : '') + ' show';
    setTimeout(() => t.classList.remove('show'), 2800);
}

function showPop(ico, title, msg) {
    document.getElementById('pop-ico').textContent = ico;
    document.getElementById('pop-title').textContent = title;
    document.getElementById('pop-msg').textContent = msg;
    document.getElementById('popup').classList.add('show');
}

function closePop() {
    document.getElementById('popup').classList.remove('show');
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const active = document.activeElement;
        if (active && active.id === 'search-input') searchProducts();
    }
});

// When cart page loads, load cart items
document.addEventListener('click', (e) => {
    if (e.target.onclick?.toString().includes("go('cart')")) {
        setTimeout(() => loadCart(), 100);
    }
});

// Load cart when page is ready
window.addEventListener('hashchange', () => {
    if (window.location.hash === '#cart') {
        loadCart();
    }
});