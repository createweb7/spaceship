import Link from "next/link";
import VisitLink from "../components/VisitLink";
import "./menu.css";

export const metadata = {
  title: "Menu — Spaceship | Smash Burgers, Putney",
  description: "Spaceship menu — smash burgers, sides, shakes. Putney, London.",
};

export default function Menu() {
  return (
    <>
      <header>
        <Link className="back" href="/">
          ‹ Home
        </Link>
        <img className="wordmark" src="/logo-white1.png" alt="SPACESHIP" />
        <p className="tagline">Menu</p>
      </header>

      <main>
        <div className="group">
          <h2>Burgers</h2>
          <div className="subgroup">
            <h3>Beef</h3>
            <div className="item">
              <span className="name">Classic Cheeseburger</span>
              <span className="fill"></span>
              <span className="price">10</span>
            </div>
            <div className="item">
              <span className="name">Patty Burger</span>
              <span className="fill"></span>
              <span className="price">11</span>
            </div>
            <div className="item">
              <span className="name">House Burger</span>
              <span className="fill"></span>
              <span className="price">12</span>
            </div>
          </div>
          <div className="subgroup">
            <h3>Chicken</h3>
            <div className="item">
              <span className="name">Classic Chicken Burger</span>
              <span className="fill"></span>
              <span className="price">10</span>
            </div>
            <div className="item">
              <span className="name">House Chicken Burger</span>
              <span className="fill"></span>
              <span className="price">11</span>
            </div>
          </div>
        </div>

        <div className="group">
          <h2>Add Ons</h2>
          <div className="item">
            <span className="name">Extra Patty</span>
            <span className="fill"></span>
            <span className="price">4</span>
          </div>
          <div className="item">
            <span className="name">Bacon</span>
            <span className="fill"></span>
            <span className="price">3</span>
          </div>
        </div>

        <div className="group">
          <h2>Sides</h2>
          <div className="item">
            <span className="name">Chicken Loaded Fries</span>
            <span className="fill"></span>
            <span className="price">8</span>
          </div>
          <div className="item">
            <span className="name">Buttermilk Chicken Tenders</span>
            <span className="fill"></span>
            <span className="price">7</span>
          </div>
          <div className="item">
            <span className="name">Fries</span>
            <span className="fill"></span>
            <span className="price">4</span>
          </div>
        </div>

        <div className="group">
          <h2>Sauce</h2>
          <div className="item">
            <span className="name">Spaceship Sauce</span>
            <span className="fill"></span>
            <span className="price">2</span>
          </div>
        </div>

        <div className="group">
          <h2>Shakes</h2>
          <div className="item">
            <span className="name">Shakes</span>
            <span className="fill"></span>
            <span className="price">6</span>
          </div>
        </div>

        <div className="group">
          <h2>Drinks</h2>
          <div className="item">
            <span className="name">Water</span>
            <span className="fill"></span>
            <span className="price">3</span>
          </div>
          <div className="item">
            <span className="name">Soft Drinks</span>
            <span className="fill"></span>
            <span className="price">3</span>
          </div>
        </div>

        <div className="group">
          <h2>Desserts</h2>
          <div className="item">
            <span className="name">Cheesecake</span>
            <span className="fill"></span>
            <span className="price">6</span>
          </div>
        </div>

        <p className="note">All prices in £ · Subject to change</p>
      </main>

      <footer>
        <img src="/logo-white1.png" alt="SPACESHIP" />
        <p className="footer-links">
          <Link href="/">Home</Link> · <VisitLink>Find Us</VisitLink>
        </p>
        <p>© 2026 SPACESHIP LONDON · ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
}
