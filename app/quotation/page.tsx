import { Check, ArrowRight, Mail, Shield, Clock, Zap, Plus, Phone } from 'lucide-react'

const pages = [
  { num: '01', title: 'Home', desc: 'High-Impact Hero & Cinematic Visuals' },
  { num: '02', title: 'About', desc: 'Legacy, Vision & Qatar Mission' },
  { num: '03', title: 'Services', desc: 'Full EPC Technical Spectrum' },
  { num: '04', title: 'Projects', desc: 'Interactive Industrial Portfolio' },
  { num: '05', title: 'Quality', desc: 'QA/QC Standards & ISO Listing' },
  { num: '06', title: 'Certifications', desc: 'Industry Standards & Compliance' },
  { num: '07', title: 'Contact', desc: 'Enterprise Inquiry Gateway' },
]

const packageChecks = [
  'Core deployment of the 7-page enterprise site.',
  'Live Inquiry system for business lead generation.',
  'Modern architecture optimized for desktop precision.',
  'Professional Logo Design with multiple variations.',
  'Color palette, typography, and visual language definition.',
  'Custom motion effects & premium UX polish.',
  'Contact Email & WhatsApp integration for direct communication.',
  'Localized Qatar Search Visibility (SEO).',
]

const inquiryFeatures = [
  { label: 'Direct Access', desc: 'Seamless professional engagement.' },
  { label: 'Smart Responders', desc: 'Formalized instant confirmation.' },
  { label: 'Lead Tracking', desc: 'Secure database for contract tenders.' },
  { label: 'Data Validation', desc: 'High-quality B2B inquiry capture.' },
]

const weeks = [
  { num: '01', title: 'WEEK 1', desc: 'Logo Design, Asset Extraction & Sitemap Layout.' },
  { num: '02', title: 'WEEK 2', desc: 'Live Deployment. Functional corporate site launch.' },
  { num: '03', title: 'WEEK 3', sub: 'POLISH', desc: 'Motion design, SEO, and premium UX refinement.' },
]

function SectionBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="w-1 h-8 bg-mid" />
      <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-dark">{children}</h2>
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <Check size={16} className="text-mid mt-0.5 shrink-0" />
      <span className="text-sm text-mid">{text}</span>
    </div>
  )
}

function Divider() {
  return <div className="w-full h-px bg-border" />
}

export default function QuotationPage() {
  return (
    <div className="bg-bg min-h-screen">
      {/* ═══ SECTION 1: COVER ═══ */}
      <section className="min-h-screen flex flex-col justify-center px-[var(--container-padding)] relative">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-mid" />
        <p className="text-xs text-muted tracking-[0.3em] mb-8">O F F I C I A L &nbsp; W E B &nbsp; P R O P O S A L</p>
        <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-dark leading-[0.95] mb-6">
          JARACON<br />EPC PROJECTS
        </h1>
        <p className="text-sm text-mid max-w-[50ch] mb-16">
          Accelerated Digital Infrastructure & Modern Enterprise Platform for Doha, Qatar.
        </p>
        <div className="flex flex-wrap gap-16">
          <div>
            <p className="text-xs text-muted tracking-[0.2em] mb-2">P R E P A R E D &nbsp; F O R</p>
            <p className="text-sm font-semibold text-dark">JARACON EPC PROJECTS TRADING CONTRACTING & SERVICES</p>
            <p className="text-xs text-muted mt-1">DOHA, QATAR</p>
          </div>
          <div>
            <p className="text-xs text-muted tracking-[0.2em] mb-2">C O N T A C T</p>
            <p className="text-sm font-semibold text-dark">info@jaraconepc.com</p>
            <p className="text-sm font-semibold text-dark mt-1">+974 5589 0643</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ SECTION 2: 8-PAGE ARCHITECTURE ═══ */}
      <section className="py-[var(--section-padding)] px-[var(--container-padding)]">
        <SectionBar>7-PAGE MODERN ARCHITECTURE</SectionBar>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pages.map((p) => (
            <div
              key={p.num}
              className={`p-5 border border-border ${p.num === '07' ? 'bg-mid text-white' : 'bg-bg'}`}
            >
              <span className={`text-xs ${p.num === '07' ? 'text-white/50' : 'text-muted'} font-semibold`}>{p.num}</span>
              <p className={`text-sm font-semibold mt-3 ${p.num === '07' ? 'text-white' : 'text-dark'}`}>
                {p.title}: {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ SECTION 3: COMPLETE PACKAGE ═══ */}
      <section className="py-[var(--section-padding)] px-[var(--container-padding)]">
        <SectionBar>COMPLETE PACKAGE: SITE + LOGO + POLISH</SectionBar>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">ALL-INCLUSIVE BUILD</p>
            <p className="text-sm text-mid leading-relaxed mb-8">
              <span className="font-bold text-dark">EVERYTHING IN ONE.</span> Full 7-page enterprise site deployment,
              professional logo design, and premium UX polish — delivered as a single cohesive package.
            </p>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">INCLUDED IN PACKAGE</p>
            {packageChecks.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>
          <div className="flex flex-col items-end justify-center">
            <p className="text-xs text-muted tracking-[0.15em] mb-4">TOTAL INVESTMENT</p>
            <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-dark leading-none">&#8377;35,000</p>
            <p className="text-xs text-muted mt-4 tracking-[0.1em]">SITE + LOGO + POLISH</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ SECTION 4: FUTURE PROJECT PAGES ═══ */}
      <section className="py-[var(--section-padding)] px-[var(--container-padding)]">
        <SectionBar>FUTURE PROJECT PAGES</SectionBar>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">SCALABLE PORTFOLIO</p>
            <p className="text-sm text-mid leading-relaxed mb-8">
              As Jaracon EPC Projects wins new contracts, each completed project can have its own
              <span className="font-bold text-dark"> dedicated page</span> with a unique URL slug — showcasing
              project details, gallery, scope of work, and technical specifications.
            </p>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">EACH PROJECT PAGE INCLUDES</p>
            <CheckItem text="Dedicated URL slug (e.g. /projects/al-wakra-stadium)." />
            <CheckItem text="Project gallery with high-resolution imagery." />
            <CheckItem text="Scope of work, technical details & specifications." />
            <CheckItem text="Consistent design matching the main site aesthetic." />
            <p className="text-xs text-muted tracking-[0.15em] mt-8 mb-4">COMPLIMENTARY ADDITIONS</p>
            <CheckItem text="First 2 project page additions are complimentary within 6 months of launch." />
            <CheckItem text="Subsequent project pages billed at ₹1,000 each." />
            <p className="text-xs text-muted tracking-[0.15em] mt-8 mb-4">ADDITIONAL</p>
            <CheckItem text="CMS integration for self-managed project pages — can be discussed later." />
          </div>
          <div className="flex flex-col items-end justify-center">
            <p className="text-xs text-muted tracking-[0.15em] mb-4">PER PROJECT PAGE</p>
            <div className="flex items-baseline gap-2">
              <Plus size={16} className="text-mid" />
              <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-dark leading-none">&#8377;1,000</p>
            </div>
            <p className="text-xs text-muted mt-4 tracking-[0.1em]">PER ADDITIONAL PROJECT</p>
            <div className="mt-6 p-4 border border-border bg-surface">
              <p className="text-xs font-semibold text-dark">2 FREE ADDITIONS</p>
              <p className="text-xs text-mid mt-1">Within 6 months of launch</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ SECTION 5: ENTERPRISE INQUIRY GATEWAY ═══ */}
      <section className="py-[var(--section-padding)] px-[var(--container-padding)]">
        <SectionBar>ENTERPRISE INQUIRY GATEWAY</SectionBar>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface p-8">
            <p className="text-xs text-mid tracking-[0.15em] mb-6">DIRECT CONNECT</p>
            <div className="flex items-center gap-3 mb-4">
              <Mail size={18} className="text-mid" />
              <p className="text-sm font-semibold text-dark">info@jaraconepc.com</p>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Phone size={18} className="text-mid" />
              <p className="text-sm font-semibold text-dark">+974 5589 0643</p>
            </div>
            <p className="text-xs text-mid leading-relaxed">
              Integrated corporate communication hub that routes high-value inquiries directly to your
              executive team, filtered by project type.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-6">Integrated Business Features:</p>
            {inquiryFeatures.map((f) => (
              <div key={f.label} className="flex items-start gap-3 py-3 border-b border-border">
                <Check size={16} className="text-mid mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-dark">{f.label}: </span>
                  <span className="text-sm text-mid">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ SECTION 6: TECHNICAL PERFORMANCE ═══ */}
      <section className="py-[var(--section-padding)] px-[var(--container-padding)]">
        <SectionBar>TECHNICAL PERFORMANCE</SectionBar>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center py-12 border border-border">
            <p className="text-[clamp(4rem,8vw,6rem)] font-bold text-dark leading-none">
              1.1<span className="text-surface text-[0.5em]">s</span>
            </p>
            <p className="text-xs text-muted tracking-[0.15em] mt-4">I N I T I A L &nbsp; L O A D &nbsp; T I M E</p>
          </div>
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">CORPORATE PERFORMANCE</p>
            <p className="text-sm text-mid leading-relaxed mb-4">
              The Jaracon EPC Projects platform is built with a <span className="font-bold text-dark">&ldquo;Desktop-First&rdquo;</span> precision
              mindset, mirroring the clean, modern aesthetics of elite global firms.
            </p>
            <p className="text-sm text-mid leading-relaxed">
              This ensures that government officials and project bidders experience zero friction when
              reviewing your extensive capabilities gallery.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ SECTION 7: INVESTMENT SUMMARY + ROADMAP ═══ */}
      <section className="py-[var(--section-padding)] px-[var(--container-padding)]">
        <SectionBar>PROJECT INVESTMENT SUMMARY</SectionBar>

        {/* Table */}
        <div className="mb-16">
          <div className="grid grid-cols-4 gap-0 border border-border">
            {/* Header */}
            <div className="bg-mid text-white p-4 text-xs font-semibold tracking-[0.1em]">ITEM</div>
            <div className="bg-mid text-white p-4 text-xs font-semibold tracking-[0.1em]">OBJECTIVE</div>
            <div className="bg-mid text-white p-4 text-xs font-semibold tracking-[0.1em]">TIMELINE</div>
            <div className="bg-mid text-white p-4 text-xs font-semibold tracking-[0.1em]">INVESTMENT</div>
            {/* Row 1 — Complete Package */}
            <div className="p-4 text-sm font-semibold text-dark border-t border-border">COMPLETE PACKAGE</div>
            <div className="p-4 text-sm text-mid border-t border-border">7-Page Site + Logo Design + Polish</div>
            <div className="p-4 text-sm text-mid border-t border-border">3 Weeks</div>
            <div className="p-4 text-sm font-semibold text-dark border-t border-border">&#8377;35,000</div>
            {/* Row 2 — Future Project Pages */}
            <div className="p-4 text-sm font-semibold text-dark border-t border-border">PROJECT PAGES</div>
            <div className="p-4 text-sm text-mid border-t border-border">Dedicated page per future project (slug)*</div>
            <div className="p-4 text-sm text-mid border-t border-border">As needed</div>
            <div className="p-4 text-sm font-semibold text-dark border-t border-border">&#8377;1,000 / page*</div>
            {/* Total */}
            <div className="p-4 text-sm font-bold text-dark border-t-2 border-mid">TOTAL</div>
            <div className="p-4 text-sm font-bold text-dark border-t-2 border-mid">Full Jaracon EPC Modern Corporate Ecosystem</div>
            <div className="p-4 text-sm font-bold text-dark border-t-2 border-mid">3 Weeks</div>
            <div className="p-4 text-sm font-bold text-dark border-t-2 border-mid">&#8377;35,000 INR</div>
          </div>
          <p className="text-xs text-muted mt-4 italic">
            *First 2 project page additions are complimentary within 6 months of launch.
          </p>
          <div className="flex justify-between mt-2">
            <p className="text-xs text-muted">Jaracon EPC Projects Trading Contracting & Services | Doha, Qatar</p>
            <p className="text-xs text-muted">info@jaraconepc.com | +974 5589 0643</p>
          </div>
        </div>

        {/* Roadmap */}
        <SectionBar>STRATEGIC EXECUTION ROADMAP</SectionBar>
        <div className="grid grid-cols-3 gap-6 max-w-3xl">
          {weeks.map((w) => (
            <div key={w.num} className="text-center">
              <div className="w-12 h-12 rounded-full bg-mid text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-xs font-bold">{w.num}</span>
              </div>
              <p className="text-sm font-bold text-dark mb-1">{w.title}</p>
              {w.sub && <p className="text-xs font-semibold text-mid mb-1">{w.sub}</p>}
              <p className="text-xs text-muted leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-8 italic">
          *First 2 project pages are complimentary within 6 months of launch. Subsequent pages billed separately.
        </p>
      </section>

      <Divider />

      {/* ═══ SECTION 8: TERMS & CONDITIONS ═══ */}
      <section className="py-[var(--section-padding)] px-[var(--container-padding)]">
        <SectionBar>TERMS & CONDITIONS</SectionBar>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">SCOPE & TIMING</p>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">1.1 Deployment:</span> The 3-week delivery is contingent upon receipt
                of all brand assets within 48 hours of project kickoff.
              </p>
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">1.2 Revisions:</span> Two rounds of refinements are
                included. Additional changes may affect final handover dates.
              </p>
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">1.3 Project Pages:</span> First 2 project page additions are
                complimentary within 6 months of launch. Subsequent pages are billed at
                &#8377;1,000 each and delivered within 3 business days of receiving content.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">PAYMENTS</p>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">2.1 Schedule:</span> 50% Kickoff Deposit | 50%
                Final Delivery & Handover.
              </p>
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">2.2 Retention:</span> Payments are non-refundable once work has been initiated.
              </p>
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">2.3 Project Pages:</span> Billed individually upon delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">OWNERSHIP</p>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">3.1 IP Rights:</span> Jaracon EPC Projects retains 100% intellectual
                property rights to the final code and design upon full payment.
              </p>
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">3.2 Support:</span> 30 days of post-launch technical support is
                included for bug fixes and adjustments.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted tracking-[0.15em] mb-4">INFRASTRUCTURE</p>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">4.1 Hosting:</span> Domain/Hosting costs are the client&apos;s
                responsibility. We assist in Doha-localized server setup.
              </p>
              <p className="text-sm text-mid leading-relaxed">
                <span className="font-semibold text-dark">4.2 Security:</span> Systems are built to align with modern
                international B2B data privacy standards.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-20 pt-8 border-t border-border">
          <p className="text-sm font-bold text-dark">LET&apos;S BUILD THE FUTURE.</p>
          <p className="text-sm text-mid">info@jaraconepc.com | +974 5589 0643</p>
        </div>
      </section>
    </div>
  )
}
