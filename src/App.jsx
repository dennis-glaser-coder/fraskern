import { useMemo, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Search, ShoppingCart, SlidersHorizontal, X } from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'

const categories = [
  { name:'Schaftfräser', shapes:['Schaftfräser'], text:'Universelle VHM-Fräser für Stahl, Guss und harte Werkstoffe.' },
  { name:'Kugelfräser', shapes:['Kugelfräser'], text:'Für 3D-Konturen, Radien und Schlichtbearbeitung.' },
  { name:'Torusfräser', shapes:['Torusfräser'], text:'Stabile Eckenradien für Schruppen und Schlichten.' },
  { name:'Aluminiumfräser', shapes:['Aluminiumfräser'], text:'Große Spanräume und scharfe Schneiden für NE-Metalle.' },
  { name:'Schruppfräser', shapes:['Schruppfräser'], text:'Für hohen Materialabtrag bei Stahl und Guss.' },
]

function formatVariant(v){
  const parts=[`Ø${v.diameter} mm`, `Schneide ${v.cuttingLength} mm`, `Schaft Ø${v.shank} mm`, `L ${v.overall} mm`]
  if(v.radius) parts.splice(1,0,`R${v.radius}`)
  return parts.join(' · ')
}

export default function App(){
  const [query,setQuery]=useState('')
  const [shape,setShape]=useState('Alle')
  const [series,setSeries]=useState('Alle')
  const [material,setMaterial]=useState('Alle')
  const [flutes,setFlutes]=useState('Alle')
  const [selected,setSelected]=useState(null)
  const [variantIndex,setVariantIndex]=useState(0)
  const [cart,setCart]=useState([])

  const shapes=['Alle',...new Set(products.map(p=>p.shape))]
  const seriesOptions=['Alle',...new Set(products.map(p=>p.series))]
  const materialOptions=['Alle',...new Set(products.flatMap(p=>p.materials))]
  const fluteOptions=['Alle',...new Set(products.map(p=>String(p.flutes)))]

  const filtered=useMemo(()=>{
    const q=query.trim().toLowerCase()
    return products.filter(p=>{
      const hay=[p.name,p.series,p.shape,p.coating,...p.materials].join(' ').toLowerCase()
      return (!q||hay.includes(q))
        && (shape==='Alle'||p.shape===shape)
        && (series==='Alle'||p.series===series)
        && (material==='Alle'||p.materials.includes(material))
        && (flutes==='Alle'||String(p.flutes)===flutes)
    })
  },[query,shape,series,material,flutes])

  const openProduct=(p)=>{setSelected(p);setVariantIndex(0)}
  const selectedVariant=selected?.variants?.[variantIndex]

  const addToCart=()=>{
    if(!selected||!selectedVariant)return
    setCart(prev=>[...prev,{product:selected,variant:selectedVariant}])
  }

  const clearFilters=()=>{
    setShape('Alle');setSeries('Alle');setMaterial('Alle');setFlutes('Alle');setQuery('')
  }

  return (
    <div className="site-shell">
      <header className="header-shell">
        <div className="header-main container">
          <a className="brand brand--master" href="#top" aria-label="FRÄSKERN Startseite">
            <span className="master-logo-frame master-logo-frame--header">
              <img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo"/>
            </span>
          </a>
          <label className="header-search">
            <Search size={18}/>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Fräser, Serie, Beschichtung oder Werkstoff suchen …"/>
            <span className="search-button"><Search size={17}/></span>
          </label>
          <button className="cart-btn"><ShoppingCart size={18}/> Warenkorb <b>{cart.length}</b></button>
        </div>
        <div className="header-nav">
          <nav className="nav container">
            <a href="#sortiment">Fräser</a>
            <a href="#produkte">Produkte</a>
            <a href="#technik">Technik</a>
            <a href="#service">Service</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--photo">
          <div className="hero-photo-bg" aria-hidden="true">
            <img src="https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?cs=srgb&fm=jpg" alt=""/>
          </div>
          <div className="hero-grid container">
            <div className="hero-copy">
              <span className="kicker kicker--light">VHM-FRÄSER FÜR PROFESSIONELLE ZERSPANUNG</span>
              <h1>Präzision zum<br/><span>fairen Preis.</span></h1>
              <p>VHM-Fräser für Stahl, Guss, Edelstahl, Aluminium und hochfeste Werkstoffe. Direkt vergleichen, passende Abmessung wählen und technisch sauber entscheiden.</p>
              <a className="btn btn-primary" href="#produkte">Fräser ansehen <ArrowRight size={18}/></a>
            </div>
            <div className="hero-photo-space"/>
          </div>
        </section>

        <section className="category-shop container" id="sortiment">
          <div className="section-title">
            <span className="kicker">FRÄSER-SORTIMENT</span>
            <h2>Direkt zur passenden Bauform.</h2>
          </div>
          <div className="shop-categories">
            {categories.map(cat=>(
              <button key={cat.name} className="shop-category" onClick={()=>{setShape(cat.shapes[0]);document.querySelector('#produkte')?.scrollIntoView({behavior:'smooth'})}}>
                <div className="shop-category__visual">
                  <img src={products.find(p=>cat.shapes.includes(p.shape))?.image} alt=""/>
                </div>
                <div>
                  <strong>{cat.name}</strong>
                  <span>{cat.text}</span>
                </div>
                <ArrowRight size={18}/>
              </button>
            ))}
          </div>
        </section>

        <section className="catalog-section" id="produkte">
          <div className="container catalog-layout">
            <aside className="catalog-filters">
              <div className="filters-head"><SlidersHorizontal size={18}/><strong>Filtern</strong></div>

              <label>Fräserform
                <select value={shape} onChange={e=>setShape(e.target.value)}>
                  {shapes.map(x=><option key={x}>{x}</option>)}
                </select>
              </label>

              <label>Serie
                <select value={series} onChange={e=>setSeries(e.target.value)}>
                  {seriesOptions.map(x=><option key={x}>{x}</option>)}
                </select>
              </label>

              <label>Werkstoff
                <select value={material} onChange={e=>setMaterial(e.target.value)}>
                  {materialOptions.map(x=><option key={x}>{x}</option>)}
                </select>
              </label>

              <label>Schneiden
                <select value={flutes} onChange={e=>setFlutes(e.target.value)}>
                  {fluteOptions.map(x=><option key={x}>{x==='Alle'?'Alle':`${x} Schneiden`}</option>)}
                </select>
              </label>

              <button className="clear-filter" onClick={clearFilters}>Alle Filter zurücksetzen</button>
            </aside>

            <div className="catalog-main">
              <div className="catalog-toolbar">
                <div>
                  <span className="kicker">VHM-FRÄSER</span>
                  <h2>{filtered.length} Produktserien</h2>
                </div>
                <span>Reale Abmessungen aus dem Herstellerkatalog</span>
              </div>

              <div className="catalog-grid">
                {filtered.map(product=>(
                  <article className="catalog-card" key={product.id} onClick={()=>openProduct(product)}>
                    <div className="catalog-card__image">
                      <span className="series-badge">{product.series}</span>
                      <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="catalog-card__body">
                      <span className="product-type">{product.shape} · {product.flutes}Z</span>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="catalog-card__facts">
                        <span>{product.coating}</span>
                        <span>{product.variants.length} Varianten</span>
                      </div>
                      <div className="catalog-card__materials">{product.materials.join(' · ')}</div>
                      <button>Varianten ansehen <ArrowRight size={16}/></button>
                    </div>
                  </article>
                ))}
              </div>

              {filtered.length===0&&(
                <div className="empty-state">
                  <strong>Keine passende Serie gefunden.</strong>
                  <p>Filter zurücksetzen oder einen anderen Werkstoff auswählen.</p>
                  <button onClick={clearFilters}>Filter zurücksetzen</button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="technical-band" id="technik">
          <div className="container technical-grid">
            <div><strong>Ø & Längen direkt wählbar</strong><span>Varianten nach Durchmesser, Schneidenlänge, Schaft und Gesamtlänge.</span></div>
            <div><strong>Werkstoff klar zugeordnet</strong><span>Stahl, Guss, Edelstahl, Aluminium und harte Werkstoffe.</span></div>
            <div><strong>Beschichtung sichtbar</strong><span>AlTiN, TiSiN und weitere Serien klar am Produkt.</span></div>
          </div>
        </section>

        <section className="service-section container" id="service">
          <span className="kicker">FRÄSKERN</span>
          <h2>Weniger suchen. Schneller auswählen.</h2>
          <p>Der Shop wird bewusst auf Fräser fokussiert. Technische Daten und Varianten stehen direkt am Produkt – der Fräserfinder ergänzt später die Auswahl, statt den Einkauf zu blockieren.</p>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span className="master-logo-frame master-logo-frame--footer"><img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo"/></span>
          <p>FRÄSKERN · VHM-Fräser für professionelle Zerspanung</p>
        </div>
      </footer>

      {selected&&(
        <div className="product-modal-backdrop" onClick={()=>setSelected(null)}>
          <div className="product-modal" onClick={e=>e.stopPropagation()}>
            <button className="modal-close" onClick={()=>setSelected(null)}><X size={21}/></button>
            <div className="modal-image"><img src={selected.image} alt={selected.name}/></div>
            <div className="modal-content">
              <span className="kicker">{selected.series} · {selected.shape}</span>
              <h2>{selected.name}</h2>
              <p className="modal-desc">{selected.description}</p>

              <div className="modal-tags">
                <span>{selected.flutes} Schneiden</span>
                <span>{selected.coating}</span>
                {selected.materials.map(m=><span key={m}>{m}</span>)}
              </div>

              <label className="variant-select-label">Abmessung auswählen
                <div className="variant-select-wrap">
                  <select value={variantIndex} onChange={e=>setVariantIndex(Number(e.target.value))}>
                    {selected.variants.map((v,i)=><option value={i} key={i}>{formatVariant(v)}</option>)}
                  </select>
                  <ChevronDown size={18}/>
                </div>
              </label>

              {selectedVariant&&(
                <div className="spec-table">
                  <div><span>Schneiden-Ø</span><strong>Ø {selectedVariant.diameter} mm</strong></div>
                  {selectedVariant.radius&&<div><span>Eckenradius</span><strong>R {selectedVariant.radius} mm</strong></div>}
                  <div><span>Schneidenlänge</span><strong>{selectedVariant.cuttingLength} mm</strong></div>
                  <div><span>Schaft-Ø</span><strong>Ø {selectedVariant.shank} mm</strong></div>
                  <div><span>Gesamtlänge</span><strong>{selectedVariant.overall} mm</strong></div>
                </div>
              )}

              <div className="price-placeholder">
                <span>Preis</span>
                <strong>folgt nach finaler Kalkulation</strong>
              </div>

              <button className="add-cart" onClick={addToCart}><ShoppingCart size={18}/> Auswahl in Warenkorb</button>
              <small className="demo-note"><Check size={14}/> Variantenwahl und Warenkorb sind im Frontend bereits funktional.</small>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
