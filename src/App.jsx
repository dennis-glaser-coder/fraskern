import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Search, ShoppingCart, Trash2, X } from 'lucide-react'
import { products } from './data/products.js'
import fraeskernLogo from '../fraeskern_logo_master_blau_stahl.png'

const categories = [
  {label:'Schaftfräser', value:'Schaftfräser'},
  {label:'Kugelfräser', value:'Kugelfräser'},
  {label:'Torusfräser', value:'Torusfräser'},
  {label:'Aluminiumfräser', value:'Aluminiumfräser'},
  {label:'Schruppfräser', value:'Schruppfräser'},
]

function formatVariant(v){
  const out=[`Ø ${v.diameter} mm`]
  if(v.radius) out.push(`R ${v.radius} mm`)
  out.push(`Lc ${v.cuttingLength} mm`,`Ds Ø ${v.shank} mm`,`L ${v.overall} mm`)
  return out.join(' · ')
}

function Header({query,setQuery,onSearch,onHome,onCollection,onCart,cartCount}){
  return <header className="site-header">
    <div className="info-bar">VHM-Fräser · Technische Daten klar aufbereitet · Faire Kalkulation</div>
    <div className="header-main container">
      <button className="logo-button" onClick={onHome} aria-label="Startseite">
        <span className="master-logo-frame master-logo-frame--header">
          <img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo"/>
        </span>
      </button>
      <form className="search-box" onSubmit={e=>{e.preventDefault();onSearch()}}>
        <Search size={18}/>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Produkt suchen, z. B. HRC65, Alu, Kugelfräser …"/>
        <button aria-label="Suchen"><Search size={17}/></button>
      </form>
      <button className="header-cart" onClick={onCart}><ShoppingCart size={18}/> Warenkorb <b>{cartCount}</b></button>
    </div>
    <div className="main-nav">
      <nav className="container">
        <button onClick={()=>onCollection('Alle')}>Alle Fräser</button>
        {categories.map(c=><button key={c.value} onClick={()=>onCollection(c.value)}>{c.label}</button>)}
        <button onClick={()=>onCollection('Alle')}>Technische Auswahl</button>
      </nav>
    </div>
  </header>
}

function Home({openCollection,openProduct}){
  const featured=products.slice(0,6)
  return <>
    <section className="hero hero--shop">
      <div className="hero-photo-bg"><img src="https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?cs=srgb&fm=jpg" alt=""/></div>
      <div className="hero-overlay"/>
      <div className="hero-shop-inner container">
        <div className="hero-copy">
          <span className="kicker kicker--light">VHM-FRÄSER FÜR PROFESSIONELLE ZERSPANUNG</span>
          <h1>Präzision zum<br/><span>fairen Preis.</span></h1>
          <p>VHM-Fräser für Stahl, Guss, Edelstahl, Aluminium und hochfeste Werkstoffe. Direkt vergleichen, Abmessung wählen und technisch sauber bestellen.</p>
          <button className="primary-btn" onClick={()=>openCollection('Alle')}>Fräser entdecken <ArrowRight size={18}/></button>
        </div>
      </div>
    </section>

    <section className="home-categories container">
      <div className="section-head"><span className="kicker">KATEGORIEN</span><h2>Fräser nach Bauform.</h2></div>
      <div className="category-grid">
        {categories.map(cat=>{
          const item=products.find(p=>p.shape===cat.value)
          return <button className="category-card" key={cat.value} onClick={()=>openCollection(cat.value)}>
            <div className="category-image"><div className={`contained-product-art ${item?.series==='HRC45'?'is-catalog-cutout':''}`} style={{backgroundImage:`url("${item?.image}")`}} role="img" aria-label={cat.label}/></div>
            <div className="category-copy"><strong>{cat.label}</strong><span>{products.filter(p=>p.shape===cat.value).length} Produktserien</span></div>
            <ArrowRight size={18}/>
          </button>
        })}
      </div>
    </section>

    <section className="featured-section">
      <div className="container">
        <div className="section-head row"><div><span className="kicker">AUSGEWÄHLTE FRÄSER</span><h2>Direkt ins Produkt.</h2></div><button className="text-link" onClick={()=>openCollection('Alle')}>Alle Fräser <ArrowRight size={16}/></button></div>
        <div className="featured-grid">
          {featured.map(p=><ProductCard key={p.id} product={p} onOpen={()=>openProduct(p)}/>)}
        </div>
      </div>
    </section>

    <section className="benefit-strip container">
      <div><strong>Varianten direkt wählbar</strong><span>Durchmesser, Schneidenlänge, Schaft und Gesamtlänge.</span></div>
      <div><strong>Technische Daten am Produkt</strong><span>Keine Suche in PDFs nötig.</span></div>
      <div><strong>Nur Fräser zum Start</strong><span>Klarer Fokus statt überladenem Vollsortiment.</span></div>
    </section>
  </>
}

function ProductCard({product,onOpen}){
  return <article className="product-card">
    <button className="product-card-click" onClick={onOpen}>
      <div className="product-image">
        <span className="series-badge">{product.series}</span>
        <div className={`contained-product-art contained-product-art--card ${product.series==='HRC45'?'is-catalog-cutout':''}`} style={{backgroundImage:`url("${product.image}")`}} role="img" aria-label={product.name}/>
      </div>
      <div className="product-body">
        <span className="product-meta">{product.shape} · {product.flutes}Z</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-tags"><span>{product.coating}</span><span>{product.variants.length} Varianten</span></div>
        <div className="product-materials">{product.materials.join(' · ')}</div>
        <div className="product-bottom"><strong>Preis folgt</strong><span>Produkt ansehen <ArrowRight size={15}/></span></div>
      </div>
    </button>
  </article>
}

function Collection({query,setQuery,shape,setShape,openProduct}){
  const [series,setSeries]=useState('Alle')
  const [material,setMaterial]=useState('Alle')
  const [coating,setCoating]=useState('Alle')
  const [sort,setSort]=useState('standard')

  const seriesOptions=['Alle',...new Set(products.map(p=>p.series))]
  const materialOptions=['Alle',...new Set(products.flatMap(p=>p.materials))]
  const coatingOptions=['Alle',...new Set(products.map(p=>p.coating))]

  const result=useMemo(()=>{
    const q=query.trim().toLowerCase()
    const list=products.filter(p=>{
      const hay=[p.name,p.series,p.shape,p.coating,...p.materials].join(' ').toLowerCase()
      return (!q||hay.includes(q))
        && (shape==='Alle'||p.shape===shape)
        && (series==='Alle'||p.series===series)
        && (material==='Alle'||p.materials.includes(material))
        && (coating==='Alle'||p.coating===coating)
    })
    if(sort==='name') return [...list].sort((a,b)=>a.name.localeCompare(b.name,'de'))
    if(sort==='variants') return [...list].sort((a,b)=>b.variants.length-a.variants.length)
    return list
  },[query,shape,series,material,coating,sort])

  const reset=()=>{setQuery('');setShape('Alle');setSeries('Alle');setMaterial('Alle');setCoating('Alle')}

  return <div className="collection-page">
    <div className="collection-hero container">
      <div><span className="kicker">FRÄSWERKZEUGE</span><h1>{shape==='Alle'?'Alle VHM-Fräser':shape}</h1></div>
      <p>Produktserien auswählen, technisch vergleichen und anschließend die konkrete Abmessung bestimmen.</p>
    </div>

    <div className="collection-toolbar container">
      <span>{result.length} Produktserien</span>
      <label>Sortieren nach
        <select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="standard">Standard</option>
          <option value="name">Name A–Z</option>
          <option value="variants">Meiste Varianten</option>
        </select>
      </label>
    </div>

    <div className="collection-layout container">
      <aside className="filter-panel">
        <div className="filter-title"><strong>Filtern</strong><button onClick={reset}>Alle entfernen</button></div>
        <label>Bauform<select value={shape} onChange={e=>setShape(e.target.value)}><option>Alle</option>{categories.map(c=><option key={c.value}>{c.value}</option>)}</select></label>
        <label>Serie<select value={series} onChange={e=>setSeries(e.target.value)}>{seriesOptions.map(x=><option key={x}>{x}</option>)}</select></label>
        <label>Beschichtung<select value={coating} onChange={e=>setCoating(e.target.value)}>{coatingOptions.map(x=><option key={x}>{x}</option>)}</select></label>
        <label>Werkstoff<select value={material} onChange={e=>setMaterial(e.target.value)}>{materialOptions.map(x=><option key={x}>{x}</option>)}</select></label>
      </aside>
      <section className="collection-products">
        {result.length ? <div className="collection-grid">{result.map(p=><ProductCard key={p.id} product={p} onOpen={()=>openProduct(p)}/>)}</div>
        : <div className="empty"><strong>Keine Produkte gefunden.</strong><button onClick={reset}>Filter zurücksetzen</button></div>}
      </section>
    </div>
  </div>
}

function ProductDetail({product,onBack,addToCart}){
  const [variantIndex,setVariantIndex]=useState(0)
  const [zoomed,setZoomed]=useState(false)
  const [zoomPos,setZoomPos]=useState({x:50,y:50})
  const [galleryIndex,setGalleryIndex]=useState(0)
  const v=product.variants[variantIndex]
  const gallery=[product.detailImage,product.image].filter(Boolean)
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
  const prevImage=()=>selectImage((galleryIndex-1+gallery.length)%gallery.length)
  const nextImage=()=>selectImage((galleryIndex+1)%gallery.length)

  return <div className="product-page container">
    <button className="back-link" onClick={onBack}><ArrowLeft size={16}/> Zurück zu den Fräsern</button>
    <div className="product-detail-grid">
      <div className="detail-gallery">
        <div
          className={`detail-main-image ${zoomed?'is-zoomed':''} ${product.detailImage && galleryIndex===0?'is-photo':''}`}
          onMouseEnter={()=>setZoomed(true)}
          onMouseLeave={()=>{setZoomed(false);setZoomPos({x:50,y:50})}}
          onMouseMove={moveZoom}
        >
          <img
            src={currentImage}
            alt={product.name}
            style={{transformOrigin:`${zoomPos.x}% ${zoomPos.y}%`}}
          />
          {gallery.length>1&&<>
            <button className="gallery-arrow gallery-arrow--left" onClick={e=>{e.stopPropagation();prevImage()}} aria-label="Vorheriges Bild"><ChevronLeft size={22}/></button>
            <button className="gallery-arrow gallery-arrow--right" onClick={e=>{e.stopPropagation();nextImage()}} aria-label="Nächstes Bild"><ChevronRight size={22}/></button>
            <span className="gallery-counter">{galleryIndex+1} / {gallery.length}</span>
          </>}
          <span className="zoom-hint">Mit der Maus über das Bild zum Zoomen</span>
        </div>
        {gallery.length>1&&<div className="gallery-thumbs">
          {gallery.map((src,i)=><button key={i} className={i===galleryIndex?'active':''} onClick={()=>selectImage(i)}>
            <img src={src} alt=""/>
          </button>)}
        </div>}
      </div>
      <div className="detail-info">
        <span className="detail-brand">FRÄSKERN · {product.series}</span>
        <h1>{product.name}</h1>
        <div className="detail-sub">{product.shape} · {product.flutes} Schneiden · {product.coating}</div>
        <div className="price-line"><strong>Preis folgt</strong><span>inkl. MwSt. nach finaler Kalkulation</span></div>

        <label className="variant-label">Abmessung
          <div className="select-wrap">
            <select value={variantIndex} onChange={e=>setVariantIndex(Number(e.target.value))}>
              {product.variants.map((x,i)=><option key={i} value={i}>{formatVariant(x)}</option>)}
            </select><ChevronDown size={18}/>
          </div>
        </label>

        <div className="availability-note"><Check size={16}/><span>Variante im Katalog hinterlegt</span></div>
        <button className="add-to-cart" onClick={()=>addToCart(product,v)}><ShoppingCart size={18}/> In den Warenkorb</button>

        <div className="detail-boxes">
          <div><strong>Qualität & Anwendung</strong><span>{product.materials.join(' · ')}</span></div>
          <div><strong>Beschichtung</strong><span>{product.coating}</span></div>
        </div>
      </div>
    </div>

    <div className="product-description">
      <h2>Beschreibung</h2><p>{product.description}</p>
      <h2>Abmessungen</h2>
      <div className="dimensions-table">
        <div className="tr head"><span>Schneiden-Ø Dc</span>{v.radius&&<span>Radius</span>}<span>Schneidenlänge Lc</span><span>Schaft-Ø Ds</span><span>Gesamtlänge L</span></div>
        <div className="tr"><span>Ø {v.diameter} mm</span>{v.radius&&<span>R {v.radius} mm</span>}<span>{v.cuttingLength} mm</span><span>Ø {v.shank} mm</span><span>{v.overall} mm</span></div>
      </div>
      <h2>Alle verfügbaren Abmessungen</h2>
      <div className="all-variants">
        {product.variants.map((x,i)=><button key={i} className={i===variantIndex?'active':''} onClick={()=>setVariantIndex(i)}>{formatVariant(x)}</button>)}
      </div>
    </div>
  </div>
}

function CartPage({cart,setCart,onCollection}){
  return <div className="cart-page container">
    <h1>Warenkorb</h1>
    {!cart.length ? <div className="empty-cart"><ShoppingCart size={42}/><strong>Dein Warenkorb ist leer.</strong><button onClick={()=>onCollection('Alle')}>Fräser ansehen</button></div> :
    <>
      <div className="cart-list">
        {cart.map((item,i)=><div className="cart-row" key={i}>
          <img src={item.product.image} alt=""/>
          <div><strong>{item.product.name}</strong><span>{formatVariant(item.variant)}</span></div>
          <span className="cart-price">Preis folgt</span>
          <button onClick={()=>setCart(cart.filter((_,idx)=>idx!==i))}><Trash2 size={18}/></button>
        </div>)}
      </div>
      <div className="cart-summary"><strong>{cart.length} Position{cart.length===1?'':'en'}</strong><span>Preise und Checkout werden später über Shopify verbunden.</span></div>
    </>}
  </div>
}

export default function App(){
  const [page,setPage]=useState('home')
  const [query,setQuery]=useState('')
  const [shape,setShape]=useState('Alle')
  const [selectedProduct,setSelectedProduct]=useState(null)
  const [cart,setCart]=useState([])

  const goHome=()=>{setPage('home');window.scrollTo({top:0,behavior:'smooth'})}
  const openCollection=(value='Alle')=>{setShape(value);setPage('collection');window.scrollTo({top:0,behavior:'smooth'})}
  const openProduct=p=>{setSelectedProduct(p);setPage('product');window.scrollTo({top:0,behavior:'smooth'})}
  const doSearch=()=>{setShape('Alle');setPage('collection');window.scrollTo({top:0,behavior:'smooth'})}
  const addToCart=(product,variant)=>{setCart(prev=>[...prev,{product,variant}])}

  return <div>
    <Header query={query} setQuery={setQuery} onSearch={doSearch} onHome={goHome} onCollection={openCollection} onCart={()=>{setPage('cart');window.scrollTo({top:0,behavior:'smooth'})}} cartCount={cart.length}/>
    <main>
      {page==='home'&&<Home openCollection={openCollection} openProduct={openProduct}/>}
      {page==='collection'&&<Collection query={query} setQuery={setQuery} shape={shape} setShape={setShape} openProduct={openProduct}/>}
      {page==='product'&&selectedProduct&&<ProductDetail product={selectedProduct} onBack={()=>openCollection(shape)} addToCart={addToCart}/>}
      {page==='cart'&&<CartPage cart={cart} setCart={setCart} onCollection={openCollection}/>}
    </main>
    <footer><div className="container footer-inner"><span className="master-logo-frame master-logo-frame--footer"><img src={fraeskernLogo} alt="FRÄSKERN Cutting Tools" className="master-logo"/></span><p>FRÄSKERN · VHM-Fräser für professionelle Zerspanung</p></div></footer>
  </div>
}
