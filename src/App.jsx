import { ArrowRight, BadgeCheck, Gauge, Search, ShoppingCart } from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'

const materials = ['Stahl', 'Edelstahl', 'Aluminium', 'Guss', 'Kunststoff', 'Gehärtet']

const categories = [
  { code: '01', name: 'Fräsen', type: 'milling', text: 'VHM-Schaftfräser für Stahl, Edelstahl und Aluminium.' },
  { code: '02', name: 'Bohren', type: 'drill', text: 'Präzisionsbohrer für prozesssichere Bohrungen.' },
  { code: '03', name: 'Gewinden', type: 'tap', text: 'Werkzeuge für saubere und reproduzierbare Gewinde.' },
  { code: '04', name: 'Senken', type: 'countersink', text: 'Senker für gratfreie, maßhaltige Ergebnisse.' },
  { code: '05', name: 'Reiben', type: 'reamer', text: 'Reibwerkzeuge für hohe Maß- und Oberflächengüte.' },
]

function ToolArtwork({ type = 'milling', className = '' }) {
  const common = (
    <defs>
      <linearGradient id="metal" x1="0" x2="1">
        <stop offset="0" stopColor="#1b2931"/>
        <stop offset=".18" stopColor="#566a75"/>
        <stop offset=".42" stopColor="#d3dde2"/>
        <stop offset=".58" stopColor="#81939d"/>
        <stop offset=".82" stopColor="#334650"/>
        <stop offset="1" stopColor="#101b22"/>
      </linearGradient>
      <linearGradient id="darkMetal" x1="0" x2="1">
        <stop offset="0" stopColor="#0d151a"/>
        <stop offset=".5" stopColor="#344b58"/>
        <stop offset="1" stopColor="#111c22"/>
      </linearGradient>
      <linearGradient id="blueMetal" x1="0" x2="1">
        <stop offset="0" stopColor="#15384b"/>
        <stop offset=".5" stopColor="#2a6f94"/>
        <stop offset="1" stopColor="#122a37"/>
      </linearGradient>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="10" dy="14" stdDeviation="10" floodColor="#10212b" floodOpacity=".22"/>
      </filter>
    </defs>
  )

  let shape = null

  if (type === 'drill') {
    shape = (
      <g transform="rotate(-8 180 100)" filter="url(#shadow)">
        <rect x="222" y="28" width="48" height="144" rx="8" fill="url(#metal)"/>
        <path d="M105 46 L223 46 L223 164 L126 164 Q107 154 103 136 Z" fill="url(#darkMetal)"/>
        <path d="M116 54 C165 72 182 92 217 112" fill="none" stroke="#80939e" strokeWidth="20" strokeLinecap="round"/>
        <path d="M112 103 C157 118 181 137 218 157" fill="none" stroke="#1b2d37" strokeWidth="20" strokeLinecap="round"/>
        <path d="M103 136 L80 152 L115 164" fill="#263943"/>
        <path d="M103 136 L81 114 L111 112" fill="#8c9aa2"/>
      </g>
    )
  } else if (type === 'tap') {
    shape = (
      <g transform="rotate(-5 180 100)" filter="url(#shadow)">
        <rect x="224" y="25" width="45" height="150" rx="7" fill="url(#metal)"/>
        <rect x="111" y="52" width="118" height="104" rx="9" fill="url(#darkMetal)"/>
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${116 + i * 12} 52 L${103 + i * 12} 156`} stroke="#a8b7bf" strokeWidth="5"/>
        ))}
        <path d="M110 52 L88 70 L88 139 L111 156" fill="#253945"/>
        <path d="M88 78 H118 M88 103 H118 M88 128 H118" stroke="#d0d9de" strokeWidth="4"/>
      </g>
    )
  } else if (type === 'countersink') {
    shape = (
      <g transform="rotate(-7 180 100)" filter="url(#shadow)">
        <rect x="220" y="28" width="50" height="144" rx="8" fill="url(#metal)"/>
        <path d="M96 100 L180 44 L223 44 L223 156 L180 156 Z" fill="url(#metal)"/>
        <path d="M96 100 L183 66 L183 134 Z" fill="url(#darkMetal)"/>
        <path d="M125 83 L184 50 M125 117 L184 150" stroke="#d5dde1" strokeWidth="5" opacity=".7"/>
      </g>
    )
  } else if (type === 'reamer') {
    shape = (
      <g transform="rotate(-6 180 100)" filter="url(#shadow)">
        <rect x="223" y="26" width="48" height="148" rx="8" fill="url(#metal)"/>
        <rect x="108" y="47" width="118" height="108" rx="9" fill="url(#metal)"/>
        {[0,1,2,3,4,5].map(i => (
          <path key={i} d={`M${118 + i*18} 52 L${103 + i*18} 150`} stroke="#243844" strokeWidth="8" strokeLinecap="round"/>
        ))}
        <path d="M108 49 L87 69 L87 136 L108 155" fill="#1b2e38"/>
      </g>
    )
  } else {
    shape = (
      <g transform="rotate(-8 180 100)" filter="url(#shadow)">
        <rect x="220" y="22" width="54" height="154" rx="9" fill="url(#metal)"/>
        <path d="M107 43 L224 43 L224 160 L118 160 Q103 151 100 132 Z" fill="url(#darkMetal)"/>
        <path d="M107 46 C149 61 181 82 220 103" fill="none" stroke="url(#blueMetal)" strokeWidth="23" strokeLinecap="round"/>
        <path d="M105 84 C149 100 179 121 220 143" fill="none" stroke="#738994" strokeWidth="19" strokeLinecap="round" opacity=".9"/>
        <path d="M101 126 C135 139 161 151 188 162" fill="none" stroke="#172832" strokeWidth="20" strokeLinecap="round"/>
        <path d="M100 132 L77 153 L113 160" fill="#1d313c"/>
        <path d="M100 132 L77 109 L111 108" fill="#899aa3"/>
        <path d="M108 43 L81 64 L115 71" fill="#2b414c"/>
      </g>
    )
  }

  return (
    <svg className={`tool-artwork ${className}`} viewBox="0 0 360 200" role="img" aria-label="Technische Werkzeugdarstellung">
      {common}
      <ellipse cx="183" cy="174" rx="118" ry="12" fill="#8ea0a9" opacity=".13"/>
      {shape}
    </svg>
  )
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__top">
        <span className="badge">{product.badge}</span>
        <ToolArtwork type="milling" className="product-tool-artwork" />
        <span className="product-quality-tag">VHM</span>
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

        <div className="header-search">
          <Search size={17}/>
          <span>Produkt, Durchmesser oder Anwendung suchen …</span>
        </div>

        <nav className="nav">
          <a href="#kategorien">Sortiment</a>
          <a href="#finder">Werkzeugfinder</a>
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

            <div className="hero-visual" aria-label="Technische Darstellung eines VHM-Fräsers">
              <div className="hero-tool-stage">
                <div className="engineering-ring engineering-ring--outer"/>
                <div className="engineering-ring engineering-ring--inner"/>
                <ToolArtwork type="milling" className="hero-tool-artwork" />
                <span className="drawing-axis drawing-axis--x"/>
                <span className="drawing-axis drawing-axis--y"/>
              </div>
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
                <div className="category-artwork-wrap">
                  <ToolArtwork type={category.type} className="category-tool-artwork" />
                </div>
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
