* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1220;
  --bg-soft: #121d2d;
  --panel: #172437;
  --panel-strong: #20314d;
  --primary: #f7a929;
  --primary-dark: #d7880a;
  --accent: #2ec7a6;
  --text: #edf3ff;
  --muted: #bfd0eb;
  --line: rgba(255, 255, 255, 0.09);
  --shadow: 0 22px 60px rgba(2, 8, 20, 0.38);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 100px 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(11, 18, 32, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand strong,
.brand small {
  display: block;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #f5c868);
  color: #101821;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: 900;
}

.brand small {
  font-size: 0.72rem;
  color: var(--muted);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
  font-size: 0.97rem;
}

.main-nav a:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  padding: 15px 22px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #ffbf54);
  color: #101821;
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--line);
}

.hero {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(105deg, rgba(11, 18, 32, 0.93), rgba(11, 18, 32, 0.75)),
    url("https://images.unsplash.com/photo-1503376780353-7c5a8a0d1f6c?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;
  min-height: 720px;
}

.hero-copy {
  max-width: 620px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  margin-bottom: 18px;
}

h2 {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  line-height: 1.12;
  letter-spacing: -0.04em;
  margin-bottom: 18px;
}

h3 {
  font-size: 1.35rem;
  margin-bottom: 12px;
}

p {
  color: var(--muted);
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.hero-badges {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 26px 0 0;
}

.hero-badges li {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 999px;
  padding: 9px 14px;
  font-size: 0.88rem;
}

.hero-card {
  background: rgba(23, 36, 55, 0.88);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.hero-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  margin-bottom: 18px;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 18px rgba(46, 199, 166, 0.8);
}

.card-panel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px;
}

.service-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}

.service-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.service-row span {
  color: var(--muted);
}

.service-row strong {
  color: var(--text);
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.mini-grid div {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 14px;
}

.mini-grid strong,
.stat-item strong {
  display: block;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 8px;
}

.mini-grid span,
.stat-item span {
  color: var(--muted);
  font-size: 0.93rem;
}

.trust-bar {
  background: #0d1728;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.trust-strip {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 0;
  color: var(--muted);
  font-weight: 600;
}

.section-heading {
  max-width: 720px;
  margin: 0 auto 48px;
  text-align: center;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.service-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.08);
}

.icon {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  background: rgba(247, 169, 41, 0.12);
  border-radius: 16px;
  font-size: 1.8rem;
  margin-bottom: 18px;
}

.two-col,
.about-grid,
.contact-wrap {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
  align-items: center;
}

.content-block p + p {
  margin-top: 20px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: grid;
  gap: 14px;
}

.check-list li {
  position: relative;
  padding-left: 28px;
  color: var(--text);
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary);
  font-weight: 800;
}

.stats-card {
  background: linear-gradient(180deg, rgba(247, 169, 41, 0.08), rgba(46, 199, 166, 0.04));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 26px;
  display: grid;
  gap: 18px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 22px 20px;
}

.about-image img {
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.review-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 24px;
}

.stars {
  color: #ffc857;
  letter-spacing: 0.15em;
  margin-bottom: 14px;
}

.reviewer {
  margin-top: 18px;
}

.reviewer strong,
.reviewer span {
  display: block;
}

.reviewer span {
  color: var(--muted);
  margin-top: 4px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 30px;
}

.contact-list {
  list-style: none;
  margin: 22px 0 0;
  padding: 0;
  display: grid;
  gap: 18px;
}

.contact-list li {
  color: var(--muted);
}

.contact-list strong {
  display: block;
  color: var(--text);
  margin-bottom: 4px;
}

form {
  display: grid;
  gap: 16px;
}

.field-row input,
.field-row textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 14px 16px;
}

.field-row input::placeholder,
.field-row textarea::placeholder {
  color: #b2c3e1;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 26px 0 40px;
  background: #0a0f19;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  color: var(--muted);
}

@media (max-width: 900px) {
  .main-nav {
    display: none;
  }

  .hero-layout,
  .two-col,
  .about-grid,
  .contact-wrap,
  .service-grid,
  .review-grid {
    grid-template-columns: 1fr;
  }

  .hero-layout {
    padding: 60px 0 80px;
    min-height: auto;
  }

  .service-grid,
  .review-grid {
    gap: 18px;
  }
}

@media (max-width: 560px) {
  .nav {
    min-height: 70px;
  }

  .btn {
    width: 100%;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-badges {
    flex-direction: column;
    align-items: flex-start;
  }

  .section {
    padding: 80px 0;
  }
}
