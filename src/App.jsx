import { ArrowRight, BadgeCheck, Gauge, Search, ShoppingCart } from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'
import heroCatalog from './catalog/hero.js'
import universalCatalog from './catalog/universal.js'
import roughingCatalog from './catalog/roughing.js'

const materials = ['Stahl', 'Edelstahl', 'Aluminium', 'Guss', 'Hochfeste Stähle']

const categories = [
  {
    code: '01',
    name: 'Universalfräser',
    text: 'VHM-Fräser für Stahl und Guss – als Schaft-, Kugel- und Eckradiusfräser.',
    image: universalCatalog,
  },
  {
    code: '02',
    name: 'Hochleistungsfräser',
    text: 'Fräserfamilien für hohe Härten, Edelstahl und anspruchsvolle Bearbeitung.',
    image: heroCatalog,
  },
  {
    code: '03',
    name: 'Aluminiumfräser',
    text: 'Scharfe Geometrien und große Spanräume für Aluminium und NE-Metalle.',
    image: universalCatalog,
  },
  {
    code: '04',
    name: 'Schruppfräser',
    text: 'Fräser mit Schruppgeometrie für hohen Materialabtrag bei Stahl und Guss.',
    image: roughingCatalog,
  },
]

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__top">
        <span className="badge">{product.badge}</span>
        <img className="catalog-product-image" src={product.image} alt={product.name} />
        <span className="product-quality-tag">VHM</span>
      </div>
      <div className="product-card__body">
        <p className="eyebrow">{product.subtitle}</p>
        <h3>{product.name}</h3>
        <div className="spec-row">
          <span>{product.flutes}</span>
          <span>{product.coating}</span>
        </div>
        <p className="muted">{product.materials.join(' · ')}</p>
        <div className="product-card__footer">
          <div>
            <strong>Preis folgt</strong>
            <small>nach finaler Kalkulation</small>
          </div>
          <button className="icon-btn" aria-label="Produkt vormerken"><ShoppingCart size={18}/></button>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="header container">
        <a className="brand brand--master" href="#top" aria-label="FRÄSKERN Startseite">
          <span className="master-logo-frame master-logo-frame--header">
            <img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo" />
          </span>
        </a>

        <div className="header-search">
          <Search size={17}/>
          <span>Fräser, Durchmesser oder Werkstoff suchen …</span>
        </div>

        <nav className="nav">
          <a href="#kategorien">Fräser</a>
          <a href="#produkte">Produkte</a>
          <a href="#finder">Fräserfinder</a>
          <a href="#wissen">Qualität</a>
        </nav>

        <div className="header-actions">
          <button className="cart-btn"><ShoppingCart size={18}/> Warenkorb</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <span className="kicker">VHM-FRÄSER FÜR PROFESSIONELLE ZERSPANUNG</span>
              <h1>Präzision zum<br/><span>fairen Preis.</span></h1>
              <p>Hochwertige VHM-Fräser für professionelle Anwendungen. Klare Geometrien, nachvollziehbare technische Daten und eine faire Kalkulation.</p>
              <div className="hero-actions">
                <a className="btn btn-primary hero-cta" href="#kategorien">Fräser entdecken <ArrowRight size={18}/></a>
              </div>
              <div className="hero-facts">
                <span><BadgeCheck size={17}/> VHM-Fräser im Fokus</span>
                <span><Gauge size={17}/> Technische Daten klar aufbereitet</span>
                <span className="hero-fact-price">Fair kalkuliert</span>
              </div>
            </div>

            <div className="hero-visual hero-visual--catalog">
              <div className="catalog-hero-card">
                <img src={heroCatalog} alt="VHM-Fräser aus dem Herstellerkatalog" />
              </div>
              <div className="spec-rail">
                <div><small>SORTIMENT</small><strong>VHM-Fräser</strong></div>
                <div><small>GEOMETRIEN</small><strong>2Z / 3Z / 4Z+</strong></div>
                <div><small>WERKSTOFFE</small><strong>P · M · K · N · H</strong></div>
                <div><small>FOKUS</small><strong>Präzision</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="category-section container" id="kategorien">
          <div className="section-heading category-heading">
            <div>
              <span className="kicker">FRÄSER-SORTIMENT</span>
              <h2>Für Material und Anwendung.</h2>
            </div>
            <p>Zum Start konzentriert sich FRÄSKERN ausschließlich auf Fräser. Die Produktfamilien orientieren sich an den realen Serien des Herstellers.</p>
          </div>

          <div className="category-grid category-grid--mills">
            {categories.map(category => (
              <a className="category-card" href="#produkte" key={category.name}>
                <span className="category-code">{category.code}</span>
                <div className="category-artwork-wrap category-artwork-wrap--photo">
                  <img src={category.image} alt={category.name} />
                </div>
                <h3>{category.name}</h3>
                <p>{category.text}</p>
                <span className="category-link">Fräser ansehen <ArrowRight size={15}/></span>
              </a>
            ))}
          </div>
        </section>

        <section className="products-section container" id="produkte">
          <div className="section-heading row">
            <div>
              <span className="kicker">ERSTE PRODUKTFAMILIEN</span>
              <h2>Fräser statt Vollsortiment.</h2>
            </div>
            <span className="catalog-note">Produktdaten aus Herstellerkatalog – Preise noch offen</span>
          </div>
          <div className="product-grid product-grid--mills">
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
          </div>
        </section>

        <section className="finder-section" id="finder">
          <div className="container finder-card">
            <div className="section-heading compact">
              <span className="kicker">FRÄSERFINDER</span>
              <h2>Vom Werkstoff zum passenden Fräser.</h2>
              <p>Werkstoff auswählen und anschließend Geometrie, Bearbeitung und Durchmesser eingrenzen.</p>
            </div>
            <div className="material-grid">
              {materials.map((material, i) => (
                <button key={material} className={i===0 ? 'material active' : 'material'}>
                  <span>{['P','M','N','K','H'][i]}</span>{material}
                </button>
              ))}
            </div>
            <button className="btn btn-primary finder-next">Auswahl starten <ArrowRight size={18}/></button>
          </div>
        </section>

        <section className="value-section container" id="wissen">
          <div className="value">
            <span>01</span>
            <h3>Fokus auf Fräser</h3>
            <p>Zum Start kein aufgeblähtes Vollsortiment, sondern eine klare Auswahl an VHM-Fräsern für typische CNC-Anwendungen.</p>
          </div>
          <div className="value">
            <span>02</span>
            <h3>Technik klar beschrieben</h3>
            <p>Werkstoffgruppe, Geometrie, Schneidenzahl, Beschichtung und Abmessungen werden nachvollziehbar aufbereitet.</p>
          </div>
          <div className="value">
            <span>03</span>
            <h3>Fair kalkuliert</h3>
            <p>Die finale Preispositionierung bauen wir auf den tatsächlichen Einkaufspreisen und einer sauberen Marge auf.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand brand--footer" href="#top" aria-label="FRÄSKERN Startseite">
            <span className="master-logo-frame master-logo-frame--footer">
              <img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo" />
            </span>
          </a>
          <p>FRÄSKERN Frontend-Prototyp · Fräser-Sortiment im Aufbau</p>
        </div>
      </footer>
    </div>
  )
}
