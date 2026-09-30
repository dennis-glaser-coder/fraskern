import { useMemo, useState } from 'react'
import { ArrowRight, BadgeCheck, Gauge, Search, ShoppingCart, Layers3, Wrench, Factory } from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'

const productImages = {
  universal: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A8%E5%B0%8F%E5%BE%84%E5%B9%B3%E5%88%80.png',
  hard: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A865%E5%B9%B3%E5%88%80-1.png',
  alu: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%93%9D%E7%94%A8%E4%B8%83%E5%BD%A9%E7%90%83%E5%88%80-1.png',
  rough: 'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A8%E7%B2%97%E7%9A%AE%E5%88%80.png',
}

const materials = [
  { code:'P', name:'Stahl', text:'Allgemeine und legierte Stähle' },
  { code:'M', name:'Edelstahl', text:'Korrosionsbeständige Werkstoffe' },
  { code:'N', name:'Aluminium', text:'Aluminium und NE-Metalle' },
  { code:'K', name:'Guss', text:'Gusswerkstoffe' },
  { code:'H', name:'Hochfeste Stähle', text:'Anspruchsvolle harte Werkstoffe' },
]

const categories = [
  { code:'01', key:'universal', name:'Universalfräser', short:'Vielseitig. Präzise. Effizient.', text:'VHM-Schaftfräser für Stahl und Guss.', image:productImages.universal },
  { code:'02', key:'hard', name:'Hochleistungsfräser', short:'Für anspruchsvolle Werkstoffe.', text:'Beschichtete VHM-Fräser für hochfeste Werkstoffe und Edelstahl.', image:productImages.hard },
  { code:'03', key:'alu', name:'Aluminiumfräser', short:'Optimiert für NE-Metalle.', text:'Scharfe Geometrien und große Spanräume für Aluminium.', image:productImages.alu },
  { code:'04', key:'rough', name:'Schruppfräser', short:'Für hohen Materialabtrag.', text:'Schruppgeometrie für Stahl und Guss.', image:productImages.rough },
]

const applications = ['Universal', 'Schlichten', 'Schruppen', 'Nuten']

function ProductRow({ product }) {
  return (
    <article className="series-row">
      <div className="series-row__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="series-row__main">
        <span className="eyebrow">{product.subtitle}</span>
        <h3>{product.name}</h3>
        <p>{product.materials.join(' · ')}</p>
      </div>
      <div className="series-row__specs">
        <span>{product.flutes}</span>
        <span>{product.coating}</span>
      </div>
      <a className="series-row__link" href="#finder">Zur Auswahl <ArrowRight size={16}/></a>
    </article>
  )
}

export default function App() {
  const [selectedMaterial, setSelectedMaterial] = useState('Stahl')
  const [selectedApplication, setSelectedApplication] = useState('Universal')

  const recommendation = useMemo(() => {
    if (selectedMaterial === 'Aluminium') return categories.find(c => c.key === 'alu')
    if (selectedApplication === 'Schruppen') return categories.find(c => c.key === 'rough')
    if (selectedMaterial === 'Edelstahl' || selectedMaterial === 'Hochfeste Stähle') return categories.find(c => c.key === 'hard')
    return categories.find(c => c.key === 'universal')
  }, [selectedMaterial, selectedApplication])

  return (
    <div className="site-shell">
      <header className="header-shell">
        <div className="header-main container">
          <a className="brand brand--master" href="#top" aria-label="FRÄSKERN Startseite">
            <span className="master-logo-frame master-logo-frame--header">
              <img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo" />
            </span>
          </a>

          <div className="header-search">
            <Search size={18}/>
            <span>Fräser, Durchmesser oder Werkstoff suchen …</span>
            <button aria-label="Suche starten"><Search size={17}/></button>
          </div>

          <div className="header-actions">
            <button className="cart-btn"><ShoppingCart size={18}/> Warenkorb</button>
          </div>
        </div>

        <div className="header-nav">
          <nav className="nav container">
            <a href="#werkstoff">Werkstoff</a>
            <a href="#familien">Fräser</a>
            <a href="#serien">Serien</a>
            <a href="#finder">Fräserfinder</a>
            <a href="#wissen">Qualität</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--photo">
          <div className="hero-photo-bg" aria-hidden="true">
            <img src="https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?cs=srgb&fm=jpg" alt="" />
          </div>
          <div className="hero-grid container">
            <div className="hero-copy">
              <span className="kicker kicker--light">VHM-FRÄSER FÜR PROFESSIONELLE ZERSPANUNG</span>
              <h1>Präzision zum<br/><span>fairen Preis.</span></h1>
              <p>Hochwertige VHM-Fräser für professionelle Anwendungen. Klar ausgewählt, technisch sauber beschrieben und fair kalkuliert.</p>
              <div className="hero-actions">
                <a className="btn btn-primary hero-cta" href="#werkstoff">Passenden Fräser finden <ArrowRight size={18}/></a>
              </div>
              <div className="hero-facts hero-facts--dark">
                <span><BadgeCheck size={18}/> VHM-Qualität</span>
                <span><Gauge size={18}/> Klare technische Daten</span>
                <span><Layers3 size={18}/> Fokus auf Fräser</span>
              </div>
            </div>
            <div className="hero-photo-space" aria-hidden="true"/>
          </div>
        </section>

        <section className="material-section container" id="werkstoff">
          <div className="section-heading material-heading">
            <div>
              <span className="kicker">1 · WERKSTOFF WÄHLEN</span>
              <h2>Was möchtest du bearbeiten?</h2>
            </div>
            <p>Starte beim Werkstoff. So kommst du schneller zur passenden Fräserfamilie, statt dich durch ein Vollsortiment zu klicken.</p>
          </div>

          <div className="material-cards">
            {materials.map(material => (
              <button
                key={material.name}
                className={selectedMaterial === material.name ? 'material-card active' : 'material-card'}
                onClick={() => setSelectedMaterial(material.name)}
              >
                <span className="material-card__code">{material.code}</span>
                <strong>{material.name}</strong>
                <small>{material.text}</small>
                <ArrowRight size={17}/>
              </button>
            ))}
          </div>
        </section>

        <section className="families-section" id="familien">
          <div className="container">
            <div className="section-heading family-heading">
              <div>
                <span className="kicker">2 · FRÄSERFAMILIE</span>
                <h2>Für Material und Anwendung.</h2>
              </div>
              <p>Vier klar getrennte Fräserfamilien für die wichtigsten Anwendungen zum Start.</p>
            </div>

            <div className="category-strip category-strip--embedded">
              {categories.map(category => (
                <a className="category-tile" href="#serien" key={category.name}>
                  <div className="category-tile__image">
                    <img src={category.image} alt={category.name} />
                  </div>
                  <div className="category-tile__body">
                    <span className="category-code">{category.code}</span>
                    <h3>{category.name}</h3>
                    <p>{category.short}</p>
                    <ArrowRight size={19}/>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="series-section container" id="serien">
          <div className="section-heading series-heading">
            <div>
              <span className="kicker">3 · PRODUKTSERIEN</span>
              <h2>Technisch klar statt doppelt gezeigt.</h2>
            </div>
            <p>Die Produktserien werden hier kompakt mit Einsatzbereich und Kerndaten dargestellt. Einzelne Durchmesser und Schnittdaten ergänzen wir erst mit belastbaren Herstellerdaten.</p>
          </div>

          <div className="series-list">
            {products.map(product => <ProductRow key={product.id} product={product}/>)}
          </div>
        </section>

        <section className="finder-section" id="finder">
          <div className="container finder-card finder-card--guided">
            <div className="finder-intro">
              <span className="kicker">4 · FRÄSERFINDER</span>
              <h2>In zwei Schritten zur Vorauswahl.</h2>
              <p>Werkstoff und Anwendung auswählen. Daraus leiten wir die passende Fräserfamilie ab.</p>
            </div>

            <div className="finder-control">
              <small>WERKSTOFF</small>
              <div className="finder-options">
                {materials.map(material => (
                  <button
                    key={material.name}
                    className={selectedMaterial === material.name ? 'finder-option active' : 'finder-option'}
                    onClick={() => setSelectedMaterial(material.name)}
                  >
                    <b>{material.code}</b>{material.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="finder-control">
              <small>ANWENDUNG</small>
              <div className="finder-options">
                {applications.map(application => (
                  <button
                    key={application}
                    className={selectedApplication === application ? 'finder-option active' : 'finder-option'}
                    onClick={() => setSelectedApplication(application)}
                  >
                    {application}
                  </button>
                ))}
              </div>
            </div>

            <div className="finder-result">
              <span>VORAUSWAHL</span>
              <strong>{recommendation.name}</strong>
              <p>{recommendation.text}</p>
              <a href="#serien">Serie ansehen <ArrowRight size={16}/></a>
            </div>
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
