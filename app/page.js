import Link from "next/link";
import VisitLink from "./components/VisitLink";
import ScrollToVisit from "./components/ScrollToVisit";
import BackToTop from "./components/BackToTop";
import "./page.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="wordmark" src="/spaceship_logo_new.png" alt="SPACESHIP" />
        <p className="tagline">Smash Burgers</p>
        <p className="sub">Minimal space. Maximum flavour.</p>
        <div className="cta-row">
          <Link className="cta" href="/menu">
            Menu
          </Link>
          <VisitLink className="cta">Visit Us</VisitLink>
        </div>
        <div className="scroll-hint" aria-hidden="true"></div>
      </section>
      <ScrollToVisit />

      <section className="info" id="visit">
        <div className="info-inner">
          <h2>Find Us</h2>
          <div className="cols">
            <div className="col">
              <h3>Location</h3>
              <p>
                188 Upper Richmond Road
                <br />
                Putney, London SW15 2SH
              </p>
            </div>
            <div className="col">
              <h3>Hours</h3>
              <p>
                Mon – Thu &nbsp;12pm – 11pm
                <br />
                Fri – Sat &nbsp;12pm – 12am
                <br />
                Sun &nbsp;12pm – 11pm
              </p>
            </div>
            <div className="col">
              <h3>Contact</h3>
              <p>
                <a href="tel:+447908083593">+44 7908 083593</a>
                <br />
                <a
                  href="https://www.instagram.com/spaceshiplondon?utm_source=qr"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <p className="note">Walk-ins welcome · Takeaway available</p>
        </div>
      </section>

      <footer>
        <BackToTop />
        <img src="/spaceship_logo_white_new.png" alt="SPACESHIP" />
        <p className="footer-links">
          <Link href="/menu">Menu</Link> · <VisitLink>Find Us</VisitLink>
        </p>
        <p>© 2026 SPACESHIP LONDON · ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
}
