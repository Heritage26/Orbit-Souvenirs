import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Orbit Souvenirs — Memories in Every Direction</title>
        <meta name="description" content="Orbit Souvenirs is your trusted souvenir distribution partner — bringing high-quality, meaningful products to retailers, events, and businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-logo">ORBIT SOUVENIRS</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#offers">What We Offer</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact" className="nav-cta">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">🪐 SOUVENIR DISTRIBUTION</div>
          <h1>
            Your World of<br />
            <span>Souvenirs,</span> Delivered.
          </h1>
          <p className="hero-sub">
            Orbit Souvenirs connects retailers, event organizers, and businesses
            with high-quality keepsakes that celebrate every special moment.
          </p>
          <div className="hero-btns">
            <a href="#offers" className="btn-primary">Explore Our Offerings</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <span>↓</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">More Than Just<br />Souvenirs</h2>
              <p className="section-desc">
                At Orbit Souvenirs, we believe every occasion deserves to be remembered.
                We are a dedicated souvenir distribution company supplying retailers,
                event organizers, and businesses with curated, meaningful products —
                delivered reliably, every time.
              </p>
              <div style={{ marginTop: '32px', display: 'flex', gap: '32px' }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '900', background: 'linear-gradient(90deg, #00e5ff, #ee44ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>100%</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '1px' }}>QUALITY ASSURED</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '900', background: 'linear-gradient(90deg, #ee44ff, #7c4dff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fast</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '1px' }}>DELIVERY</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '900', background: 'linear-gradient(90deg, #7c4dff, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>∞</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '1px' }}>OCCASIONS</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="vm-block">
                  <p className="vm-label">🔷 OUR VISION</p>
                  <p className="vm-text">
                    "To be the most reliable and creative souvenir distribution company, known for delivering products that carry meaning, celebrate moments, and leave lasting impressions on every recipient."
                  </p>
                </div>
                <div className="vm-block">
                  <p className="vm-label">🔶 OUR MISSION</p>
                  <p className="vm-text">
                    "To source and distribute a diverse range of high-quality souvenirs to retailers, businesses, and event partners — providing excellent service, competitive pricing, and products that truly capture the essence of every special moment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="offers" id="offers">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Products for Every<br />Occasion</h2>
          <div className="offers-grid">
            {[
              { icon: '🎁', title: 'Custom & Branded Souvenirs', desc: 'Personalized merchandise designed to match your event theme, brand identity, or special occasion perfectly.' },
              { icon: '💍', title: 'Souvenirs for Weddings & Celebrations', desc: 'Elegant keepsakes and thoughtful packages that make every wedding, birthday, or celebration truly unforgettable.' },
              { icon: '🏢', title: 'Corporate Giveaways', desc: 'Professional, branded gifts that represent your company with style — perfect for conferences, launches, and appreciation events.' },
              { icon: '🧸', title: 'Exclusive Collectibles & Themed Merchandise', desc: 'Unique collectibles and themed items that stand out from the crowd and delight every recipient.' },
            ].map((item, i) => (
              <div className="offer-card" key={i}>
                <span className="offer-icon">{item.icon}</span>
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
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">The Orbit Difference</h2>
          <div className="why-grid">
            {[
              { title: 'Quality Products', desc: 'Every item we distribute meets high standards of craftsmanship and appeal — because your brand deserves the best.' },
              { title: 'Fast & Reliable Distribution', desc: 'We deliver on time, every time. Your orders arrive when you need them, no excuses.' },
              { title: 'Fully Customizable', desc: 'From design to delivery, we tailor every product to match your brand or event theme with precision.' },
              { title: 'Wide Variety for Every Occasion', desc: 'From intimate celebrations to large corporate events — we have the right souvenir for every moment.' },
            ].map((item, i) => (
              <div className="why-item" key={i}>
                <div className="why-check">✓</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2>Every Moment Deserves<br />to Be Remembered</h2>
            <p>
              Let Orbit Souvenirs help you create keepsakes that last a lifetime.
              Reach out today and let's bring your vision to life!
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@orbitsouvenirs.com" className="btn-primary">📩 Email Us Now</a>
              <a href="tel:+2340000000000" className="btn-outline">📞 Call Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-logo">ORBIT SOUVENIRS</div>
          <p className="footer-tagline">Memories in Every Direction</p>
          <p className="footer-copy">© {new Date().getFullYear()} Orbit Souvenirs. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
