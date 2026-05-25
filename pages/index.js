import Head from 'next/head';

const PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238bd345a',
    fallback: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    label: 'Gift Collections',
  },
  {
    img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&q=80',
    fallback: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&q=80',
    label: 'Wedding Favours',
  },
  {
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238bd345a?w=600&q=80',
    fallback: 'https://images.unsplash.com/photo-1549465220-1a8b9238bd345a?w=600&q=80',
    label: 'Corporate Merch',
  },
  {
    img: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80',
    fallback: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80',
    label: 'Event Keepsakes',
  },
];

const GALLERY = [
  { url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=85', label: 'Branded Bags' },
  { url: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=700&q=85', label: 'Gift Wrapping' },
  { url: 'https://images.unsplash.com/photo-1549465220-1a8b9238bd345a?w=700&q=85', label: 'Keepsakes' },
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85', label: 'Premium Gifts' },
  { url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=85', label: 'Cosmetic Sets' },
  { url: 'https://images.unsplash.com/photo-1583394293214-0e5e79e16a3a?w=700&q=85', label: 'Collectibles' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Orbit Souvenirs Memories in Every Direction</title>
        <meta name="description" content="Orbit Souvenirs high quality souvenir distribution for events and businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* ── NAV ── */}
      <nav>
        <div className="nav-inner">
          <img src="/logo.png" alt="Orbit Souvenirs" className="nav-logo" />
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#offers">Services</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact" className="nav-cta">Contact</a></li>
          </ul>
          <button className="hamburger" onClick={() => document.body.classList.toggle('menu-open')}>&#9776;</button>
        </div>
        <div className="mobile-menu">
          {['about','products','offers','why','contact'].map(id => (
            <a key={id} href={`#${id}`} onClick={() => document.body.classList.remove('menu-open')}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src="/logo.png" alt="Orbit Souvenirs" className="hero-logo" />
          <p className="eyebrow">Souvenir Distribution</p>
          <h1>Your World of Souvenirs,<br /><em>Delivered.</em></h1>
          <p className="hero-sub">
            We connect event organizers, and businesses with
            high-quality keepsakes that celebrate every special moment.
          </p>
          <div className="hero-btns">
            <a href="#products" className="btn-primary">View Products</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-fade" />
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {['Custom Souvenirs','Wedding Favours','Corporate Gifts','Event Merchandise','Branded Keepsakes','Collectibles','Celebration Gifts','Premium Giveaways','Custom Souvenirs','Wedding Favours','Corporate Gifts','Event Merchandise','Branded Keepsakes','Collectibles','Celebration Gifts','Premium Giveaways'].map((t,i) => (
            <span key={i}>{t} <span className="dot">·</span></span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <p className="label">Who We Are</p>
              <h2>More Than Just Souvenirs</h2>
              <p className="body-text">
                At Orbit Souvenirs, we believe every occasion deserves to be remembered.
                We are a dedicated souvenir distribution company supplying
                event organizers, and businesses with curated, meaningful products
                delivered reliably, every time.
              </p>
              <div className="stats-row">
                <div className="stat"><div className="stat-num">100%</div><div className="stat-lbl">Quality Assured</div></div>
                <div className="stat-div" />
                <div className="stat"><div className="stat-num">Fast</div><div className="stat-lbl">Delivery</div></div>
                <div className="stat-div" />
                <div className="stat"><div className="stat-num">All</div><div className="stat-lbl">Occasions</div></div>
              </div>
            </div>
            <div className="vm-card">
              <div className="vm-block">
                <p className="vm-lbl">Vision</p>
                <p className="vm-text">To Evolve From An Ambitious Campus Initiative Into The Preimer Global Network For Event Souvenir Logistics, Redefining The Gifting Industry By Making Stress-Free, Memorable Keepsakes Accessible To Communities Worldwide.</p>
              </div>
              <div className="vm-div" />
              <div className="vm-block">
                <p className="vm-lbl">Mission</p>
                <p className="vm-text">To Eliminate The Stress Of celebration By Planning, Sourcing And Distributing Meaningful Event Souvenirs, Transforming a LogisticalHurdle Into A Seamless Experience That Allows Hosts And Thier Loved Ones To Cherish Every Moment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS SHOWCASE ── */}
      <section className="products" id="products">
        <div className="container">
          <div className="section-head">
            <p className="label">Our Products</p>
            <h2>Curated for Every Occasion</h2>
            <p className="section-sub">From intimate celebrations to large corporate events we carry the perfect keepsake for every moment.</p>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((item, i) => (
              <div className={`gallery-item gi-${i}`} key={i}>
                <img
                  src={item.url}
                  alt={item.label}
                  loading="lazy"
                  onError={e => { e.target.src = `https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=700&q=80`; }}
                />
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="offers" id="offers">
        <div className="container">
          <div className="section-head">
            <p className="label">What We Offer</p>
            <h2>Products for Every Occasion</h2>
          </div>
          <div className="offers-grid">
            {[
              {
                num: '01',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
                title: 'Custom & Branded Souvenirs',
                desc: 'Personalized merchandise designed to match your event theme, brand identity, or special occasion perfectly.',
              },
              {
                num: '02',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
                title: 'Weddings & Celebrations',
                desc: 'Elegant keepsakes and thoughtful packages that make every wedding, birthday, or celebration truly unforgettable.',
              },
              {
                num: '03',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
                title: 'Corporate Giveaways',
                desc: 'Professional, branded gifts that represent your company with style perfect for conferences, launches, and appreciation events.',
              },
              {
                num: '04',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                title: 'Exclusive Collectibles',
                desc: 'Unique collectibles and themed items that stand out from the crowd and delight every recipient.',
              },
            ].map((item, i) => (
              <div className="offer-card" key={i}>
                <div className="offer-top">
                  <div className="offer-icon">{item.icon}</div>
                  <span className="offer-num">{item.num}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why" id="why">
        <div className="container">
          <div className="why-inner">
            <div className="why-left">
              <p className="label">Why Choose Us</p>
              <h2>The Orbit Difference</h2>
              <p className="body-text">We don't just distribute souvenirs we deliver experiences. Every product, every order, every partnership is handled with care, precision, and dedication.</p>
              <img src="/logo.png" alt="Orbit Souvenirs" className="why-logo" />
            </div>
            <div className="why-right">
              {[
                { title: 'Quality Products', desc: 'Every item meets high standards of craftsmanship your brand deserves nothing less.' },
                { title: 'Fast & Reliable Distribution', desc: 'Your orders arrive when you need them. We deliver on time, every time.' },
                { title: 'Fully Customizable', desc: 'We tailor every product to your brand or event theme with precision.' },
                { title: 'Wide Variety for Every Occasion', desc: 'From intimate celebrations to large corporate events we have the right souvenir.' },
              ].map((item, i) => (
                <div className="why-item" key={i}>
                  <div className="why-num">0{i + 1}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-box">
            <p className="label" style={{textAlign:'center', color:'rgba(200,184,240,.5)'}}>Get Started</p>
            <h2>Every Moment Deserves<br />to Be Remembered</h2>
            <p>Let Orbit Souvenirs help you create keepsakes that last a lifetime. Reach out today and let us bring your vision to life.</p>
            <div className="cta-btns">
              <a href="mailto:hello@orbitsouvenirs.com" className="btn-primary">Send Us an Email</a>
              <a href="tel:+2340000000000" className="btn-outline">Call Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <img src="/logo.png" alt="Orbit Souvenirs" className="footer-logo" />
          <p className="footer-tag">Memories in Every Direction</p>
          <div className="footer-links">
            {['about','products','offers','why','contact'].map(id => (
              <a key={id} href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            ))}
          </div>
          <p className="footer-copy">© 2026 Orbit Souvenirs. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        :root {
          --bg:     #160e2e;
          --bg2:    #1e1445;
          --bg3:    #261952;
          --violet: #5b3fa6;
          --light:  #c8b8f0;
          --white:  #ffffff;
          --muted:  rgba(200,184,240,0.55);
          --border: rgba(200,184,240,0.12);
          --card:   rgba(255,255,255,0.04);
        }
        body { background:var(--bg); color:var(--white); font-family:'Inter',sans-serif; overflow-x:hidden; -webkit-font-smoothing:antialiased; }
        h1,h2 { font-family:'Cormorant Garamond',serif; font-weight:700; }
        a { text-decoration:none; color:inherit; }
        .container { max-width:1080px; margin:0 auto; padding:0 28px; }

        /* NAV */
        nav {
          position:fixed; top:0; left:0; right:0; z-index:200;
          padding:14px 0;
          background:rgba(22,14,46,0.94);
          backdrop-filter:blur(20px);
          border-bottom:1px solid var(--border);
        }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; max-width:1080px; margin:0 auto; padding:0 28px; }
        .nav-logo { height:38px; width:auto; object-fit:contain; }
        .nav-links { display:flex; gap:32px; list-style:none; }
        .nav-links a { font-size:13px; font-weight:500; color:var(--muted); letter-spacing:.4px; transition:color .2s; }
        .nav-links a:hover { color:var(--white); }
        .nav-cta { padding:8px 20px; border-radius:4px; border:1px solid rgba(200,184,240,.3) !important; color:var(--white) !important; transition:background .2s !important; }
        .nav-cta:hover { background:rgba(200,184,240,.08) !important; }
        .hamburger { display:none; background:none; border:none; color:var(--white); font-size:22px; cursor:pointer; }
        .mobile-menu { display:none; flex-direction:column; padding:14px 28px 18px; border-top:1px solid var(--border); gap:14px; }
        .mobile-menu a { font-size:15px; color:var(--muted); }
        body.menu-open .mobile-menu { display:flex; }

        /* HERO */
        .hero {
          min-height:100vh; display:flex; align-items:center; justify-content:center;
          text-align:center; padding:130px 24px 100px; position:relative; overflow:hidden;
          background:linear-gradient(160deg,#0e0920 0%,#1e1445 45%,#2d1b5e 75%,#1a0f38 100%);
        }
        .hero-overlay {
          position:absolute; inset:0;
          background:
            radial-gradient(ellipse 70% 55% at 50% 35%,rgba(91,63,166,.32) 0%,transparent 65%),
            radial-gradient(ellipse 35% 35% at 10% 75%,rgba(61,36,128,.18) 0%,transparent 55%),
            radial-gradient(ellipse 35% 35% at 90% 70%,rgba(91,63,166,.14) 0%,transparent 55%);
        }
        .hero-content { position:relative; z-index:1; max-width:680px; }
        .hero-logo { height:72px; width:auto; margin-bottom:30px; filter:drop-shadow(0 0 24px rgba(91,63,166,.65)); }
        .eyebrow { font-size:11px; letter-spacing:4px; text-transform:uppercase; color:var(--light); opacity:.65; margin-bottom:18px; font-weight:500; }
        .hero h1 { font-size:clamp(42px,7vw,84px); line-height:1.07; margin-bottom:20px; }
        .hero h1 em { font-style:italic; color:var(--light); }
        .hero-sub { font-size:clamp(14px,1.8vw,17px); color:var(--muted); max-width:480px; margin:0 auto 44px; line-height:1.9; font-weight:300; }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .hero-fade { position:absolute; bottom:0; left:0; right:0; height:120px; background:linear-gradient(to bottom,transparent,var(--bg)); }
        .btn-primary { padding:14px 34px; border-radius:4px; background:linear-gradient(135deg,#5b3fa6,#3d2480); color:#fff; font-weight:600; font-size:13px; letter-spacing:.8px; border:none; cursor:pointer; display:inline-block; transition:opacity .2s,transform .2s; box-shadow:0 4px 28px rgba(91,63,166,.4); }
        .btn-primary:hover { opacity:.85; transform:translateY(-2px); }
        .btn-outline { padding:14px 34px; border-radius:4px; background:transparent; color:var(--white); font-weight:500; font-size:13px; letter-spacing:.8px; border:1px solid rgba(200,184,240,.28); cursor:pointer; display:inline-block; transition:border-color .2s,transform .2s; }
        .btn-outline:hover { border-color:var(--light); transform:translateY(-2px); }

        /* MARQUEE */
        .marquee-wrap { background:var(--bg3); border-top:1px solid var(--border); border-bottom:1px solid var(--border); overflow:hidden; padding:14px 0; }
        .marquee-track { display:flex; white-space:nowrap; animation:marquee 30s linear infinite; }
        .marquee-track span { font-size:12px; letter-spacing:2px; text-transform:uppercase; color:var(--muted); padding:0 8px; font-weight:500; }
        .dot { color:var(--violet); margin:0 4px; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        /* ABOUT */
        .about { padding:110px 0; background:var(--bg); }
        .label { font-size:10px; letter-spacing:4px; text-transform:uppercase; color:var(--light); opacity:.65; font-weight:600; margin-bottom:14px; display:block; }
        .about h2, .section-head h2, .why h2, .cta-box h2 { font-size:clamp(30px,3.5vw,46px); line-height:1.12; margin-bottom:18px; }
        .body-text { font-size:15px; color:var(--muted); line-height:1.9; font-weight:300; }
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .stats-row { display:flex; align-items:center; gap:28px; margin-top:36px; }
        .stat-num { font-family:'Cormorant Garamond',serif; font-size:28px; font-weight:700; margin-bottom:4px; }
        .stat-lbl { font-size:11px; color:var(--muted); letter-spacing:1px; text-transform:uppercase; }
        .stat-div { width:1px; height:38px; background:var(--border); }
        .vm-card { background:var(--card); border:1px solid var(--border); border-radius:8px; padding:40px; position:relative; overflow:hidden; }
        .vm-card::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#5b3fa6,#c8b8f0,#5b3fa6); }
        .vm-lbl { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--light); opacity:.55; font-weight:600; margin-bottom:12px; }
        .vm-text { font-size:14px; color:var(--muted); line-height:1.85; font-style:italic; }
        .vm-div { height:1px; background:var(--border); margin:28px 0; }

        /* PRODUCTS */
        .products { padding:110px 0; background:var(--bg2); }
        .section-head { margin-bottom:52px; }
        .section-sub { font-size:15px; color:var(--muted); max-width:520px; line-height:1.8; font-weight:300; margin-top:12px; }
        .gallery-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          grid-template-rows:auto auto;
          gap:14px;
        }
        .gallery-item { position:relative; overflow:hidden; border-radius:8px; border:1px solid var(--border); }
        .gallery-item img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s ease; filter:brightness(.85) saturate(.9); }
        .gi-0 { grid-column:1/2; grid-row:1/2; min-height:260px; }
        .gi-1 { grid-column:2/4; grid-row:1/2; min-height:260px; }
        .gi-2 { grid-column:1/3; grid-row:2/3; min-height:220px; }
        .gi-3 { grid-column:3/4; grid-row:2/3; min-height:220px; }
        .gi-4 { grid-column:1/2; grid-row:3/4; min-height:220px; }
        .gi-5 { grid-column:2/4; grid-row:3/4; min-height:220px; }
        .gallery-item:hover img { transform:scale(1.06); }
        .gallery-overlay {
          position:absolute; inset:0; display:flex; align-items:flex-end; padding:18px;
          background:linear-gradient(to top, rgba(22,14,46,.75) 0%, transparent 55%);
          opacity:0; transition:opacity .3s;
        }
        .gallery-item:hover .gallery-overlay { opacity:1; }
        .gallery-overlay span { font-size:13px; font-weight:600; letter-spacing:.5px; color:var(--white); }

        /* SERVICES */
        .offers { padding:110px 0; background:var(--bg); }
        .offers-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .offer-card { background:var(--card); border:1px solid var(--border); border-radius:8px; padding:36px; transition:transform .3s,border-color .3s,background .3s; }
        .offer-card:hover { transform:translateY(-5px); border-color:rgba(200,184,240,.28); background:rgba(91,63,166,.1); }
        .offer-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; }
        .offer-icon { width:40px; height:40px; color:var(--light); opacity:.8; }
        .offer-icon svg { width:100%; height:100%; }
        .offer-num { font-family:'Cormorant Garamond',serif; font-size:32px; font-weight:700; color:rgba(200,184,240,.15); }
        .offer-card h3 { font-family:'Inter',sans-serif; font-size:16px; font-weight:600; margin-bottom:10px; letter-spacing:.2px; }
        .offer-card p { font-size:13px; color:var(--muted); line-height:1.8; font-weight:300; }

        /* WHY */
        .why { padding:110px 0; background:var(--bg2); }
        .why-inner { display:grid; grid-template-columns:1fr 1.4fr; gap:80px; align-items:start; }
        .why-logo { height:52px; width:auto; margin-top:40px; opacity:.6; }
        .why-right { display:flex; flex-direction:column; }
        .why-item { display:flex; gap:24px; align-items:flex-start; padding:28px 0; border-bottom:1px solid var(--border); transition:padding-left .3s; }
        .why-item:first-child { padding-top:0; }
        .why-item:last-child { border-bottom:none; }
        .why-item:hover { padding-left:6px; }
        .why-num { font-family:'Cormorant Garamond',serif; font-size:30px; font-weight:700; color:rgba(200,184,240,.2); flex-shrink:0; line-height:1; margin-top:2px; }
        .why-item h4 { font-family:'Inter',sans-serif; font-size:15px; font-weight:600; margin-bottom:6px; }
        .why-item p { font-size:13px; color:var(--muted); line-height:1.75; font-weight:300; }

        /* CTA */
        .cta-section { padding:110px 0; background:var(--bg); }
        .cta-box { background:linear-gradient(135deg,rgba(91,63,166,.18),rgba(61,36,128,.12)); border:1px solid rgba(200,184,240,.15); border-radius:12px; padding:80px 48px; text-align:center; position:relative; overflow:hidden; }
        .cta-box::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(200,184,240,.5),transparent); }
        .cta-box h2 { font-size:clamp(28px,4vw,50px); margin-bottom:18px; }
        .cta-box p { color:var(--muted); font-size:15px; max-width:460px; margin:0 auto 40px; line-height:1.85; font-weight:300; }
        .cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }

        /* FOOTER */
        footer { padding:56px 0 36px; background:rgba(0,0,0,.35); border-top:1px solid var(--border); text-align:center; }
        .footer-logo { height:46px; width:auto; margin-bottom:14px; opacity:.8; }
        .footer-tag { font-size:12px; color:var(--muted); font-style:italic; letter-spacing:1px; margin-bottom:24px; }
        .footer-links { display:flex; gap:28px; justify-content:center; margin-bottom:24px; flex-wrap:wrap; }
        .footer-links a { font-size:11px; color:var(--muted); letter-spacing:1px; text-transform:uppercase; transition:color .2s; }
        .footer-links a:hover { color:var(--white); }
        .footer-copy { font-size:11px; color:rgba(255,255,255,.18); letter-spacing:1px; }

        /* RESPONSIVE */
        @media (max-width:768px) {
          .nav-links { display:none; }
          .hamburger { display:block; }
          .about-grid { grid-template-columns:1fr; gap:44px; }
          .offers-grid { grid-template-columns:1fr; }
          .why-inner { grid-template-columns:1fr; gap:44px; }
          .why-logo { display:none; }
          .cta-box { padding:52px 20px; }
          .gallery-grid { grid-template-columns:1fr 1fr; }
          .gi-0,.gi-1,.gi-2,.gi-3,.gi-4,.gi-5 { grid-column:auto; grid-row:auto; min-height:180px; }
        }
      `}</style>
    </>
  );
}
