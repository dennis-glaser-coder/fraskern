import { ArrowRight, BadgeCheck, Gauge, Search, ShoppingCart } from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'

const materials = ['Stahl', 'Edelstahl', 'Aluminium', 'Guss', 'Kunststoff', 'Gehärtet']

const categories = [
  { code: '01', name: 'Fräsen', text: 'VHM-Schaftfräser für Stahl, Edelstahl und Aluminium.' },
  { code: '02', name: 'Bohren', text: 'Präzisionsbohrer für prozesssichere Bohrungen.' },
  { code: '03', name: 'Gewinden', text: 'Werkzeuge für saubere und reproduzierbare Gewinde.' },
  { code: '04', name: 'Senken', text: 'Senker für gratfreie, maßhaltige Ergebnisse.' },
  { code: '05', name: 'Reiben', text: 'Reibwerkzeuge für hohe Maß- und Oberflächengüte.' },
]

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__top">
        <span className="badge">{product.badge}</span>
        <div className="tool-visual" aria-hidden="true"><span /></div>
      </div>
      <div className="product-card__body">
        <p className="eyebrow">{product.subtitle}</p>
        <h3>{product.name}</h3>
        <div className="spec-row"><span>{product.diameter}</span><span>{product.coating}</span></div>
        <p className="muted">{product.materials.join(' · ')}</p>
        <div className="product-card__footer">
          <div><strong>{product.price.toFixed(2).replace('.', ',')} €</strong><small> inkl. MwSt.</small></div>
          <button className="icon-btn" aria-label="In den Warenkorb"><ShoppingCart size={18}/></button>
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
        <nav className="nav">
          <a href="#kategorien">Sortiment</a>
          <a href="#produkte">Werkzeuge</a>
          <a href="#finder">Werkzeugfinder</a>
          <a href="#wissen">Qualität</a>
        </nav>
        <div className="header-actions">
          <button className="plain-btn" aria-label="Suche"><Search size={19}/></button>
          <button className="cart-btn"><ShoppingCart size={18}/> Warenkorb</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <span className="kicker">PRÄZISIONSWERKZEUGE FÜR PROFESSIONELLE ZERSPANUNG</span>
              <h1>Präzision zum<br/><span>fairen Preis.</span></h1>
              <p>Hochwertige Zerspanungswerkzeuge für professionelle Anwendungen. Technisch klar beschrieben, zuverlässig ausgewählt und fair kalkuliert.</p>
              <div className="hero-actions">
                <a className="btn btn-primary hero-cta" href="#kategorien">Sortiment entdecken <ArrowRight size={18}/></a>
              </div>
              <div className="hero-facts">
                <span><BadgeCheck size={17}/> Qualität im Fokus</span>
                <span><Gauge size={17}/> Klare technische Daten</span>
                <span className="hero-fact-price">Fair kalkuliert</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="VHM-Fräser als technisches Produktmotiv">
              <div className="engineering-ring engineering-ring--outer"/>
              <div className="engineering-ring engineering-ring--inner"/>
              <div className="cutter cutter--refined"><span/><span/><span/><span/></div>
              <div className="spec-rail">
                <div><small>WERKSTOFF</small><strong>VHM</strong></div>
                <div><small>Ø</small><strong>10 mm</strong></div>
                <div><small>SCHNEIDEN</small><strong>4 Z</strong></div>
                <div><small>BESCHICHTUNG</small><strong>AlTiN</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="category-section container" id="kategorien">
          <div className="section-heading category-heading">
            <div>
              <span className="kicker">SORTIMENT</span>
              <h2>Direkt zum Werkzeug.</h2>
            </div>
            <p>Klare Produktgruppen statt unnötiger Umwege. Wähle zuerst den Bearbeitungsprozess.</p>
          </div>
          <div className="category-grid">
            {categories.map(category => (
              <a className="category-card" href="#produkte" key={category.name}>
                <span className="category-code">{category.code}</span>
                <div className="category-icon" aria-hidden="true"><i/><i/><i/></div>
                <h3>{category.name}</h3>
                <p>{category.text}</p>
                <span className="category-link">Werkzeuge ansehen <ArrowRight size={15}/></span>
              </a>
            ))}
          </div>
        </section>

        <section className="products-section container" id="produkte">
          <div className="section-heading row">
            <div><span className="kicker">AUSGEWÄHLTE WERKZEUGE</span><h2>Qualität für die tägliche Fertigung.</h2></div>
            <a href="#produkte">Alle Werkzeuge <ArrowRight size={16}/></a>
          </div>
          <div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>
        </section>

        <section className="finder-section" id="finder">
          <div className="container finder-card">
            <div className="section-heading compact">
              <span className="kicker">WERKZEUGFINDER</span>
              <h2>Vom Werkstoff zum passenden Werkzeug.</h2>
              <p>Material auswählen, Anwendung eingrenzen und die Auswahl sinnvoll reduzieren.</p>
            </div>
            <div className="material-grid">{materials.map((material, i)=><button key={material} className={i===0?'material active':'material'}><span>{['P','M','N','K','X','H'][i]}</span>{material}</button>)}</div>
            <button className="btn btn-primary finder-next">Auswahl starten <ArrowRight size={18}/></button>
          </div>
        </section>

        <section className="value-section container" id="wissen">
          <div className="value"><span>01</span><h3>Qualität im Fokus</h3><p>Maßhaltigkeit, saubere Geometrien und zuverlässige Standzeiten sind die Maßstäbe, an denen wir unser Sortiment ausrichten.</p></div>
          <div className="value"><span>02</span><h3>Technik klar beschrieben</h3><p>Materialeignung, Geometrie, Beschichtung und Abmessungen sollen auf einen Blick verständlich sein.</p></div>
          <div className="value"><span>03</span><h3>Fair kalkuliert</h3><p>Professionelle Zerspanungswerkzeuge mit überzeugender Qualität zu Preisen, die für die tägliche Fertigung Sinn ergeben.</p></div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand brand--footer" href="#top" aria-label="FRÄSKERN Startseite">
            <span className="master-logo-frame master-logo-frame--footer"><img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo" /></span>
          </a>
          <p>Frontend-Prototyp · Checkout noch nicht aktiv</p>
        </div>
      </footer>
    </div>
  )
}
