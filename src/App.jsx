import { ArrowRight, BadgeCheck, Gauge, Search, ShoppingCart } from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'

const materials = ['Stahl', 'Edelstahl', 'Aluminium', 'Guss', 'Hochfeste Stähle']

const productImages = {
  universal: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A8%E5%B0%8F%E5%BE%84%E5%B9%B3%E5%88%80.png',
  hard: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A865%E5%B9%B3%E5%88%80-1.png',
  alu: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%93%9D%E7%94%A8%E4%B8%83%E5%BD%A9%E7%90%83%E5%88%80-1.png',
  rough: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A8%E7%B2%97%E7%9A%AE%E5%88%80.png',
}

const categories = [
  {
    code: '01',
    name: 'Universalfräser',
    text: 'VHM-Schaftfräser für Stahl und Guss – robust, präzise und für den täglichen Einsatz.',
    image: productImages.universal,
  },
  {
    code: '02',
    name: 'Hochleistungsfräser',
    text: 'Beschichtete VHM-Fräser für hochfeste Werkstoffe und anspruchsvolle Bearbeitung.',
    image: productImages.hard,
  },
  {
    code: '03',
    name: 'Aluminiumfräser',
    text: 'Scharfe Geometrien und große Spanräume für Aluminium und NE-Metalle.',
    image: productImages.alu,
  },
  {
    code: '04',
    name: 'Schruppfräser',
    text: 'Schruppgeometrie für hohen Materialabtrag bei Stahl und Guss.',
    image: productImages.rough,
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
                <img src={productImages.hard} alt="Beschichteter VHM-Hochleistungsfräser" />
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
            <p>VHM-Fräser für Stahl, Edelstahl, Aluminium, Guss und hochfeste Werkstoffe – klar nach Anwendung und Werkstoff gegliedert.</p>
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
              <span className="kicker">AUSGEWÄHLTE FRÄSER</span>
              <h2>Für die tägliche Fertigung.</h2>
            </div>
            <span className="catalog-note">Technische Varianten werden aktuell aufbereitet.</span>
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
          <div className="value"><span>01</span><h3>Fokus auf Fräser</h3><p>Eine klare Auswahl an VHM-Fräsern für typische CNC-Anwendungen – ohne unnötiges Vollsortiment.</p></div>
          <div className="value"><span>02</span><h3>Technik klar beschrieben</h3><p>Werkstoffgruppe, Geometrie, Schneidenzahl, Beschichtung und Abmessungen werden nachvollziehbar aufbereitet.</p></div>
          <div className="value"><span>03</span><h3>Fair kalkuliert</h3><p>Professionelle Werkzeugqualität mit einer Preisstruktur, die für die tägliche Fertigung sinnvoll bleibt.</p></div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand brand--footer" href="#top" aria-label="FRÄSKERN Startseite">
            <span className="master-logo-frame master-logo-frame--footer">
              <img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo" />
            </span>
          </a>
          <p>FRÄSKERN · VHM-Fräser für professionelle Zerspanung</p>
        </div>
      </footer>
    </div>
  )
}
