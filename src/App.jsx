import { ArrowRight, Box, Gauge, PackageCheck, Search, Settings2, ShoppingCart, Wrench } from 'lucide-react'
import { products } from './data/products.js'

const materials = ['Stahl', 'Edelstahl', 'Aluminium', 'Guss', 'Kunststoff', 'Gehärtet']

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
      <div className="topbar">Versandkostenfrei ab 75 € · Lagerware schnell verfügbar · B2B auf Rechnung geplant</div>
      <header className="header container">
        <a className="brand" href="#top" aria-label="FRÄSKERN Startseite">
          <div className="brand-mark" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
          <div><span className="brand-name">FRÄSKERN</span><span className="brand-sub">CUTTING TOOLS</span></div>
        </a>
        <nav className="nav">
          <a href="#produkte">Werkzeuge</a><a href="#finder">Werkzeugfinder</a><a href="#sonder">Sonderwerkzeuge</a><a href="#wissen">Know-how</a>
        </nav>
        <div className="header-actions"><button className="plain-btn"><Search size={19}/></button><button className="cart-btn"><ShoppingCart size={18}/> Warenkorb</button></div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <span className="kicker">PRÄZISION FÜR PRODUKTIVE ZERSPANUNG</span>
              <h1>Das richtige Werkzeug.<br/><span>Ohne Umwege.</span></h1>
              <p>Professionelle Zerspanungswerkzeuge, verständliche Schnittdaten und digitale Werkzeugauswahl für CNC-Fertiger.</p>
              <div className="hero-actions"><a className="btn btn-primary" href="#finder">Werkzeug finden <ArrowRight size={18}/></a><a className="btn btn-secondary" href="#produkte">Produkte ansehen</a></div>
              <div className="trust-row"><span><PackageCheck/> Schneller Versand</span><span><Gauge/> Praxistaugliche Schnittwerte</span><span><Wrench/> Sonderwerkzeuge</span></div>
            </div>
            <div className="hero-visual" aria-label="Stilisierter Fräser">
              <div className="halo"/><div className="cutter"><span/><span/><span/><span/></div>
              <div className="technical-label label-a"><small>VHM</small><strong>Ø 10</strong></div>
              <div className="technical-label label-b"><small>COATING</small><strong>AlTiN</strong></div>
            </div>
          </div>
        </section>

        <section className="finder-section" id="finder">
          <div className="container finder-card">
            <div className="section-heading compact"><span className="kicker">WERKZEUGFINDER</span><h2>Was möchtest du bearbeiten?</h2><p>Material auswählen. Anwendung eingrenzen. Passendes Werkzeug finden.</p></div>
            <div className="material-grid">{materials.map((material, i)=><button key={material} className={i===0?'material active':'material'}><span>{['P','M','N','K','X','H'][i]}</span>{material}</button>)}</div>
            <button className="btn btn-primary finder-next">Weiter zur Anwendung <ArrowRight size={18}/></button>
          </div>
        </section>

        <section className="products-section container" id="produkte">
          <div className="section-heading row"><div><span className="kicker">AUSGEWÄHLTE WERKZEUGE</span><h2>Für den täglichen Einsatz.</h2></div><a href="#produkte">Alle Werkzeuge <ArrowRight size={16}/></a></div>
          <div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>
        </section>

        <section className="custom-section" id="sonder">
          <div className="container custom-grid">
            <div><span className="kicker">CUSTOM TOOLS</span><h2>Standard passt nicht?<br/>Dann bauen wir passend.</h2><p>Konfiguriere Sonderwerkzeuge digital und übermittle die wichtigsten Abmessungen direkt an uns. Später entsteht daraus eine automatisierte Angebotsstrecke.</p><button className="btn btn-light"><Settings2 size={18}/> Sonderwerkzeug konfigurieren</button></div>
            <div className="drawing-card"><div className="drawing"><span className="dimension d1">Ø d1</span><span className="dimension d2">L2</span><span className="dimension d3">L1</span><div className="drawing-tool"/></div><div className="drawing-footer"><Box size={18}/><span>Konfiguration speichern · Angebot anfragen · später nachbestellen</span></div></div>
          </div>
        </section>

        <section className="value-section container" id="wissen">
          <div className="value"><span>01</span><h3>Werkzeug statt Katalog</h3><p>Schneller zur richtigen Geometrie statt tausende Artikel manuell zu durchsuchen.</p></div>
          <div className="value"><span>02</span><h3>Daten, die helfen</h3><p>Schnittwerte und Materialeignung dort, wo die Kaufentscheidung fällt.</p></div>
          <div className="value"><span>03</span><h3>Digital gedacht</h3><p>Shopify-ready, Werkzeugfinder-ready und für B2B-Prozesse vorbereitet.</p></div>
        </section>
      </main>

      <footer><div className="container footer-inner"><div className="brand brand--footer"><div className="brand-mark small"><i/><i/><i/><i/><i/><i/></div><div><span className="brand-name">FRÄSKERN</span><span className="brand-sub">CUTTING TOOLS</span></div></div><p>Frontend-Prototyp · Checkout noch nicht aktiv</p></div></footer>
    </div>
  )
}
