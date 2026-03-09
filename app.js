// Products array - 120 Products
let products = [
    { id: 'p1', name: 'Naruto Uzumaki Hoodie', price: 1999, img: '🎌', desc: 'Premium oversized anime hoodie inspired by Naruto.', sz: true, tag: 'Apparel', cat: ['a', 'n'] },
    { id: 'p2', name: 'Naruto Streetwear Tee', price: 799, img: '👕', desc: 'Streetwear anime tee inspired by Naruto.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p3', name: 'Naruto Phone Cover', price: 299, img: '📱', desc: 'Protective anime themed phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p4', name: 'Naruto Figurine', price: 1899, img: '🗿', desc: 'Anime collectible figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p5', name: 'One Piece Luffy Hoodie', price: 2099, img: '🎌', desc: 'Oversized hoodie inspired by Luffy.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p6', name: 'One Piece Pirate Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by One Piece.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p7', name: 'One Piece Phone Cover', price: 299, img: '📱', desc: 'Anime themed phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p8', name: 'One Piece Figurine', price: 1999, img: '🗿', desc: 'Premium collectible figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p9', name: 'Jujutsu Kaisen Gojo Hoodie', price: 2199, img: '🎌', desc: 'Premium hoodie inspired by Gojo Satoru.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p10', name: 'Jujutsu Kaisen Sorcerer Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by Jujutsu Kaisen.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p11', name: 'Jujutsu Kaisen Phone Case', price: 299, img: '📱', desc: 'Anime themed phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p12', name: 'Jujutsu Kaisen Figurine', price: 1999, img: '🗿', desc: 'Collectible anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p13', name: 'Attack on Titan Scout Hoodie', price: 2099, img: '🎌', desc: 'Anime hoodie inspired by the Scout Regiment.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p14', name: 'Attack on Titan Wings Tee', price: 749, img: '👕', desc: 'Oversized tee featuring Wings of Freedom.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p15', name: 'Attack on Titan Phone Cover', price: 299, img: '📱', desc: 'Anime phone case inspired by Attack on Titan.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p16', name: 'Attack on Titan Figurine', price: 1999, img: '🗿', desc: 'Anime collectible inspired by Attack on Titan.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p17', name: 'Demon Slayer Tanjiro Hoodie', price: 1999, img: '🎌', desc: 'Oversized hoodie inspired by Tanjiro.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p18', name: 'Demon Slayer Hashira Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by Demon Slayer.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p19', name: 'Demon Slayer Phone Cover', price: 299, img: '📱', desc: 'Anime phone case featuring Demon Slayer design.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p20', name: 'Demon Slayer Figurine', price: 2199, img: '🗿', desc: 'Collectible anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p21', name: 'Dragon Ball Goku Hoodie', price: 1999, img: '🎌', desc: 'Oversized hoodie inspired by Son Goku.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p22', name: 'Dragon Ball Saiyan Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by Saiyan warriors.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p23', name: 'Dragon Ball Phone Cover', price: 299, img: '📱', desc: 'Protective anime phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p24', name: 'Dragon Ball Goku Figurine', price: 1899, img: '🗿', desc: 'Premium collectible Son Goku figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p25', name: 'Tokyo Revengers Hoodie', price: 2099, img: '🎌', desc: 'Oversized hoodie inspired by Tokyo Revengers.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p26', name: 'Tokyo Revengers Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by Tokyo Revengers.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p27', name: 'Tokyo Revengers Phone Cover', price: 299, img: '📱', desc: 'Anime phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p28', name: 'Tokyo Revengers Figurine', price: 1899, img: '🗿', desc: 'Collectible figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p29', name: 'Chainsaw Man Hoodie', price: 2099, img: '🎌', desc: 'Oversized hoodie inspired by Chainsaw Man.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p30', name: 'Chainsaw Man Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by Chainsaw Man.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p31', name: 'Chainsaw Man Phone Cover', price: 299, img: '📱', desc: 'Anime phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p32', name: 'Chainsaw Man Figurine', price: 1899, img: '🗿', desc: 'Collectible figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p33', name: 'Bleach Ichigo Hoodie', price: 2099, img: '🎌', desc: 'Oversized hoodie inspired by Ichigo.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p34', name: 'Bleach Soul Reaper Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by Soul Reapers.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p35', name: 'Bleach Phone Cover', price: 299, img: '📱', desc: 'Anime phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p36', name: 'Bleach Figurine', price: 1899, img: '🗿', desc: 'Collectible anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p37', name: 'Berserk Guts Hoodie', price: 2199, img: '🎌', desc: 'Oversized hoodie inspired by Guts.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p38', name: 'Berserk Brand Tee', price: 799, img: '👕', desc: 'Streetwear tee inspired by Berserk.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p39', name: 'Berserk Phone Cover', price: 299, img: '📱', desc: 'Anime phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p40', name: 'Berserk Figurine', price: 1899, img: '🗿', desc: 'Collectible anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p41', name: 'My Hero Academia Hoodie', price: 1999, img: '🎌', desc: 'Oversized hoodie inspired by My Hero Academia.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p42', name: 'My Hero Academia Tee', price: 799, img: '👕', desc: 'Streetwear tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p43', name: 'My Hero Academia Phone Cover', price: 299, img: '📱', desc: 'Anime phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p44', name: 'My Hero Academia Figurine', price: 1899, img: '🗿', desc: 'Collectible figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p45', name: 'Solo Leveling Hoodie', price: 2099, img: '🎌', desc: 'Premium hoodie inspired by Solo Leveling.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p46', name: 'Solo Leveling Tee', price: 799, img: '👕', desc: 'Streetwear tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p47', name: 'Solo Leveling Phone Cover', price: 299, img: '📱', desc: 'Anime phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p48', name: 'Solo Leveling Figurine', price: 1999, img: '🗿', desc: 'Collectible figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p49', name: 'Anime Street Hoodie', price: 1999, img: '🎌', desc: 'Oversized anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p50', name: 'Anime Graphic Tee', price: 799, img: '👕', desc: 'Streetwear anime graphic tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p51', name: 'Anime Hoodie', price: 1999, img: '🎌', desc: 'Oversized anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p52', name: 'Anime Streetwear Tee', price: 799, img: '👕', desc: 'Streetwear anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p53', name: 'Anime Phone Cover', price: 299, img: '📱', desc: 'Anime themed phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p54', name: 'Anime Figurine', price: 1899, img: '🗿', desc: 'Collectible anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p55', name: 'Otaku Hoodie', price: 2099, img: '🎌', desc: 'Premium anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p56', name: 'Otaku Graphic Tee', price: 799, img: '👕', desc: 'Graphic anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p57', name: 'Otaku Phone Case', price: 299, img: '📱', desc: 'Anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p58', name: 'Otaku Figurine', price: 1999, img: '🗿', desc: 'Anime collectible figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p59', name: 'Shonen Hoodie', price: 1999, img: '🎌', desc: 'Shonen style anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p60', name: 'Shonen Tee', price: 799, img: '👕', desc: 'Shonen inspired tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p61', name: 'Shonen Phone Cover', price: 299, img: '📱', desc: 'Shonen themed phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p62', name: 'Shonen Figurine', price: 1899, img: '🗿', desc: 'Shonen anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p63', name: 'Anime Culture Hoodie', price: 2099, img: '🎌', desc: 'Anime culture hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p64', name: 'Anime Culture Tee', price: 799, img: '👕', desc: 'Anime culture tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p65', name: 'Anime Culture Phone Case', price: 299, img: '📱', desc: 'Anime themed phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p66', name: 'Anime Culture Figurine', price: 1999, img: '🗿', desc: 'Anime culture collectible.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p67', name: 'Anime Street Hoodie', price: 1999, img: '🎌', desc: 'Street anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p68', name: 'Anime Street Tee', price: 799, img: '👕', desc: 'Street anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p69', name: 'Anime Street Phone Cover', price: 299, img: '📱', desc: 'Street anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p70', name: 'Anime Street Figurine', price: 1899, img: '🗿', desc: 'Street anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p71', name: 'Anime Hero Hoodie', price: 1999, img: '🎌', desc: 'Hero themed anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p72', name: 'Anime Hero Tee', price: 799, img: '👕', desc: 'Hero themed anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p73', name: 'Anime Hero Phone Cover', price: 299, img: '📱', desc: 'Hero themed phone case.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p74', name: 'Anime Hero Figurine', price: 1899, img: '🗿', desc: 'Hero anime collectible.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p75', name: 'Anime Legend Hoodie', price: 2099, img: '🎌', desc: 'Legend inspired hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p76', name: 'Anime Legend Tee', price: 799, img: '👕', desc: 'Legend inspired tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p77', name: 'Anime Legend Phone Cover', price: 299, img: '📱', desc: 'Legend anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p78', name: 'Anime Legend Figurine', price: 1999, img: '🗿', desc: 'Legend anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p79', name: 'Anime Spirit Hoodie', price: 1999, img: '🎌', desc: 'Spirit themed hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p80', name: 'Anime Spirit Tee', price: 799, img: '👕', desc: 'Spirit anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p81', name: 'Anime Spirit Phone Cover', price: 299, img: '📱', desc: 'Spirit anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p82', name: 'Anime Spirit Figurine', price: 1899, img: '🗿', desc: 'Spirit anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p83', name: 'Anime Power Hoodie', price: 2099, img: '🎌', desc: 'Power anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p84', name: 'Anime Power Tee', price: 799, img: '👕', desc: 'Power anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p85', name: 'Anime Power Phone Cover', price: 299, img: '📱', desc: 'Power anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p86', name: 'Anime Power Figurine', price: 1999, img: '🗿', desc: 'Power anime collectible.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p87', name: 'Anime Warrior Hoodie', price: 1999, img: '🎌', desc: 'Warrior anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p88', name: 'Anime Warrior Tee', price: 799, img: '👕', desc: 'Warrior anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p89', name: 'Anime Warrior Phone Cover', price: 299, img: '📱', desc: 'Warrior anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p90', name: 'Anime Warrior Figurine', price: 1899, img: '🗿', desc: 'Warrior anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p91', name: 'Anime Shadow Hoodie', price: 2099, img: '🎌', desc: 'Shadow anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p92', name: 'Anime Shadow Tee', price: 799, img: '👕', desc: 'Shadow anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p93', name: 'Anime Shadow Phone Cover', price: 299, img: '📱', desc: 'Shadow anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p94', name: 'Anime Shadow Figurine', price: 1899, img: '🗿', desc: 'Shadow anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p95', name: 'Anime Dragon Hoodie', price: 1999, img: '🎌', desc: 'Dragon anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p96', name: 'Anime Dragon Tee', price: 799, img: '👕', desc: 'Dragon anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p97', name: 'Anime Dragon Phone Cover', price: 299, img: '📱', desc: 'Dragon anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p98', name: 'Anime Dragon Figurine', price: 1999, img: '🗿', desc: 'Dragon anime collectible.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p99', name: 'Anime Storm Hoodie', price: 2099, img: '🎌', desc: 'Storm anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p100', name: 'Anime Storm Tee', price: 799, img: '👕', desc: 'Storm anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p101', name: 'Anime Storm Phone Cover', price: 299, img: '📱', desc: 'Storm anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p102', name: 'Anime Storm Figurine', price: 1899, img: '🗿', desc: 'Storm anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p103', name: 'Anime Blade Hoodie', price: 1999, img: '🎌', desc: 'Blade anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p104', name: 'Anime Blade Tee', price: 799, img: '👕', desc: 'Blade anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p105', name: 'Anime Blade Phone Cover', price: 299, img: '📱', desc: 'Blade anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p106', name: 'Anime Blade Figurine', price: 1899, img: '🗿', desc: 'Blade anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p107', name: 'Anime Flame Hoodie', price: 2099, img: '🎌', desc: 'Flame anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p108', name: 'Anime Flame Tee', price: 799, img: '👕', desc: 'Flame anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p109', name: 'Anime Flame Phone Cover', price: 299, img: '📱', desc: 'Flame anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p110', name: 'Anime Flame Figurine', price: 1899, img: '🗿', desc: 'Flame anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p111', name: 'Anime Eclipse Hoodie', price: 1999, img: '🎌', desc: 'Eclipse anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p112', name: 'Anime Eclipse Tee', price: 799, img: '👕', desc: 'Eclipse anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p113', name: 'Anime Eclipse Phone Cover', price: 299, img: '📱', desc: 'Eclipse anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p114', name: 'Anime Eclipse Figurine', price: 1899, img: '🗿', desc: 'Eclipse anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p115', name: 'Anime Phantom Hoodie', price: 1999, img: '🎌', desc: 'Phantom anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p116', name: 'Anime Phantom Tee', price: 799, img: '👕', desc: 'Phantom anime tee.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p117', name: 'Anime Phantom Phone Cover', price: 299, img: '📱', desc: 'Phantom anime phone cover.', sz: false, tag: 'Accessories', cat: ['a'] },
    { id: 'p118', name: 'Anime Phantom Figurine', price: 1899, img: '🗿', desc: 'Phantom anime figurine.', sz: false, tag: 'Figurines', cat: ['a'] },
    { id: 'p119', name: 'Anime Galaxy Hoodie', price: 2099, img: '🎌', desc: 'Galaxy anime hoodie.', sz: true, tag: 'Apparel', cat: ['a'] },
    { id: 'p120', name: 'Anime Galaxy Tee', price: 799, img: '👕', desc: 'Galaxy anime tee.', sz: true, tag: 'Apparel', cat: ['a'] }
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