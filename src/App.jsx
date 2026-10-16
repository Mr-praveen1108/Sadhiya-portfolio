import { useEffect, useState } from "react";
import "./App.css";

const INSTAGRAM = {
  handle: "@sadhiya_rapunzel",
  url: "https://www.instagram.com/sadhiya_rapunzel/",
};

const PHOTOS = [
  {
    src: "/photos/look-black-evening.jpg",
    alt: "Sadhiya Siddiqua in a black evening ensemble",
    label: "Evening Look",
  },
  {
    src: "/photos/look-cream-portrait.jpg",
    alt: "Sadhiya Siddiqua, smiling portrait in cream ethnic wear",
    label: "Portrait",
  },
  {
    src: "/photos/look-red-dress.jpg",
    alt: "Sadhiya Siddiqua in a red off-shoulder dress",
    label: "Western Dress",
  },
  {
    src: "/photos/look-teal-jewelry.jpg",
    alt: "Sadhiya Siddiqua in teal ethnic wear with traditional jewelry",
    label: "Ethnic Wear",
  },
  {
    src: "/photos/fashion-brick.jpg",
    alt: "Sadhiya Siddiqua, fashion portrait against a brick wall",
    label: "Fashion Portrait",
  },
  {
    src: "/photos/look-black-seated.jpg",
    alt: "Sadhiya Siddiqua in a black sequinned ensemble",
    label: "Designer Look",
  },
  {
    src: "/photos/look-yellow-lace.jpg",
    alt: "Sadhiya Siddiqua, close portrait in yellow lace",
    label: "Natural Light",
  },
  {
    src: "/photos/look-teal-outdoor.jpg",
    alt: "Sadhiya Siddiqua in a teal embroidered lehenga outdoors",
    label: "Outdoor Ethnic",
  },
  {
    src: "/photos/portrait-smile.jpg",
    alt: "Sadhiya Siddiqua, close portrait with a natural smile",
    label: "Studio Portrait",
  },
  {
    src: "/photos/look-purple-studio.jpg",
    alt: "Sadhiya Siddiqua in a floral studio look against purple",
    label: "Studio Editorial",
  },
  {
    src: "/photos/look-studio-yellow.jpg",
    alt: "Sadhiya Siddiqua in a black dress with white sleeves",
    label: "Studio Western",
  },
  {
    src: "/photos/look-red-soft.jpg",
    alt: "Sadhiya Siddiqua in a red satin dress, soft portrait",
    label: "Indoor Portrait",
  },
  {
    src: "/photos/editorial-sky.jpg",
    alt: "Sadhiya Siddiqua, western editorial against a clear sky",
    label: "Western Editorial",
  },
  {
    src: "/photos/set-earthen.jpg",
    alt: "Sadhiya Siddiqua in a cinematic ethnic character look",
    label: "Cinematic Character",
  },
  {
    src: "/photos/set-lamps.jpg",
    alt: "Sadhiya Siddiqua on a period film set holding a lamp",
    label: "Period Ensemble",
  },
];

const INTERESTS = [
  "Acting",
  "Ramp Shows",
  "Designer Shoots",
  "Ethnic Wear",
  "Western Wear",
  "Music Albums",
  "Indoor Shoots",
  "Outdoor Shoots",
];

const PROFILE = [
  { label: "Age", value: "25" },
  { label: "Nationality", value: "Indian" },
  { label: "Location", value: "Hyderabad, Telangana" },
  { label: "Height", value: "5 ft 5 in" },
  { label: "Weight", value: "48 kg" },
  { label: "Measurements", value: "30–26–34 in" },
  { label: "Eye Color", value: "Black" },
  { label: "Hair Color", value: "Black and Brown" },
  { label: "Shoe Size", value: "7" },
  { label: "Education", value: "GNM — General Nursing and Midwifery" },
  { label: "Profession", value: "Actress" },
  { label: "Experience", value: "Experienced" },
  { label: "Languages", value: "Telugu, Hindi, English" },
  { label: "Marital Status", value: "Unmarried" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (!activePhoto) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActivePhoto(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">SS</span>
          <span className="brand-name">Sadhiya Siddiqua</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Cover
          </a>
          <a href="#profile" onClick={closeMenu}>
            Profile
          </a>
          <a href="#credits" onClick={closeMenu}>
            Series
          </a>
          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#notes" onClick={closeMenu}>
            Notes
          </a>
          <a
            href={INSTAGRAM.url}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Instagram
          </a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-frame">
          <img
            src="/photos/fashion-brick.jpg"
            alt="Sadhiya Siddiqua, principal fashion portrait"
            className="hero-image"
          />
          <div className="hero-veil" />
          <div className="hero-copy">
            <p className="eyebrow">Actress · Hyderabad</p>
            <h1>
              Sadhiya
              <em> Siddiqua</em>
            </h1>
            <p className="hero-lead">
              A cinematic presence for Telugu cinema and the wider Indian
              entertainment industry — film, music, ramp, and editorial work.
            </p>
            <div className="hero-meta">
              <span>Telugu</span>
              <span>Hindi</span>
              <span>English</span>
            </div>
            <a
              className="hero-instagram"
              href={INSTAGRAM.url}
              target="_blank"
              rel="noreferrer"
            >
              Instagram {INSTAGRAM.handle}
            </a>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Prepared for casting, production, and talent representation.</h2>
          </div>
          <p className="intro-text">
            Sadhiya Siddiqua is an Indian actress based in Hyderabad, Telangana.
            This portfolio presents her professional profile, current photographs,
            and work preferences for film producers, casting directors, music
            video directors, and agencies.
          </p>
        </div>
      </section>

      <section id="profile" className="section">
        <div className="section-head">
          <p className="eyebrow">Artist Profile</p>
          <h2>Professional particulars</h2>
        </div>
        <div className="profile-layout">
          <figure className="profile-portrait">
            <img
              src="/photos/portrait-smile.jpg"
              alt="Sadhiya Siddiqua, close portrait"
            />
            <figcaption>Principal Portrait</figcaption>
          </figure>
          <div className="profile-table">
            {PROFILE.map((item) => (
              <div className="stat" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
            <div className="stat">
              <span>Instagram</span>
              <strong>
                <a
                  className="inline-link"
                  href={INSTAGRAM.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {INSTAGRAM.handle}
                </a>
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section id="credits" className="section">
        <div className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Previous series</h2>
        </div>
        <article className="series-card">
          <a
            className="series-poster"
            href="https://youtu.be/JvgJTeMjgds"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/photos/series-co-living.png"
              alt="Co-Living series poster, featuring Sadhiya Siddiqua"
            />
          </a>
          <div className="series-copy">
            <p className="eyebrow">Web Series</p>
            <h3>Co-Living</h3>
            <p className="series-tagline">Two strangers. One home.</p>
            <ul className="series-meta">
              <li>A series by KD</li>
              <li>100K views</li>
            </ul>
            <p>
              Previous series credit. Watch the episode on YouTube.
            </p>
            <a
              className="series-link"
              href="https://youtu.be/JvgJTeMjgds"
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
            </a>
          </div>
        </article>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-head">
          <p className="eyebrow">Photographs</p>
          <h2>Look book</h2>
          <p className="section-note">
            All images are original photographs of Sadhiya Siddiqua. Select a
            frame to view it larger.
          </p>
        </div>
        <div className="gallery">
          {PHOTOS.map((photo) => (
            <button
              type="button"
              className="gallery-card"
              key={photo.src}
              onClick={() => setActivePhoto(photo)}
            >
              <img src={photo.src} alt={photo.alt} />
              <span>{photo.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <p className="eyebrow">Assignments</p>
          <h2>Areas of interest</h2>
        </div>
        <ul className="chips">
          {INTERESTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="cards">
          <article className="card">
            <p className="eyebrow">Wardrobe</p>
            <h3>Styling range</h3>
            <p>
              Comfortable with Indian and western outfits, including skirts.
              Open to ethnic, contemporary, and designer looks for film and
              commercial work.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Travel</p>
            <h3>Availability</h3>
            <p>
              Open to domestic outstation shoots and international
              opportunities. Available for flexible shoot timings.
            </p>
          </article>
        </div>
      </section>

      <section id="notes" className="section notes">
        <div className="section-head">
          <p className="eyebrow">For Production</p>
          <h2>Professional notes</h2>
        </div>
        <div className="notes-grid">
          <article>
            <h3>Passport</h3>
            <p>Not currently available.</p>
          </article>
          <article>
            <h3>Allergies</h3>
            <p>
              Allergies to dust or cosmetics. Please confirm specific triggers
              before shoots.
            </p>
          </article>
          <article>
            <h3>Scene preferences</h3>
            <p>
              No nude, topless, bikini, lingerie, swimsuit, or bold scenes.
            </p>
          </article>
          <article>
            <h3>Print &amp; calendar</h3>
            <p>Print shoots and calendar shoots are not preferred.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="brand-name">Sadhiya Siddiqua</p>
          <p>Actress · Hyderabad, Telangana, India</p>
          <a
            className="footer-instagram"
            href={INSTAGRAM.url}
            target="_blank"
            rel="noreferrer"
          >
            Instagram {INSTAGRAM.handle}
          </a>
        </div>
        <p className="footer-note">
          Professional portfolio for audition and casting use. Details as
          provided by the artist.
        </p>
      </footer>

      {activePhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActivePhoto(null)}
          >
            Close
          </button>
          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            onClick={(event) => event.stopPropagation()}
          />
          <p>{activePhoto.label}</p>
        </div>
      )}
    </div>
  );
}
