import { useMemo, useState } from 'react'
import {
  ArrowLeft, ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight,
  Layers3, Minus, Plus, Ruler, Search, ShoppingCart, SlidersHorizontal, Trash2
} from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'
import heroImage from '../pexels-daniel-smyth-83914874-8956445.jpg'

const categories = [
  {label:'Schaftfräser', value:'Schaftfräser', note:'Universal & Performance'},
  {label:'Kugelfräser', value:'Kugelfräser', note:'3D & Kontur'},
  {label:'Torusfräser', value:'Torusfräser', note:'Eckenradius'},
  {label:'Aluminiumfräser', value:'Aluminiumfräser', note:'NE-Metalle'},
  {label:'Schruppfräser', value:'Schruppfräser', note:'Hoher Materialabtrag'},
]

const materialShortcuts = [
  'Stahl',
  'Edelstahl',
  'Aluminium',
  'Guss',
  'Hochfeste Stähle',
]

const seriesSystem = {
  HRC45:{brand:'KERN 45', tech:'HRC45', label:'UNIVERSAL', facts:'Stahl · Guss', tone:'45'},
  HRC55:{brand:'KERN 55', tech:'HRC55', label:'PERFORMANCE', facts:'Stahl · Guss', tone:'55'},
  HRC65:{brand:'KERN 65', tech:'HRC65', label:'HARD', facts:'Hochfeste Stähle', tone:'65'},
  AL:{brand:'KERN N', tech:'NE', label:'ALUMINIUM', facts:'Aluminium · NE-Metalle', tone:'n'},
}

const seriesInfo=series=>seriesSystem[series] || {brand:series,tech:series,label:'SERIE',facts:'',tone:'default'}

function BrandMark({className=''}) {
  return <span className={`brand-mark ${className}`} aria-hidden="true">
    <img src={fraeskernLogo} alt=""/>
  </span>
}

function formatVariant(v){
  const out=[`Ø ${v.diameter} mm`]
  if(v.radius) out.push(`R ${v.radius} mm`)
  out.push(`Lc ${v.cuttingLength} mm`,`Ds Ø ${v.shank} mm`,`L ${v.overall} mm`)
  return out.join(' · ')
}

function diameterRange(product){
  const values=product.variants.map(v=>Number(v.diameter)).filter(Number.isFinite)
  if(!values.length) return '—'
  const min=Math.min(...values)
  const max=Math.max(...values)
  return min===max ? `Ø ${min} mm` : `Ø ${min}–${max} mm`
}

function Header({query,setQuery,onSearch,onHome,onCollection,onCart,cartCount}){
  return <header className="site-header">
    <div className="header-main container">
      <button className="logo-button" onClick={onHome} aria-label="FRÄSKERN Startseite">
        <span className="master-logo-frame master-logo-frame--header">
          <img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo"/>
        </span>
      </button>

      <form className="search-box" onSubmit={e=>{e.preventDefault();onSearch()}}>
        <Search size={18}/>
        <input
          value={query}
          onChange={e=>setQuery(e.target.value)}
          placeholder="Fräser, Serie, Werkstoff oder Beschichtung suchen"
        />
        <button aria-label="Suchen"><Search size={18}/></button>
      </form>

      <button className="header-cart" onClick={onCart}>
        <ShoppingCart size={19}/>
        <span>Warenkorb</span>
        <b>{cartCount}</b>
      </button>
    </div>

    <div className="main-nav">
      <nav className="container">
        <button className="nav-strong" onClick={()=>onCollection('Alle')}>Alle Fräser</button>
        {categories.map(c=><button key={c.value} onClick={()=>onCollection(c.value)}>{c.label}</button>)}

      </nav>
    </div>
  </header>
}

function Home({openCollection,openProduct}){
  const featured=['HRC45','HRC55','HRC65','AL']
    .map(series=>products.find(p=>p.series===series))
    .filter(Boolean)

  return <>
    <section className="hero hero--shop">
      <div className="hero-photo-bg">
        <img src={heroImage} alt="CNC-Fräsbearbeitung mit Kühlschmierstoff"/>
      </div>
      <div className="hero-overlay"/>
      <BrandMark className="brand-mark--hero"/>
      <div className="hero-shop-inner container">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light">FRÄSKERN · VHM-FRÄSER</span>
          <h1>Präzision zum<br/><span>fairen Preis.</span></h1>
          <p>Hochwertige VHM-Fräser für die professionelle Zerspanung. Klare technische Daten. Faire Preise.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={()=>openCollection('Alle')}>Fräser entdecken <ArrowRight size={18}/></button>
          </div>
        </div>
      </div>
    </section>

    <section className="series-showcase" aria-label="FRÄSKERN Werkzeugserien">
      <div className="container series-showcase-inner">
        <div className="series-showcase-label">
          <BrandMark className="brand-mark--series-master"/>
          <span className="series-showcase-label-copy">
            <span>FRÄSKERN SERIES</span>
            <strong>Werkzeuglinien nach Einsatzbereich</strong>
          </span>
        </div>
        <div className="series-showcase-grid">
          {Object.entries(seriesSystem).map(([key,line])=>
            <button
              key={key}
              className={`series-tile series-tile--${line.tone}`}
              onClick={()=>openCollection('Alle','Alle',key)}
            >
              <span className="series-tile-copy">
                <small>{line.label}</small>
                <strong>{line.brand}</strong>
                <em>{line.tech} · {line.facts}</em>
              </span>
              <ArrowRight size={16}/>
            </button>
          )}
        </div>
      </div>
    </section>

    <section className="home-categories container">
      <div className="section-head section-head-row">
        <div>
          <h2>Fräser nach Bauform</h2>
        </div>
        <button className="text-link" onClick={()=>openCollection('Alle')}>Gesamtes Sortiment <ArrowRight size={16}/></button>
      </div>

      <div className="category-grid">
        {categories.map(cat=>{
          const item=products.find(p=>p.shape===cat.value)
          const count=products.filter(p=>p.shape===cat.value).length
          return <button className="category-card" key={cat.value} onClick={()=>openCollection(cat.value)}>
            <div className={`category-image ${item?.brandMask?'product-photo-box':''}`}>
              <div
                className={`contained-product-art ${item?.brandMask?'brand-mask-art':''}`}
                style={{backgroundImage:`url("${item?.image}")`}}
                role="img"
                aria-label={cat.label}
              />
            </div>
            <div className="category-copy">
              <strong>{cat.label}</strong>
              <small>{count} Produktserie{count===1?'':'n'}</small>
            </div>
            <ArrowRight size={18}/>
          </button>
        })}
      </div>
    </section>

    <section className="quickfinder-section" id="quickfinder">
      <div className="container quickfinder">
        <div className="quickfinder-copy">
          <span className="quickfinder-label">Werkstoff wählen</span>
          <h2>Passende Fräser anzeigen</h2>
        </div>
        <div className="material-grid">
          {materialShortcuts.map(material=>
            <button key={material} onClick={()=>openCollection('Alle',material)}>
              <span>{material==='Aluminium'?'Aluminium & NE-Metalle':material}</span>
              <ArrowRight size={17}/>
            </button>
          )}
        </div>
      </div>
    </section>

    <section className="featured-section">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <h2>Werkzeugserien</h2>
          </div>
          <button className="text-link" onClick={()=>openCollection('Alle')}>Alle Produkte <ArrowRight size={16}/></button>
        </div>
        <div className="featured-grid">
          {featured.map(p=><ProductCard key={p.id} product={p} onOpen={()=>openProduct(p)}/>)}
        </div>
      </div>
    </section>

  </>
}

function ProductCard({product,onOpen}){
  const line=seriesInfo(product.series)
  return <article className={`product-card product-card--series-${line.tone}`}>
    <button className="product-card-click" onClick={onOpen}>
      <div className={`product-image ${product.brandMask?'product-photo-box':''}`}>
        <span className={`series-badge series-badge--${line.tone}`}>
          <b>{line.brand}</b>
          <small>{line.tech}</small>
        </span>
        <div
          className={`contained-product-art contained-product-art--card ${product.brandMask?'brand-mask-art':''}`}
          style={{backgroundImage:`url("${product.image}")`}}
          role="img"
          aria-label={product.name}
        />
      </div>
      <div className="product-body">
        <div className="product-kicker">{product.shape}</div>
        <h3>{product.name}</h3>
        <div className="product-facts">
          <span>{diameterRange(product)}</span>
          <span>{product.flutes} Schneiden</span>
          <span>{product.coating}</span>
        </div>
        <div className="product-materials">
          <small>Werkstoffe</small>
          <strong>{product.materials.join(' · ')}</strong>
        </div>
        <div className="product-bottom">
          <span className="product-cta">{product.variants.length} Varianten ansehen <ArrowRight size={16}/></span>
        </div>
      </div>
    </button>
  </article>
}

function Collection({query,setQuery,shape,setShape,initialMaterial,initialSeries,openProduct}){
  const [series,setSeries]=useState(initialSeries || 'Alle')
  const [material,setMaterial]=useState(initialMaterial || 'Alle')
  const [coating,setCoating]=useState('Alle')
  const [flutes,setFlutes]=useState('Alle')
  const [sort,setSort]=useState('standard')

  const seriesOptions=['Alle',...new Set(products.map(p=>p.series))]
  const materialOptions=['Alle',...new Set(products.flatMap(p=>p.materials))]
  const coatingOptions=['Alle',...new Set(products.map(p=>p.coating))]
  const fluteOptions=['Alle',...new Set(products.map(p=>String(p.flutes)))]

  const result=useMemo(()=>{
    const q=query.trim().toLowerCase()
    const list=products.filter(p=>{
      const line=seriesInfo(p.series)
      const hay=[p.name,p.series,line.brand,line.label,p.shape,p.coating,...p.materials].join(' ').toLowerCase()
      return (!q||hay.includes(q))
        && (shape==='Alle'||p.shape===shape)
        && (series==='Alle'||p.series===series)
        && (material==='Alle'||p.materials.includes(material))
        && (coating==='Alle'||p.coating===coating)
        && (flutes==='Alle'||String(p.flutes)===flutes)
    })
    if(sort==='name') return [...list].sort((a,b)=>a.name.localeCompare(b.name,'de'))
    if(sort==='variants') return [...list].sort((a,b)=>b.variants.length-a.variants.length)
    return list
  },[query,shape,series,material,coating,flutes,sort])

  const reset=()=>{
    setQuery('')
    setShape('Alle')
    setSeries('Alle')
    setMaterial('Alle')
    setCoating('Alle')
    setFlutes('Alle')
  }

  const activeFilters=[
    shape!=='Alle'&&shape,
    material!=='Alle'&&material,
    series!=='Alle'&&series,
    coating!=='Alle'&&coating,
    flutes!=='Alle'&&`${flutes} Schneiden`
  ].filter(Boolean)

  return <div className="collection-page">
    <div className="collection-titlebar">
      <div className="container">
        <span className="eyebrow">FRÄSWERKZEUGE</span>
        <div className="collection-title-row">
          <h1>{shape==='Alle'?'VHM-Fräser':shape}</h1>
          <p>Nach Anwendung filtern, Produktserie öffnen und konkrete Abmessung auswählen.</p>
        </div>
      </div>
    </div>

    <div className="collection-controls container">
      <div className="result-meta">
        <strong>{result.length}</strong>
        <span>Produktserie{result.length===1?'':'n'}</span>
        {activeFilters.length>0&&<div className="active-filter-row">
          {activeFilters.map(x=><span key={x}>{x}</span>)}
          <button onClick={reset}>zurücksetzen</button>
        </div>}
      </div>

      <label className="sort-control">
        <span>Sortierung</span>
        <select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="standard">Empfohlen</option>
          <option value="name">Name A–Z</option>
          <option value="variants">Meiste Varianten</option>
        </select>
      </label>
    </div>

    <div className="collection-layout container">
      <aside className="filter-panel">
        <div className="filter-title">
          <span><SlidersHorizontal size={17}/> Filter</span>
          <button onClick={reset}>Alle löschen</button>
        </div>

        <FilterSelect label="Bauform" value={shape} onChange={setShape} options={['Alle',...categories.map(c=>c.value)]}/>
        <FilterSelect label="Werkstoff" value={material} onChange={setMaterial} options={materialOptions}/>
        <FilterSelect label="Serie" value={series} onChange={setSeries} options={seriesOptions} format={x=>x==='Alle'?'Alle':seriesInfo(x).brand}/>
        <FilterSelect label="Beschichtung" value={coating} onChange={setCoating} options={coatingOptions}/>
        <FilterSelect label="Schneiden" value={flutes} onChange={setFlutes} options={fluteOptions} format={x=>x==='Alle'?'Alle':`${x} Schneiden`}/>

        <div className="filter-help">
          <strong>Nicht sicher?</strong>
          <p>Starte mit dem Werkstoff. Danach lassen sich Bauform und Serie eingrenzen.</p>
        </div>
      </aside>

      <section className="collection-products">
        {result.length
          ? <div className="collection-grid">{result.map(p=><ProductCard key={p.id} product={p} onOpen={()=>openProduct(p)}/>)}</div>
          : <div className="empty">
              <Search size={28}/>
              <strong>Keine passende Produktserie gefunden.</strong>
              <p>Ändere die Filter oder setze die Auswahl zurück.</p>
              <button onClick={reset}>Filter zurücksetzen</button>
            </div>}
      </section>
    </div>
  </div>
}

function FilterSelect({label,value,onChange,options,format=x=>x}){
  return <label className="filter-field">
    <span>{label}</span>
    <div className="filter-select-wrap">
      <select value={value} onChange={e=>onChange(e.target.value)}>
        {options.map(x=><option key={x} value={x}>{format(x)}</option>)}
      </select>
      <ChevronDown size={15}/>
    </div>
  </label>
}

function ProductDetail({product,onBack,addToCart}){
  const [variantIndex,setVariantIndex]=useState(0)
  const [zoomed,setZoomed]=useState(false)
  const [zoomPos,setZoomPos]=useState({x:50,y:50})
  const [galleryIndex,setGalleryIndex]=useState(0)
  const [qty,setQty]=useState(1)

  const v=product.variants[variantIndex]
  const line=seriesInfo(product.series)
  const gallery=[...new Set([product.image,product.detailImage].filter(Boolean))]
  const currentImage=gallery[galleryIndex] || product.image

  const moveZoom=e=>{
    const rect=e.currentTarget.getBoundingClientRect()
    const x=Math.max(0,Math.min(100,((e.clientX-rect.left)/rect.width)*100))
    const y=Math.max(0,Math.min(100,((e.clientY-rect.top)/rect.height)*100))
    setZoomPos({x,y})
  }
  const selectImage=i=>{
    setGalleryIndex(i)
    setZoomed(false)
    setZoomPos({x:50,y:50})
  }

  return <div className="product-page">
    <div className="container breadcrumbs">
      <button onClick={onBack}><ArrowLeft size={14}/> Fräser</button>
      <span>/</span><span>{product.shape}</span>
      <span>/</span><strong>{seriesInfo(product.series).brand}</strong>
    </div>

    <div className="container product-detail-grid">
      <div className="detail-gallery">
        <div
          className={`detail-main-image ${zoomed?'is-zoomed':''} ${product.brandMask?'brand-mask-detail':''}`}
          onMouseEnter={()=>setZoomed(true)}
          onMouseLeave={()=>{setZoomed(false);setZoomPos({x:50,y:50})}}
          onMouseMove={moveZoom}
        >
          <img src={currentImage} alt={product.name} style={{transformOrigin:`${zoomPos.x}% ${zoomPos.y}%`}}/>
          {gallery.length>1&&<>
            <button className="gallery-arrow gallery-arrow--left" onClick={e=>{e.stopPropagation();selectImage((galleryIndex-1+gallery.length)%gallery.length)}}><ChevronLeft size={21}/></button>
            <button className="gallery-arrow gallery-arrow--right" onClick={e=>{e.stopPropagation();selectImage((galleryIndex+1)%gallery.length)}}><ChevronRight size={21}/></button>
            <span className="gallery-counter">{galleryIndex+1} / {gallery.length}</span>
          </>}
          <span className="zoom-hint">Zum Vergrößern mit der Maus über das Bild fahren</span>
        </div>

        {gallery.length>1&&<div className="gallery-thumbs">
          {gallery.map((src,i)=><button key={i} className={i===galleryIndex?'active':''} onClick={()=>selectImage(i)}>
            <img src={src} alt=""/>
          </button>)}
        </div>}
      </div>

      <aside className="detail-info">
        <div className={`detail-series-row detail-series-row--${line.tone}`}>
          <BrandMark className="brand-mark--detail"/>
          <span className="detail-brand-series">{line.brand}</span>
          <span>{line.tech}</span>
          <span>{product.flutes}Z</span>
          <span>{product.coating}</span>
        </div>

        <h1>{product.name}</h1>
        <p className="detail-lead">{product.description}</p>

        <div className="detail-materials">
          <small>Werkstoffe</small>
          <strong>{product.materials.join(' · ')}</strong>
        </div>

        <div className="purchase-box">
          <label className="variant-label">
            <span>Abmessung wählen</span>
            <div className="select-wrap">
              <select value={variantIndex} onChange={e=>setVariantIndex(Number(e.target.value))}>
                {product.variants.map((x,i)=><option key={i} value={i}>{formatVariant(x)}</option>)}
              </select>
              <ChevronDown size={17}/>
            </div>
          </label>

          <div className="selected-specs">
            <div><small>Dc</small><strong>Ø {v.diameter} mm</strong></div>
            {v.radius&&<div><small>R</small><strong>{v.radius} mm</strong></div>}
            <div><small>Lc</small><strong>{v.cuttingLength} mm</strong></div>
            <div><small>Ds</small><strong>Ø {v.shank} mm</strong></div>
            <div><small>L</small><strong>{v.overall} mm</strong></div>
          </div>

          <div className="buy-row">
            <div className="qty-control">
              <button onClick={()=>setQty(Math.max(1,qty-1))}><Minus size={15}/></button>
              <span>{qty}</span>
              <button onClick={()=>setQty(qty+1)}><Plus size={15}/></button>
            </div>
            <button className="add-to-cart" onClick={()=>addToCart(product,v,qty)}>
              <ShoppingCart size={18}/> In den Warenkorb
            </button>
          </div>

          <div className="catalog-status"><Check size={15}/><span>Abmessung aus dem Produktkatalog hinterlegt</span></div>
        </div>

        <div className="detail-benefits">
          <div><Ruler size={17}/><span><strong>Technische Daten direkt sichtbar</strong><small>ohne separate PDF-Suche</small></span></div>
          <div><Layers3 size={17}/><span><strong>{product.variants.length} Varianten</strong><small>in dieser Produktserie</small></span></div>
        </div>
      </aside>
    </div>

    <section className="product-tech-section">
      <div className="container tech-layout">
        <div>
          <span className="eyebrow">TECHNISCHE DATEN</span>
          <h2>Ausgewählte Abmessung</h2>
          <p>Die Werte ändern sich direkt mit der gewählten Variante.</p>
        </div>

        <div className="tech-table">
          <div><span>Schneiden-Ø Dc</span><strong>Ø {v.diameter} mm</strong></div>
          {v.radius&&<div><span>Eckenradius R</span><strong>{v.radius} mm</strong></div>}
          <div><span>Schneidenlänge Lc</span><strong>{v.cuttingLength} mm</strong></div>
          <div><span>Schaft-Ø Ds</span><strong>Ø {v.shank} mm</strong></div>
          <div><span>Gesamtlänge L</span><strong>{v.overall} mm</strong></div>
          <div><span>Schneiden</span><strong>{product.flutes}</strong></div>
          <div><span>Beschichtung</span><strong>{product.coating}</strong></div>
        </div>
      </div>
    </section>

    <section className="all-variants-section container">
      <div className="section-head">
        <span className="eyebrow">VARIANTEN</span>
        <h2>Alle Abmessungen dieser Serie</h2>
      </div>
      <div className="variant-table">
        <div className="variant-table-head">
          <span>Dc</span>{v.radius&&<span>R</span>}<span>Lc</span><span>Ds</span><span>L</span><span></span>
        </div>
        {product.variants.map((x,i)=><button key={i} className={i===variantIndex?'active':''} onClick={()=>setVariantIndex(i)}>
          <span>Ø {x.diameter} mm</span>
          {v.radius&&<span>{x.radius ? `R ${x.radius} mm` : '—'}</span>}
          <span>{x.cuttingLength} mm</span>
          <span>Ø {x.shank} mm</span>
          <span>{x.overall} mm</span>
          <strong>{i===variantIndex?'Ausgewählt':'Wählen'}</strong>
        </button>)}
      </div>
    </section>
  </div>
}

function CartPage({cart,setCart,onCollection}){
  const totalQty=cart.reduce((sum,item)=>sum+(item.qty||1),0)

  return <div className="cart-page container">
    <div className="cart-title-row">
      <div><span className="eyebrow">WARENKORB</span><h1>{totalQty} Position{totalQty===1?'':'en'}</h1></div>
      <button className="text-link" onClick={()=>onCollection('Alle')}>Weiter einkaufen <ArrowRight size={16}/></button>
    </div>

    {!cart.length
      ? <div className="empty-cart"><ShoppingCart size={38}/><strong>Der Warenkorb ist leer.</strong><p>Wähle zuerst einen Fräser und eine Abmessung.</p><button onClick={()=>onCollection('Alle')}>Fräser ansehen</button></div>
      : <>
        <div className="cart-list">
          {cart.map((item,i)=><div className="cart-row" key={i}>
            <img src={item.product.image} alt=""/>
            <div className="cart-product-copy">
              <small>{item.product.series} · {item.product.shape}</small>
              <strong>{item.product.name}</strong>
              <span>{formatVariant(item.variant)}</span>
            </div>
            <span className="cart-qty">Menge {item.qty||1}</span>
            <span className="cart-price">Preis in Vorbereitung</span>
            <button className="cart-remove" onClick={()=>setCart(cart.filter((_,idx)=>idx!==i))}><Trash2 size={17}/></button>
          </div>)}
        </div>
        <div className="cart-summary">
          <strong>Warenkorb</strong>
          <span>Preise und Checkout werden mit dem finalen Shopsystem ergänzt.</span>
        </div>
      </>}
  </div>
}

function Footer({onCollection}){
  return <footer>
    <BrandMark className="brand-mark--footer-bg"/>
    <div className="container footer-grid">
      <div className="footer-brand">
        <span className="master-logo-frame master-logo-frame--footer"><img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo"/></span>
        <p>VHM-Fräser für die professionelle Zerspanung.</p>
      </div>
      <div>
        <strong>Sortiment</strong>
        <button onClick={()=>onCollection('Alle')}>Alle Fräser</button>
        <button onClick={()=>onCollection('Schaftfräser')}>Schaftfräser</button>
        <button onClick={()=>onCollection('Kugelfräser')}>Kugelfräser</button>
        <button onClick={()=>onCollection('Torusfräser')}>Torusfräser</button>
      </div>
      <div>
        <strong>Weitere Fräser</strong>
        <button onClick={()=>onCollection('Aluminiumfräser')}>Aluminiumfräser</button>
        <button onClick={()=>onCollection('Schruppfräser')}>Schruppfräser</button>
      </div>
    </div>
    <div className="container footer-bottom">FRÄSKERN · CUTTING TOOLS</div>
  </footer>
}

export default function App(){
  const [page,setPage]=useState('home')
  const [query,setQuery]=useState('')
  const [shape,setShape]=useState('Alle')
  const [materialPreset,setMaterialPreset]=useState('Alle')
  const [seriesPreset,setSeriesPreset]=useState('Alle')
  const [selectedProduct,setSelectedProduct]=useState(null)
  const [cart,setCart]=useState([])

  const top=()=>window.scrollTo({top:0,behavior:'smooth'})
  const goHome=()=>{setPage('home');top()}
  const openCollection=(value='Alle',material='Alle',series='Alle')=>{
    setShape(value)
    setMaterialPreset(material)
    setSeriesPreset(series)
    setPage('collection')
    top()
  }
  const openProduct=p=>{setSelectedProduct(p);setPage('product');top()}
  const doSearch=()=>{setShape('Alle');setMaterialPreset('Alle');setSeriesPreset('Alle');setPage('collection');top()}
  const addToCart=(product,variant,qty=1)=>setCart(prev=>[...prev,{product,variant,qty}])
  const cartCount=cart.reduce((sum,item)=>sum+(item.qty||1),0)

  return <div>
    <Header
      query={query}
      setQuery={setQuery}
      onSearch={doSearch}
      onHome={goHome}
      onCollection={openCollection}
      onCart={()=>{setPage('cart');top()}}
      cartCount={cartCount}
    />

    <main>
      {page==='home'&&<Home openCollection={openCollection} openProduct={openProduct}/>}
      {page==='collection'&&<Collection
        key={`${shape}-${materialPreset}-${seriesPreset}`}
        query={query}
        setQuery={setQuery}
        shape={shape}
        setShape={setShape}
        initialMaterial={materialPreset}
        initialSeries={seriesPreset}
        openProduct={openProduct}
      />}
      {page==='product'&&selectedProduct&&<ProductDetail product={selectedProduct} onBack={()=>openCollection(shape)} addToCart={addToCart}/>}
      {page==='cart'&&<CartPage cart={cart} setCart={setCart} onCollection={openCollection}/>}
    </main>

    <Footer onCollection={openCollection}/>
  </div>
}
