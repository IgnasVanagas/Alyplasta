import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Check, ChevronDown, DoorOpen,
  Hammer, Headphones, Mail, MapPin, Menu, MessageCircle, MessageSquareText, Phone, Ruler,
  ShieldCheck, Sparkles, Wrench, X, type LucideIcon
} from 'lucide-react'
import { pageBySlug, pages, productGroups, type PageData } from './data'

const phone = '+370 678 34449'
const phoneHref = 'tel:+37067834449'
const email = 'alyplasta@gmail.com'

const imageFor = (image?: string) => {
  if (image === 'blinds') return '/images/roletai-interjeras.webp'
  if (image === 'install') return '/images/montavimas.webp'
  return '/images/alyplasta-hero.webp'
}

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Alyplasta pradinis puslapis">
      <span className="logo-mark"><i /><i /></span>
      <span><strong>alyplasta</strong><small>LANGAI · DURYS · MONTAVIMAS</small></span>
    </Link>
  )
}

function Header({ onQuote }: { onQuote: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span><MapPin size={14} /> Alytus ir visa Pietų Lietuva</span>
          <span className="topline-note">Konsultacija ir pirminis pasiūlymas — nemokamai</span>
          <a href={`mailto:${email}`}><Mail size={14} /> {email}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Pagrindinė navigacija">
            <NavLink to="/langai-ir-durys-alytuje/">Langai ir durys</NavLink>
            <NavLink to="/zaliuzes-ir-roletai-alytuje/">Žaliuzės ir roletai</NavLink>
            <NavLink to="/paslaugos-alytuje/">Paslaugos</NavLink>
            <NavLink to="/apie-mus-alytuje/">Apie mus</NavLink>
            <NavLink to="/kontaktai/">Kontaktai</NavLink>
          </nav>
          <div className="header-actions">
            <a href={phoneHref} className="header-phone"><Phone size={18} /><span>{phone}</span></a>
            <button className="btn btn-primary btn-small" onClick={onQuote}>Gauti pasiūlymą</button>
            <button className="menu-toggle" aria-label="Atidaryti meniu" onClick={() => setMenuOpen(true)}><Menu /></button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-head"><Logo /><button aria-label="Uždaryti meniu" onClick={() => setMenuOpen(false)}><X /></button></div>
          <nav>
            <Link to="/langai-ir-durys-alytuje/">Langai ir durys <ArrowRight /></Link>
            <Link to="/zaliuzes-ir-roletai-alytuje/">Žaliuzės ir roletai <ArrowRight /></Link>
            <Link to="/tinkleliai-nuo-vabzdziu-alytuje/">Tinkleliai <ArrowRight /></Link>
            <Link to="/balkonu-stiklinimas-alytuje/">Balkonų stiklinimas <ArrowRight /></Link>
            <Link to="/garazo-vartai-alytuje/">Garažo vartai <ArrowRight /></Link>
            <Link to="/paslaugos-alytuje/">Paslaugos <ArrowRight /></Link>
            <Link to="/apie-mus-alytuje/">Apie mus <ArrowRight /></Link>
            <Link to="/kontaktai/">Kontaktai <ArrowRight /></Link>
          </nav>
          <a href={phoneHref} className="btn btn-light"><Phone size={18} /> {phone}</a>
          <button className="btn btn-accent" onClick={() => { setMenuOpen(false); onQuote() }}>Gauti pasiūlymą</button>
        </div>
      )}
    </>
  )
}

function QuoteForm({ compact = false, initialProduct = '' }: { compact?: boolean; initialProduct?: string }) {
  const [sent, setSent] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const contact = String(data.get('contact') || '')
    const product = String(data.get('product') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Užklausa iš alyplasta.lt — ${product || 'konsultacija'}`)
    const body = encodeURIComponent(`Vardas: ${name}\nTelefonas / el. paštas: ${contact}\nDomina: ${product}\n\n${message}`)
    setSent(true)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }
  return (
    <form className={`quote-form ${compact ? 'compact' : ''}`} onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">Nemokamas pasiūlymas</span>
        <h3>Sužinokite kainą</h3>
        <p>Palikite kontaktą — aptarsime poreikį ir pasiūlysime tinkamiausią variantą.</p>
      </div>
      <label>Jūsų vardas<input name="name" placeholder="Vardas" required /></label>
      <label>Telefonas arba el. paštas<input name="contact" placeholder="+370 6…" required /></label>
      <label>Kas domina?
        <select name="product" defaultValue={initialProduct}>
          {initialProduct && <option value={initialProduct}>{initialProduct}</option>}
          <option value="">Pasirinkite</option>
          <option>Langai arba durys</option><option>Žaliuzės arba roletai</option>
          <option>Balkono stiklinimas</option><option>Garažo vartai</option>
          <option>Tinkleliai</option><option>Montavimas arba remontas</option>
        </select>
      </label>
      {!compact && <label>Trumpai aprašykite poreikį<textarea name="message" placeholder="Pvz., reikia pakeisti 5 langus Alytuje…" rows={3} /></label>}
      <button className="btn btn-accent" type="submit">Gauti pasiūlymą <ArrowRight size={18} /></button>
      <small>{sent ? 'Atidaroma jūsų el. pašto programa…' : 'Atsakysime darbo metu. Jokių įsipareigojimų.'}</small>
    </form>
  )
}

function QuoteModal({ open, onClose, initialProduct = '' }: { open: boolean; onClose: () => void; initialProduct?: string }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeOnEscape)
    return () => { document.body.style.overflow = '' }
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Gauti pasiūlymą" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Uždaryti"><X /></button>
        <QuoteForm initialProduct={initialProduct} />
      </div>
    </div>
  )
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function Home({ onQuote }: { onQuote: () => void }) {
  const [need, setNeed] = useState(0)
  const needs = [
    { icon: Sparkles, title: 'Noriu šiltesnių namų', text: 'Parinksime profilio ir stiklo paketą pagal pastatą bei norimą energinį efektyvumą.', link: '/plastikiniai-langai-ir-durys-alytuje/' },
    { icon: ShieldCheck, title: 'Noriu daugiau saugumo', text: 'Sustiprintos durys, patikimi apkaustai ir apsauginės žaliuzės vienoje vietoje.', link: '/sarvuotos-durys-alytuje/' },
    { icon: DoorOpen, title: 'Noriu atnaujinti interjerą', text: 'Roletai, žaliuzės ir romanetės pagal jūsų langus, šviesą bei pasirinktą stilių.', link: '/zaliuzes-ir-roletai-alytuje/' },
  ]
  const ActiveIcon = needs[need].icon
  return (
    <main>
      <section className="home-hero">
        <img src="/images/alyplasta-hero.webp" alt="Modernus namas su dideliais langais ir durimis" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-copy">
            <h1>Šilčiau. Tyliau. <em>Saugiau.</em></h1>
            <p>Langai, durys ir profesionalus montavimas Alytuje bei visoje Pietų Lietuvoje.</p>
            <div className="hero-actions">
              <button className="btn btn-accent btn-large" onClick={onQuote}>Gauti pasiūlymą <ArrowRight size={19} /></button>
              <a className="btn btn-glass btn-large" href={phoneHref}><Phone size={19} /> {phone}</a>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div><strong>20+</strong><span>metų patirties</span></div>
          <div><ShieldCheck /><span><b>5 metų</b> gaminių garantija</span></div>
          <div><MapPin /><span><b>Pietų Lietuva</b> atvykstame pas jus</span></div>
          <div><Ruler /><span><b>Tikslus matavimas</b> prieš gamybą</span></div>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="title-row">
            <SectionTitle eyebrow="Viskas vienose rankose" title="Sprendimai jūsų namams" text="Išsirinkite, ko reikia — dėl viso kito pasirūpinsime mes." />
            <Link className="text-link" to="/kontaktai/">Pasitarti su specialistu <ArrowRight /></Link>
          </div>
          <div className="product-grid">
            {productGroups.map((group, i) => (
              <Link to={group.href} className={`product-card card-${i + 1}`} key={group.href}>
                {(group.image === 'hero' || group.image === 'blinds' || group.image === 'install') && <img src={imageFor(group.image)} alt="" />}
                <div className="product-card-shade" />
                <span className="product-number">0{i + 1}</span>
                <div><h3>{group.title}</h3><p>{group.text}</p><span className="card-link">Peržiūrėti <ArrowRight /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-layout">
          <div className="process-image"><img src="/images/montavimas.webp" alt="Specialistas tikrina sumontuotą langą" /><span><BadgeCheck /> Atsakome už rezultatą</span></div>
          <div className="process-copy">
            <SectionTitle eyebrow="Paprastas procesas" title="Nuo pirmo skambučio iki jaukesnių namų" text="Aiški eiga, vienas atsakingas partneris ir jokių nereikalingų rūpesčių." />
            <ol className="steps">
              <li><span>01</span><div><h3>Konsultacija</h3><p>Aptariame poreikį, terminą, biudžetą ir galimus sprendimus.</p></div></li>
              <li><span>02</span><div><h3>Matavimas ir pasiūlymas</h3><p>Specialistas atvyksta į objektą, tiksliai išmatuoja ir pateikia kainą.</p></div></li>
              <li><span>03</span><div><h3>Gamyba ir montavimas</h3><p>Pagaminame pagal užsakymą, sumontuojame ir sutvarkome apdailą.</p></div></li>
            </ol>
            <button className="btn btn-primary" onClick={onQuote}>Pradėti nuo konsultacijos <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      <section className="section finder-section">
        <div className="container finder-layout">
          <div>
            <SectionTitle eyebrow="Nežinote, ką rinktis?" title="Pradėkite nuo to, ko norite pasiekti" />
            <div className="need-tabs">
              {needs.map((item, i) => <button className={need === i ? 'active' : ''} onClick={() => setNeed(i)} key={item.title}>{item.title}<ChevronDown /></button>)}
            </div>
          </div>
          <div className="need-result">
            <span className="need-icon"><ActiveIcon /></span>
            <p className="overline">Rekomenduojama kryptis</p>
            <h3>{needs[need].title}</h3>
            <p>{needs[need].text}</p>
            <Link className="btn btn-light" to={needs[need].link}>Peržiūrėti sprendimus <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section about-band">
        <div className="container about-band-inner">
          <div><span className="eyebrow light">Kodėl Alyplasta</span><h2>Vietinė komanda.<br />Ilgalaikis rezultatas.</h2></div>
          <div className="about-points">
            <div><BadgeCheck /><p><b>Patikrinti sprendimai</b><br />Kokybiški profiliai, stiklo paketai ir furnitūra.</p></div>
            <div><Headphones /><p><b>Aptarnavimas po montavimo</b><br />Garantinis ir pogarantinis reguliavimas bei remontas.</p></div>
            <div><Hammer /><p><b>Pilna atsakomybė</b><br />Gaminys, montavimas ir apdaila iš vienų rankų.</p></div>
          </div>
          <Link to="/apie-mus-alytuje/" className="text-link light-link">Susipažinti su mumis <ArrowRight /></Link>
        </div>
      </section>

      <Faq />
      <ContactCta onQuote={onQuote} />
    </main>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  const items = [
    ['Ar atvykstate išmatuoti?', 'Taip. Prieš gamybą specialistas atvyksta į objektą, įvertina angas, sienų konstrukciją ir numatomų darbų apimtį.'],
    ['Kiek laiko galioja garantija?', 'Langams bei atliekamiems montavimo ir apdailos darbams suteikiame 5 metų garantiją.'],
    ['Ar remontuojate ne jūsų montuotus langus?', 'Taip. Reguliuojame ir remontuojame langus bei duris nepriklausomai nuo to, kas juos gamino ar montavo.'],
    ['Kokiuose miestuose dirbate?', 'Dirbame Alytuje ir visoje Pietų Lietuvoje — dėl konkretaus adreso ir atvykimo laiko susisiekite telefonu.'],
  ]
  return (
    <section className="section faq-section"><div className="container faq-layout">
      <SectionTitle eyebrow="Trumpai ir aiškiai" title="Dažniausiai užduodami klausimai" text="Neradote atsakymo? Paskambinkite — padėsime įvertinti jūsų situaciją." />
      <div className="accordion">{items.map(([q, a], i) => <div className={`faq-item ${open === i ? 'open' : ''}`} key={q}><button onClick={() => setOpen(open === i ? -1 : i)}><span>{q}</span><ChevronDown /></button>{open === i && <p>{a}</p>}</div>)}</div>
    </div></section>
  )
}

function ContactCta({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="section contact-cta"><div className="container contact-cta-inner">
      <div><span className="eyebrow">Kitas žingsnis</span><h2>Turite projektą?<br />Paskaičiuokime.</h2></div>
      <p>Atsiųskite matmenis arba susitarkite dėl specialisto atvykimo. Pateiksime jūsų situacijai pritaikytą pasiūlymą.</p>
      <div><button className="btn btn-accent btn-large" onClick={onQuote}>Gauti pasiūlymą <ArrowRight size={18} /></button><a href={phoneHref} className="contact-phone"><Phone /> {phone}</a></div>
    </div></section>
  )
}

function Breadcrumbs({ title }: { title: string }) {
  return <div className="breadcrumbs"><Link to="/">Pradžia</Link><span>/</span><span>{title}</span></div>
}

function DetailPage({ page, onQuote }: { page: PageData; onQuote: () => void }) {
  const children = (page.children || []).map(pageBySlug).filter(Boolean) as PageData[]
  return (
    <main>
      <section className="detail-hero">
        <div className="container"><Breadcrumbs title={page.title} /><div className="detail-hero-grid">
          <div className="detail-copy"><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p><div className="detail-actions"><button className="btn btn-accent" onClick={onQuote}>Gauti pasiūlymą <ArrowRight size={18} /></button><a className="text-link" href={phoneHref}><Phone /> {phone}</a></div></div>
          <div className="detail-image"><img src={imageFor(page.image)} alt={page.title} /><div className="detail-badge"><BadgeCheck /><span><b>5 metų garantija</b> gaminiams ir darbams</span></div></div>
        </div></div>
      </section>

      <section className="section detail-main"><div className="container detail-main-grid">
        <article>
          <span className="eyebrow">Apie sprendimą</span><h2>Patikimas pasirinkimas kasdieniam komfortui</h2><p className="lead">{page.description}</p>
          <div className="benefit-grid">{page.benefits.map((benefit) => <div key={benefit}><Check /><span>{benefit}</span></div>)}</div>
          {page.specs && <div className="spec-box"><h3>Svarbiausios savybės</h3><ul>{page.specs.map((spec) => <li key={spec}><span />{spec}</li>)}</ul></div>}
        </article>
        <aside><QuoteForm compact initialProduct={page.title} /><div className="call-card"><Phone /><div><small>Norite atsakymo iškart?</small><a href={phoneHref}>{phone}</a><span>I–V, 09:00–17:00</span></div></div></aside>
      </div></section>

      {children.length > 0 && <section className="section child-section"><div className="container">
        <SectionTitle eyebrow="Pasirinkite variantą" title={`Atraskite: ${page.title.toLowerCase()}`} text="Atverkite dominančią kategoriją arba kreipkitės — padėsime palyginti." />
        <div className="child-grid">{children.map((child, i) => <Link to={`/${child.slug}/`} className="child-card" key={child.slug}><span>0{i + 1}</span><h3>{child.title}</h3><p>{child.intro}</p><b>Sužinoti daugiau <ArrowRight /></b></Link>)}</div>
      </div></section>}

      <section className="section mini-process"><div className="container"><SectionTitle eyebrow="Kaip dirbame" title="Aišku nuo pradžios iki pabaigos" /><div className="mini-process-grid">
        <div><MessageSquareText /><span>01</span><h3>Konsultuojame</h3><p>Išsiaiškiname poreikį ir pasiūlome tinkamus variantus.</p></div>
        <div><Ruler /><span>02</span><h3>Išmatuojame</h3><p>Atvykstame, tiksliai išmatuojame ir suderiname kainą.</p></div>
        <div><Hammer /><span>03</span><h3>Sumontuojame</h3><p>Pagaminame, sumontuojame ir pasirūpiname apdaila.</p></div>
      </div></div></section>
      <ContactCta onQuote={onQuote} />
    </main>
  )
}

function AboutPage({ onQuote }: { onQuote: () => void }) {
  return <main><section className="simple-hero"><div className="container"><Breadcrumbs title="Apie mus" /><span className="eyebrow">UAB „Alyplasta“</span><h1>Jūsų namų jaukumui<br />— nuo 2005 metų.</h1><p>Esame Alytuje įsikūrusi komanda, tiekianti ir montuojanti langus, duris, vartus bei langų uždangas visoje Pietų Lietuvoje.</p></div></section>
    <section className="section story"><div className="container story-grid"><div><img src="/images/montavimas.webp" alt="Alyplasta darbų kokybė" /></div><article><span className="eyebrow">Mūsų požiūris</span><h2>Atsakomybė už visą rezultatą</h2><p>Dirbame tam, kad klientui nereikėtų derinti kelių skirtingų meistrų. Konsultuojame, padedame išsirinkti, išmatuojame, pagaminame, sumontuojame ir atliekame apdailą.</p><p>Naudojame patikrintas profilių sistemas, kokybišką įstiklinimą ir patikimus apkaustus. Gaminiai pritaikomi konkrečiam objektui, o garantinis bei pogarantinis aptarnavimas padeda pasirūpinti jais ir po montavimo.</p><div className="story-stat"><strong>20+</strong><span>metų patirties<br />Pietų Lietuvoje</span></div></article></div></section>
    <section className="section values"><div className="container"><SectionTitle eyebrow="Kuo tikime" title="Mažiau pažadų. Daugiau gero darbo." /><div className="value-grid"><div><BadgeCheck /><h3>Patikrinta kokybė</h3><p>Renkamės sprendimus, kurių savybėmis galime pasitikėti.</p></div><div><Headphones /><h3>Aiškus bendravimas</h3><p>Paaiškiname pasirinkimus ir iš anksto sutariame darbų eigą.</p></div><div><Wrench /><h3>Ilgas aptarnavimas</h3><p>Atliekame garantinį ir pogarantinį remontą bei reguliavimą.</p></div></div></div></section>
    <ContactCta onQuote={onQuote} /></main>
}

function ContactPage() {
  return <main><section className="simple-hero contact-head"><div className="container"><Breadcrumbs title="Kontaktai" /><span className="eyebrow">Susisiekime</span><h1>Užsukite, paskambinkite<br />arba parašykite.</h1><p>Aptarsime jūsų poreikį ir padėsime suplanuoti kitą žingsnį.</p></div></section>
    <section className="section contact-page"><div className="container contact-grid"><div className="contact-details">
      <div className="contact-card"><Phone /><div><span>Telefonas</span><a href={phoneHref}>{phone}</a><small>I–V, 09:00–17:00</small></div></div>
      <div className="contact-card"><Mail /><div><span>El. paštas</span><a href={`mailto:${email}`}>{email}</a><small>Atsakysime darbo metu</small></div></div>
      <div className="contact-card"><MapPin /><div><span>Adresas</span><a href="https://www.google.com/maps/search/?api=1&query=Naujoji+g.+56+Alytus" target="_blank" rel="noreferrer">Naujoji g. 56, Alytus</a><small>Gauti nuorodas žemėlapyje</small></div></div>
      <div className="company-info"><h3>UAB „Alyplasta“</h3><p>Įmonės kodas: 300133103<br />PVM mokėtojo kodas: LT100001859413<br />Vadovas: Rolandas Brokas</p></div>
    </div><QuoteForm /></div></section></main>
}

function PrivacyPage() {
  return <main><section className="simple-hero legal-head"><div className="container"><Breadcrumbs title="Privatumo politika" /><span className="eyebrow">Teisinė informacija</span><h1>Privatumo politika</h1><p>Kaip tvarkome jūsų asmens duomenis ir saugome privatumą.</p></div></section><section className="section legal"><div className="container legal-content">
    <h2>Bendroji informacija</h2><p>UAB „Alyplasta“ gerbia jūsų privatumą ir asmens duomenis tvarko laikydamasi galiojančių teisės aktų. Ši politika paaiškina, kokie duomenys gali būti gaunami jums susisiekus su mumis ir kaip jie naudojami.</p>
    <h2>Kokius duomenis gauname</h2><p>Kai kreipiatės telefonu ar el. paštu, galime gauti jūsų vardą, telefono numerį, el. pašto adresą, objekto adresą bei informaciją, reikalingą pasiūlymui parengti ar paslaugai suteikti. Svetainėje pateikta užklausos forma atidaro jūsų el. pašto programą — duomenys nėra saugomi pačioje svetainėje.</p>
    <h2>Duomenų naudojimo tikslai</h2><p>Duomenis naudojame atsakyti į užklausas, parengti komercinį pasiūlymą, vykdyti sutartinius įsipareigojimus, organizuoti matavimą, gamybą, montavimą ir garantinį aptarnavimą.</p>
    <h2>Duomenų saugojimas ir perdavimas</h2><p>Asmens duomenis saugome tik tiek, kiek būtina nurodytiems tikslams arba teisės aktų reikalavimams įvykdyti. Jų neparduodame ir be teisinio pagrindo neperduodame tretiesiems asmenims.</p>
    <h2>Jūsų teisės</h2><p>Galite prašyti susipažinti su savo duomenimis, juos patikslinti, ištrinti arba apriboti jų tvarkymą. Dėl privatumo klausimų rašykite adresu <a href={`mailto:${email}`}>{email}</a>.</p>
  </div></section></main>
}

function DynamicPage({ onQuote }: { onQuote: () => void }) {
  const { slug = '' } = useParams()
  const page = pageBySlug(slug)
  useEffect(() => { document.title = page ? `${page.title} | Alyplasta` : 'Puslapis nerastas | Alyplasta' }, [page])
  if (!page) return <NotFound />
  return <DetailPage page={page} onQuote={onQuote} />
}

function NotFound() {
  return <main className="not-found"><span>404</span><h1>Puslapio neradome</h1><p>Galbūt pasikeitė adresas. Grįžkite į pradžią ir pasirinkite dominančią kategoriją.</p><Link to="/" className="btn btn-primary">Į pradžią <ArrowRight /></Link></main>
}

function Footer() {
  const productLinks = pages.filter((p) => ['plastikiniai-langai-ir-durys-alytuje', 'aliuminio-langai-ir-durys-alytuje', 'zaliuzes-ir-roletai-alytuje', 'garazo-vartai-alytuje', 'tinkleliai-nuo-vabzdziu-alytuje'].includes(p.slug))
  return <footer><div className="container footer-grid"><div><Logo /><p>Langai, durys ir profesionalus montavimas Alytuje bei visoje Pietų Lietuvoje.</p><a href={phoneHref} className="footer-phone"><Phone /> {phone}</a></div><div><h4>Sprendimai</h4>{productLinks.map(p => <Link to={`/${p.slug}/`} key={p.slug}>{p.title}</Link>)}</div><div><h4>Paslaugos</h4><Link to="/montavimo-darbai-alytuje/">Montavimo darbai</Link><Link to="/apdailos-darbai-alytuje/">Apdailos darbai</Link><Link to="/remonto-darbai-alytuje/">Remonto darbai</Link><Link to="/balkonu-stiklinimas-alytuje/">Balkonų stiklinimas</Link></div><div><h4>Kontaktai</h4><a href={`mailto:${email}`}>{email}</a><span>Naujoji g. 56, Alytus</span><span>I–V, 09:00–17:00</span><a href="https://www.facebook.com/alyplasta" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Facebook</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} UAB „Alyplasta“</span><Link to="/privatumo-politika/">Privatumo politika</Link><span>Sukurta geresnei namų savijautai.</span></div></footer>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const { pathname } = useLocation()
  const title = useMemo(() => pageBySlug(pathname.split('/').filter(Boolean)[0] || '')?.title || 'Alyplasta', [pathname])
  useEffect(() => {
    const specialTitles: Record<string, string> = {
      '/': 'Alyplasta — langai ir durys Alytuje',
      '/apie-mus-alytuje/': 'Apie mus | Alyplasta',
      '/kontaktai/': 'Kontaktai | Alyplasta',
      '/privatumo-politika/': 'Privatumo politika | Alyplasta',
    }
    const activePage = pageBySlug(pathname.split('/').filter(Boolean)[0] || '')
    document.title = specialTitles[pathname] || (activePage ? `${activePage.title} | Alyplasta` : 'Alyplasta — langai ir durys Alytuje')
    const description = activePage?.intro || 'Langai, durys, žaliuzės, roletai ir profesionalus montavimas Alytuje bei visoje Pietų Lietuvoje.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [pathname])
  return <>
    <ScrollToTop />
    <Header onQuote={() => setQuoteOpen(true)} />
    <Routes>
      <Route path="/" element={<Home onQuote={() => setQuoteOpen(true)} />} />
      <Route path="/apie-mus-alytuje/" element={<AboutPage onQuote={() => setQuoteOpen(true)} />} />
      <Route path="/kontaktai/" element={<ContactPage />} />
      <Route path="/privatumo-politika/" element={<PrivacyPage />} />
      <Route path="/:slug/" element={<DynamicPage onQuote={() => setQuoteOpen(true)} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <div className="mobile-cta"><a href={phoneHref}><Phone /> Skambinti</a><button onClick={() => setQuoteOpen(true)}>Gauti pasiūlymą</button></div>
    <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} initialProduct={title !== 'Alyplasta' ? title : ''} />
  </>
}
