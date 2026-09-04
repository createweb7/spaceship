import Link from "next/link";
import VisitLink from "../components/VisitLink";
import BackToTop from "../components/BackToTop";
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
        <img className="wordmark" src="/spaceship_logo_white_new.png" alt="SPACESHIP" />
        <p className="tagline">Menu</p>
      </header>

      <main>
        <div className="group">
          <h2>Burgers</h2>
          <div className="subgroup">
            <h3>Beef</h3>
            <div className="item">
              <div className="item-row">
                <span className="name">Cheeseburger</span>
                <span className="fill"></span>
                <span className="price">£9</span>
              </div>
              <p className="desc">
                Soft Potato Buns · 2 x Smash Patties · American Cheese · Onions · Pickles · Ketchup
                &amp; Mustard
              </p>
            </div>
            <div className="item">
              <div className="item-row">
                <span className="name">House Burger</span>
                <span className="fill"></span>
                <span className="price">£10</span>
              </div>
              <p className="desc">
                Soft Potato Buns · 2 x Smash Patties · American Cheese · Turkey Bacon · Caramelised
                Onions · Pickles · House Sauce
              </p>
            </div>
            <div className="item">
              <div className="item-row">
                <span className="name">Classic</span>
                <span className="fill"></span>
                <span className="price">£11</span>
              </div>
              <p className="desc">
                Soft Sesame Buns · Thick Patty · American Cheese · Onions · Pickles · Lettuce ·
                House Sauce
              </p>
            </div>
            <div className="item">
              <div className="item-row">
                <span className="name">Extra Patty</span>
                <span className="fill"></span>
                <span className="price">£3</span>
              </div>
            </div>
          </div>
          <div className="subgroup">
            <h3>Chicken</h3>
            <div className="item">
              <div className="item-row">
                <span className="name">Buttermilk Chicken Sliders</span>
                <span className="fill"></span>
                <span className="price">£10</span>
              </div>
              <p className="desc">
                Soft Potato Buns · Chicken Tenders · American Cheese · Slaw · Lettuce · Pickles ·
                House Sauce
              </p>
            </div>
          </div>
        </div>

        <div className="group">
          <h2>Sides</h2>
          <div className="item">
            <div className="item-row">
              <span className="name">Buttermilk Chicken Tenders</span>
              <span className="fill"></span>
              <span className="price">£7</span>
            </div>
            <p className="desc">Tenders · Spring Onions · Sauce</p>
          </div>
          <div className="item">
            <div className="item-row">
              <span className="name">Chicken Loaded Fries</span>
              <span className="fill"></span>
              <span className="price">£8</span>
            </div>
            <p className="desc">
              Skin On Fries · Tenders · Slaw · Fried Onion · Jalapeño&apos;s · Cheese Sauce · House
              Sauce
            </p>
          </div>
          <div className="item">
            <div className="item-row">
              <span className="name">Skin On Fries</span>
              <span className="fill"></span>
              <span className="price">£3</span>
            </div>
          </div>
        </div>

        <div className="group">
          <h2>Sauce</h2>
          <div className="item">
            <div className="item-row">
              <span className="name">House</span>
              <span className="fill"></span>
              <span className="price">£1</span>
            </div>
          </div>
          <div className="item">
            <div className="item-row">
              <span className="name">Ranch</span>
              <span className="fill"></span>
              <span className="price">£1</span>
            </div>
          </div>
        </div>

        <div className="group">
          <h2>Drinks</h2>
          <div className="item">
            <div className="item-row">
              <span className="name">Water</span>
              <span className="fill"></span>
              <span className="price">£2</span>
            </div>
          </div>
          <div className="item">
            <div className="item-row">
              <span className="name">Coke</span>
              <span className="fill"></span>
              <span className="price">£2</span>
            </div>
          </div>
          <div className="item">
            <div className="item-row">
              <span className="name">Diet Coke</span>
              <span className="fill"></span>
              <span className="price">£2</span>
            </div>
          </div>
        </div>

        <div className="group">
          <h2>Thick Shakes</h2>
          <div className="item">
            <div className="item-row">
              <span className="name">Oreo</span>
              <span className="fill"></span>
              <span className="price">£6</span>
            </div>
          </div>
          <div className="item">
            <div className="item-row">
              <span className="name">Salted Caramel</span>
              <span className="fill"></span>
              <span className="price">£6</span>
            </div>
          </div>
        </div>

        <div className="group">
          <h2>Desserts</h2>
          <div className="item">
            <div className="item-row">
              <span className="name">New York Baked Cheesecake</span>
              <span className="fill"></span>
              <span className="price">£6</span>
            </div>
          </div>
        </div>

        <p className="note">
          Please speak to a member of staff about any allergies or intolerances before placing
          your order. Full allergen information is available on request.
        </p>
        <p className="note">All prices in £ · Subject to change</p>
      </main>

      <footer>
        <BackToTop />
        <img src="/spaceship_logo_white_new.png" alt="SPACESHIP" />
        <p className="footer-links">
          <Link href="/">Home</Link> · <VisitLink>Find Us</VisitLink>
        </p>
        <p>© 2026 SPACESHIP LONDON · ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
}
