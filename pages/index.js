import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Orbit Souvenirs — Memories in Every Direction</title>
        <meta name="description" content="Orbit Souvenirs is your trusted souvenir distribution partner." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <img src="/logo.png" alt="Orbit Souvenirs" className="nav-logo-img" />
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#offers">Services</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact" className="nav-cta">Contact</a></li>
          </ul>
          <button className="hamburger" onClick={() => document.body.classList.toggle('menu-open')}>&#9776;</button>
        </div>
        <div className="mobile-menu">
          <a href="#about" onClick={() => document.body.classList.remove('menu-open')}>About</a>
          <a href="#offers" onClick={() => document.body.classList.remove('menu-open')}>Services</a>
          <a href="#why" onClick={() => document.body.classList.remove('menu-open')}>Why Us</a>
          <a href="#contact" onClick={() => document.body.classList.remove('menu-open')}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src="/logo.png" alt="Orbit Souvenirs" className="hero-logo" />
          <p className="hero-eyebrow">Souvenir Distribution</p>
          <h1>Your World of Souvenirs,<br /><span>Delivered.</span></h1>
          <p className="hero-sub">
            We connect retailers, event organizers, and businesses with
            high-quality keepsakes that celebrate every special moment.
          </p>
          <div className="hero-btns">
            <a href="#offers" className="btn-primary">Our Services</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-scroll-line" />
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <p className="label">Who We Are</p>
              <h2>More Than Just Souvenirs</h2>
              <p className="body-text">
                At Orbit Souvenirs, we believe every occasion deserves to be remembered.
                We are a dedicated souvenir distribution company — supplying retailers,
                event organizers, and businesses with curated, meaningful products
                delivered reliably, every time.
              </p>
              <div className="stats-row">
                <div className="stat">
                  <div className="stat-num">100%</div>
                  <div className="stat-lbl">Quality Assured</div>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <div className="stat-num">Fast</div>
                  <div className="stat-lbl">Delivery</div>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <div className="stat-num">All</div>
                  <div className="stat-lbl">Occasions</div>
                </div>
              </div>
            </div>
            <div className="vm-card">
              <div className="vm-block">
                <p className="vm-label">Vision</p>
                <p className="vm-text">
                  To be the most reliable and creative souvenir distribution company —
                  known for delivering products that carry meaning, celebrate moments,
                  and leave lasting impressions on every recipient.
                </p>
              </div>
              <div className="vm-divider" />
              <div className="vm-block">
                <p className="vm-label">Mission</p>
                <p className="vm-text">
                  To source and distribute a diverse range of high-quality souvenirs
                  to retailers, businesses, and event partners — providing excellent
                  service, competitive pricing, and products that truly capture the
                  essence of every special moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="offers" id="offers">
        <div className="container">
          <div className="section-head">
            <p className="label">What We Offer</p>
            <h2>Products for Every Occasion</h2>
          </div>
          <div className="offers-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                  </svg>
                ),
                title: 'Custom & Branded Souvenirs',
                desc: 'Personalized merchandise designed to match your event theme, brand identity, or special occasion perfectly.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: 'Weddings & Celebrations',
                desc: 'Elegant keepsakes and thoughtful packages that make every wedding, birthday, or celebration truly unforgettable.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
                  </svg>
                ),
                title: 'Corporate Giveaways',
                desc: 'Professional, branded gifts that represent your company with style — perfect for conferences, launches, and appreciation events.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                ),
                title: 'Exclusive Collectibles',
                desc: 'Unique collectibles and themed items that stand out from the crowd and delight every recipient.',
              },
            ].map((item, i) => (
              <div className="offer-card" key={i}>
                <div className="offer-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why" id="why">
        <div className="container">
          <div className="why-inner">
            <div className="why-left">
              <p className="label">Why Choose Us</p>
              <h2>The Orbit Difference</h2>
              <p className="body-text">
                We don't just distribute souvenirs — we deliver experiences.
                Every product, every order, every partnership is handled with
                care, precision, and dedication.
              </p>
            </div>
            <div className="why-right">
              {[
                { title: 'Quality Products', desc: 'Every item meets high standards of craftsmanship — because your brand deserves the best.' },
                { title: 'Fast & Reliable Distribution', desc: 'Your orders arrive when you need them. We deliver on time, every time.' },
                { title: 'Fully Customizable', desc: 'We tailor every product to your brand or event theme with precision.' },
                { title: 'Wide Variety for Every Occasion', desc: 'From intimate celebrations to large corporate events — we have the right souvenir.' },
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

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-box">
            <p className="label" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>Get Started</p>
            <h2>Every Moment Deserves<br />to Be Remembered</h2>
            <p>
              Let Orbit Souvenirs help you create keepsakes that last a lifetime.
              Reach out today and let us bring your vision to life.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@orbitsouvenirs.com" className="btn-primary">Send Us an Email</a>
              <a href="tel:+2340000000000" className="btn-outline">Call Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <img src="/logo.png" alt="Orbit Souvenirs" className="footer-logo-img" />
          <p className="footer-tag">Memories in Every Direction</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#offers">Services</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">© 2026 Orbit Souvenirs. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }

        :root {
          --bg:       #160e2e;
          --bg2:      #1e1445;
          --bg3:      #261952;
          --violet:   #5b3fa6;
          --purple:   #3d2480;
          --light:    #c8b8f0;
          --white:    #ffffff;
          --muted:    rgba(200,184,240,0.55);
          --border:   rgba(200,184,240,0.12);
          --card:     rgba(255,255,255,0.04);
        }

        body {
          background: var(--bg);
          color: var(--white);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        h1,h2 { font-family:'Cormorant Garamond',serif; font-weight:700; }
        a { text-decoration:none; color:inherit; }
        .container { max-width:1080px; margin:0 auto; padding:0 28px; }

        /* ── NAV ── */
        nav {
          position:fixed; top:0; left:0; right:0; z-index:200;
          padding:16px 0;
          background: rgba(22,14,46,0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display:flex; align-items:center; justify-content:space-between;
          max-width:1080px; margin:0 auto; padding:0 28px;
        }
        .nav-logo-img { height:40px; width:auto; object-fit:contain; }
        .nav-links { display:flex; gap:36px; list-style:none; }
        .nav-links a { font-size:13px; font-weight:500; color:var(--muted); letter-spacing:.5px; transition:color .2s; }
        .nav-links a:hover { color:var(--white); }
        .nav-cta {
          padding:9px 22px; border-radius:4px;
          border:1px solid rgba(200,184,240,0.35) !important;
          color:var(--white) !important;
          transition:background .2s, border-color .2s !important;
        }
        .nav-cta:hover { background:rgba(200,184,240,0.1) !important; }
        .hamburger { display:none; background:none; border:none; color:var(--white); font-size:22px; cursor:pointer; }
        .mobile-menu {
          display:none; flex-direction:column; padding:16px 28px 20px;
          border-top:1px solid var(--border); gap:16px;
        }
        .mobile-menu a { font-size:15px; color:var(--muted); }
        body.menu-open .mobile-menu { display:flex; }

        /* ── HERO ── */
        .hero {
          min-height:100vh;
          display:flex; align-items:center; justify-content:center;
          text-align:center; padding:130px 24px 80px;
          position:relative; overflow:hidden;
          background: linear-gradient(160deg, #0e0920 0%, #1e1445 40%, #2d1b5e 70%, #1a0f38 100%);
        }
        .hero-overlay {
          position:absolute; inset:0;
          background:
            radial-gradient(ellipse 70% 50% at 50% 30%, rgba(91,63,166,.35) 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 15% 70%, rgba(61,36,128,.2) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 85% 75%, rgba(91,63,166,.15) 0%, transparent 60%);
        }
        .hero-content { position:relative; z-index:1; max-width:700px; }
        .hero-logo { height:70px; width:auto; margin-bottom:32px; filter:drop-shadow(0 0 20px rgba(91,63,166,.6)); }
        .hero-eyebrow {
          font-size:11px; letter-spacing:4px; text-transform:uppercase;
          color:var(--light); opacity:.7; margin-bottom:18px; font-weight:500;
        }
        .hero h1 {
          font-size:clamp(42px,7vw,82px); line-height:1.08;
          margin-bottom:20px; color:var(--white);
        }
        .hero h1 span { color:var(--light); }
        .hero-sub {
          font-size:clamp(14px,1.8vw,17px); color:var(--muted);
          max-width:500px; margin:0 auto 42px; line-height:1.85; font-weight:300;
        }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .btn-primary {
          padding:14px 34px; border-radius:4px;
          background: linear-gradient(135deg, #5b3fa6, #3d2480);
          color:#fff; font-weight:600; font-size:13px; letter-spacing:.8px;
          border:none; cursor:pointer; display:inline-block;
          transition:opacity .2s, transform .2s;
          box-shadow: 0 4px 24px rgba(91,63,166,.4);
        }
        .btn-primary:hover { opacity:.88; transform:translateY(-2px); }
        .btn-outline {
          padding:14px 34px; border-radius:4px;
          background:transparent; color:var(--white); font-weight:500;
          font-size:13px; letter-spacing:.8px;
          border:1px solid rgba(200,184,240,.3); cursor:pointer; display:inline-block;
          transition:border-color .2s, transform .2s;
        }
        .btn-outline:hover { border-color:var(--light); transform:translateY(-2px); }
        .hero-scroll-line {
          position:absolute; bottom:0; left:50%; transform:translateX(-50%);
          width:1px; height:60px;
          background:linear-gradient(to bottom, transparent, rgba(200,184,240,.4));
        }

        /* ── ABOUT ── */
        .about { padding:110px 0; background:var(--bg); }
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .label {
          font-size:10px; letter-spacing:4px; text-transform:uppercase;
          color:var(--light); opacity:.7; font-weight:600; margin-bottom:14px;
        }
        .about h2, .section-head h2, .why h2, .cta-box h2 {
          font-size:clamp(30px,3.5vw,46px); line-height:1.12; margin-bottom:20px;
        }
        .body-text { font-size:15px; color:var(--muted); line-height:1.9; font-weight:300; }
        .stats-row { display:flex; align-items:center; gap:28px; margin-top:36px; }
        .stat-num {
          font-family:'Cormorant Garamond',serif; font-size:28px; font-weight:700;
          color:var(--white); margin-bottom:4px;
        }
        .stat-lbl { font-size:11px; color:var(--muted); letter-spacing:1px; text-transform:uppercase; }
        .stat-divider { width:1px; height:40px; background:var(--border); }
        .vm-card {
          background:var(--card); border:1px solid var(--border);
          border-radius:8px; padding:40px; position:relative; overflow:hidden;
        }
        .vm-card::after {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg, #5b3fa6, #c8b8f0, #5b3fa6);
        }
        .vm-block { padding:4px 0; }
        .vm-label { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--light); opacity:.6; font-weight:600; margin-bottom:12px; }
        .vm-text { font-size:14px; color:var(--muted); line-height:1.85; font-style:italic; }
        .vm-divider { height:1px; background:var(--border); margin:28px 0; }

        /* ── OFFERS ── */
        .offers { padding:110px 0; background:var(--bg2); }
        .section-head { margin-bottom:56px; }
        .offers-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .offer-card {
          background:rgba(255,255,255,.03); border:1px solid var(--border);
          border-radius:8px; padding:36px;
          transition:transform .3s ease, border-color .3s ease, background .3s ease;
        }
        .offer-card:hover {
          transform:translateY(-5px);
          border-color:rgba(200,184,240,.3);
          background:rgba(91,63,166,.1);
        }
        .offer-icon {
          width:44px; height:44px; color:var(--light);
          margin-bottom:20px; opacity:.8;
        }
        .offer-icon svg { width:100%; height:100%; }
        .offer-card h3 {
          font-family:'Inter',sans-serif; font-size:16px; font-weight:600;
          margin-bottom:10px; color:var(--white); letter-spacing:.2px;
        }
        .offer-card p { font-size:13px; color:var(--muted); line-height:1.8; font-weight:300; }

        /* ── WHY ── */
        .why { padding:110px 0; background:var(--bg); }
        .why-inner { display:grid; grid-template-columns:1fr 1.4fr; gap:80px; align-items:start; }
        .why-left .body-text { margin-top:16px; }
        .why-right { display:flex; flex-direction:column; gap:0; }
        .why-item {
          display:flex; gap:24px; align-items:flex-start;
          padding:28px 0; border-bottom:1px solid var(--border);
          transition:padding-left .3s;
        }
        .why-item:first-child { padding-top:0; }
        .why-item:last-child { border-bottom:none; }
        .why-item:hover { padding-left:6px; }
        .why-num {
          font-family:'Cormorant Garamond',serif; font-size:28px;
          font-weight:700; color:rgba(200,184,240,.25); flex-shrink:0;
          line-height:1; margin-top:2px;
        }
        .why-item h4 { font-family:'Inter',sans-serif; font-size:15px; font-weight:600; margin-bottom:6px; }
        .why-item p { font-size:13px; color:var(--muted); line-height:1.75; font-weight:300; }

        /* ── CTA ── */
        .cta-section { padding:110px 0; background:var(--bg2); }
        .cta-box {
          background:linear-gradient(135deg, rgba(91,63,166,.2), rgba(61,36,128,.15));
          border:1px solid rgba(200,184,240,.15); border-radius:12px;
          padding:80px 48px; text-align:center; position:relative; overflow:hidden;
        }
        .cta-box::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg, transparent, rgba(200,184,240,.5), transparent);
        }
        .cta-box h2 { font-size:clamp(28px,4vw,48px); margin-bottom:18px; position:relative; }
        .cta-box p {
          color:var(--muted); font-size:15px; max-width:460px; margin:0 auto 40px;
          line-height:1.85; font-weight:300; position:relative;
        }
        .cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; position:relative; }

        /* ── FOOTER ── */
        footer {
          padding:56px 0 36px;
          background:rgba(0,0,0,.35); border-top:1px solid var(--border);
          text-align:center;
        }
        .footer-logo-img { height:48px; width:auto; margin-bottom:14px; opacity:.85; }
        .footer-tag { font-size:12px; color:var(--muted); font-style:italic; letter-spacing:1px; margin-bottom:24px; }
        .footer-links { display:flex; gap:32px; justify-content:center; margin-bottom:24px; }
        .footer-links a { font-size:12px; color:var(--muted); letter-spacing:.5px; transition:color .2s; text-transform:uppercase; }
        .footer-links a:hover { color:var(--white); }
        .footer-copy { font-size:11px; color:rgba(255,255,255,.18); letter-spacing:1px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .nav-links { display:none; }
          .hamburger { display:block; }
          .about-grid { grid-template-columns:1fr; gap:44px; }
          .offers-grid { grid-template-columns:1fr; }
          .why-inner { grid-template-columns:1fr; gap:44px; }
          .cta-box { padding:52px 24px; }
          .stats-row { gap:18px; }
          .hero-logo { height:54px; }
        }
      `}</style>
    </>
  );
}
