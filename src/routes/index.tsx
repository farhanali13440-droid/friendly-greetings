import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import drAteeq from "@/assets/dr-ateeq.jpg.asset.json";


export const Route = createFileRoute("/")({ component: HomePage });

const phone = "tel:+923142227878";
const whatsapp = "https://wa.me/923142227878";
const maps = "https://maps.app.goo.gl/gZuh8u1VD2PDE2FX9?g_st=aw";

const services = [
  { icon: Baby, title: "Neonatal & Newborn Care", text: "Newborn examinations, jaundice, feeding concerns, prematurity and low-birth-weight follow-up." },
  { icon: Stethoscope, title: "Pediatric Care", text: "Assessment and treatment for fever, infections, respiratory, digestive, allergic and recurrent childhood illnesses." },
  { icon: HeartPulse, title: "Growth & Development", text: "Weight, height, BMI, growth charts, developmental milestones and concerns about poor growth." },
  { icon: ShieldCheck, title: "Nutrition & Feeding", text: "Breastfeeding, weaning, nutritional assessment, poor weight gain and healthy childhood nutrition guidance." },
  { icon: Syringe, title: "Preventive Child Healthcare", text: "Routine health assessments, developmental surveillance, parent education and warning-sign guidance." },
  { icon: Stethoscope, title: "Clinical Assessment", text: "Comprehensive pediatric examination, pulse oximetry, nebulization, feeding and respiratory assessment." },
];

const faqs = [
  ["What does a pediatrician treat?", "Pediatric care covers newborns, infants, children and adolescents, including common illnesses, breathing problems, digestive concerns, allergies, growth and developmental concerns."],
  ["Does Dr. Ateeq provide newborn care?", "Yes. Dr. Ateeq Ur Rehman provides specialist newborn and neonatal assessment and follow-up."],
  ["Does the clinic provide vaccination services?", "Vaccination services are not currently provided at the clinic. Parents can still consult the doctor about age-appropriate schedules, catch-up vaccination and vaccine-related questions."],
  ["Can I consult about poor weight gain or nutrition?", "Yes. Growth, nutrition, weight, height, BMI and feeding assessment are part of the clinic's services."],
  ["How can I book an appointment?", "Call or WhatsApp 03142227878 to schedule your visit."],
  ["What are the clinic timings?", "Monday to Saturday: 6:00 PM–10:00 PM. Sunday: 10:00 AM–2:00 PM."],
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"><HeartPulse size={22} /></div>
            <div><div className="text-sm font-extrabold tracking-tight text-slate-950">ARHAM</div><div className="text-[11px] font-semibold tracking-[0.18em] text-blue-600">CHILDCARE CLINIC</div></div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#services" className="hover:text-blue-600">Services</a><a href="#doctor" className="hover:text-blue-600">Doctor</a><a href="#why" className="hover:text-blue-600">Why Us</a><a href="#faq" className="hover:text-blue-600">FAQs</a><a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"><MessageCircle size={17} /> WhatsApp</a>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-slate-50">
        <div className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm"><ShieldCheck size={17} /> Specialist pediatric & neonatal care in Multan</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[72px]">Expert child & newborn care you can <span className="text-blue-600">trust.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Compassionate, evidence-based care focused on accurate diagnosis, healthy growth, nutrition and development—so you can feel confident about your child's health.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phone} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"><CalendarCheck size={19} /> Book an Appointment</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"><MessageCircle size={19} /> WhatsApp the Clinic</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-600"><span className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={17}/> MBBS, FCPS Pediatrics</span><span className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={17}/> 10+ years experience</span></div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[38px] bg-blue-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-2xl shadow-blue-900/10">
              <div className="relative flex aspect-[4/4.5] items-end overflow-hidden rounded-[27px] bg-gradient-to-br from-blue-100 via-white to-slate-100">
                <img src={drAteeq.url} alt="Dr. Ateeq Ur Rehman, Consultant Child Specialist and Neonatologist" className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="relative w-full p-7"><div className="ml-auto max-w-[270px] rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl backdrop-blur"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Dr. Ateeq Ur Rehman</p><p className="mt-1 text-lg font-extrabold text-slate-900">Consultant Child Specialist & Neonatologist</p><p className="mt-2 text-sm leading-6 text-slate-500">Child-friendly care. Clear guidance. Individualized treatment.</p></div></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-50 bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-blue-50 px-5 py-7 md:grid-cols-4 lg:px-8"><Stat value="10+" label="Years Experience"/><Stat value="FCPS" label="Pediatric Medicine"/><Stat value="Specialist" label="Child & Neonatal Care"/><Stat value="Individualized" label="Treatment Plans"/></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><Eyebrow>WHEN YOUR CHILD ISN'T WELL</Eyebrow><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">You want more than just a prescription.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600">Parents need to know what's actually happening, what their child needs, what can be managed safely at home, and when medical attention is important. Arham Childcare Clinic starts with careful assessment—not assumptions.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Concern title="Fever & infections" text="Persistent fever, recurrent infections and childhood illnesses."/><Concern title="Breathing concerns" text="Cough, wheezing, asthma and respiratory symptoms."/><Concern title="Growth concerns" text="Poor weight gain, short stature and developmental concerns."/><Concern title="Newborn worries" text="Jaundice, feeding, prematurity and newborn warning signs."/></div></section>

      <section id="services" className="bg-slate-50"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="max-w-3xl"><Eyebrow>COMPREHENSIVE CARE</Eyebrow><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A complete approach to your child's healthcare.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Every child is assessed as an individual, with attention to illness, prevention, nutrition, growth and development.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((s) => <article key={s.title} className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><s.icon size={23}/></div><h3 className="mt-6 text-xl font-extrabold">{s.title}</h3><p className="mt-3 leading-7 text-slate-600">{s.text}</p><a href={phone} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">Discuss this concern <ArrowRight size={16} className="transition group-hover:translate-x-1"/></a></article>)}</div></div></section>

      <section id="why" className="bg-blue-700 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-28"><div><Eyebrow light>WHY PARENTS CHOOSE US</Eyebrow><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Care that looks beyond the symptoms.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">The goal is not only to treat today's illness, but to support your child's long-term health and wellbeing.</p></div><div className="grid gap-4 sm:grid-cols-2">{["Experienced Consultant Pediatrician & Neonatologist","Evidence-based medical practice","Comprehensive assessment of children and newborns","Child-friendly and compassionate approach","Clear communication with parents","Growth, nutrition and developmental monitoring","Rational use of medicines and investigations","Individualized treatment plans"].map((x) => <div key={x} className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-200" size={19}/><span className="font-semibold leading-6">{x}</span></div>)}</div></div></section>

      <section id="doctor" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div className="relative"><div className="relative aspect-[4/5] overflow-hidden rounded-[34px] bg-gradient-to-br from-blue-100 via-slate-50 to-blue-50 p-6 shadow-inner"><img src={drAteeq.url} alt="Dr. Ateeq Ur Rehman in graduation robes" className="absolute inset-0 h-full w-full object-cover object-top" /><div className="relative flex h-full items-end rounded-[27px] border border-white/40 bg-gradient-to-t from-slate-950/70 to-transparent p-6 text-white"><div><div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white"><UserRound size={27}/></div><p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-200">Consultant</p><p className="mt-1 text-2xl font-black">Dr. Ateeq Ur Rehman</p></div></div></div></div><div><Eyebrow>MEET YOUR CHILD SPECIALIST</Eyebrow><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Dr. Ateeq Ur Rehman</h2><p className="mt-3 text-lg font-bold text-blue-600">MBBS, FCPS (Pediatrics) · Consultant Child Specialist & Neonatologist</p><p className="mt-6 leading-8 text-slate-600">Dr. Ateeq Ur Rehman has experience caring for newborns, infants, children and adolescents. He has worked as a Registrar at Mukhtar A Sheikh Hospital, Multan and Nishtar Hospital, Multan, gaining experience in tertiary pediatric and neonatal care.</p><p className="mt-4 leading-8 text-slate-600">His approach emphasizes accurate diagnosis, prevention, nutrition, growth and development, child-friendly care, parent counselling and avoiding unnecessary tests and medications while ensuring timely, guideline-based treatment.</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><Credential title="MBBS" text="Bachelor of Medicine & Surgery"/><Credential title="FCPS Pediatrics" text="Fellow of CPSP"/><Credential title="Ex-Registrar" text="Mukhtar A Sheikh Hospital, Multan"/><Credential title="Ex-Registrar" text="Nishtar Hospital, Multan"/></div></div></div></section>

      <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><div className="grid gap-5 lg:grid-cols-3"><div className="rounded-[28px] bg-white p-7 shadow-sm"><Clock3 className="text-blue-600"/><h3 className="mt-5 text-xl font-extrabold">Clinic Hours</h3><p className="mt-3 leading-7 text-slate-600">Monday–Saturday<br/><strong className="text-slate-900">6:00 PM – 10:00 PM</strong><br/><br/>Sunday<br/><strong className="text-slate-900">10:00 AM – 2:00 PM</strong></p></div><div className="rounded-[28px] bg-white p-7 shadow-sm"><MapPin className="text-blue-600"/><h3 className="mt-5 text-xl font-extrabold">Easy to Find</h3><p className="mt-3 leading-7 text-slate-600">Near Pak Turk School, Multan Public School Road, Model Town, Multan.</p><a href={maps} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600">Get directions <ArrowRight size={16}/></a></div><div className="rounded-[28px] bg-white p-7 shadow-sm"><ShieldCheck className="text-blue-600"/><h3 className="mt-5 text-xl font-extrabold">Vaccination Guidance</h3><p className="mt-3 leading-7 text-slate-600">Vaccines are not currently provided at the clinic, but parents can consult the doctor about schedules, catch-up vaccination and vaccine-related questions.</p></div></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-3xl text-center"><Eyebrow>HOW IT WORKS</Eyebrow><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Getting the right care is simple.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{[["01","Book your visit","Call or WhatsApp 03142227878 to schedule an appointment."],["02","Get a complete assessment","Dr. Ateeq evaluates symptoms, history, growth and overall health."],["03","Leave with a clear plan","Receive appropriate treatment, guidance and follow-up recommendations."]].map(([n,t,d]) => <div key={n} className="rounded-[28px] border border-slate-200 p-7"><div className="text-sm font-black tracking-[0.2em] text-blue-600">{n}</div><h3 className="mt-5 text-2xl font-extrabold">{t}</h3><p className="mt-3 leading-7 text-slate-600">{d}</p></div>)}</div></section>

      <section id="faq" className="bg-slate-50"><div className="mx-auto max-w-4xl px-5 py-20 lg:py-28"><div className="text-center"><Eyebrow>QUESTIONS, ANSWERED</Eyebrow><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Frequently asked questions.</h2></div><div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white">{faqs.map(([q,a], i) => <div key={q} className="border-b border-slate-100 last:border-0"><button className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left font-bold" onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown size={20} className={`shrink-0 text-blue-600 transition ${openFaq === i ? "rotate-180" : ""}`}/></button>{openFaq === i && <div className="px-6 pb-6 pr-14 leading-7 text-slate-600">{a}</div>}</div>)}</div></div></section>

      <section id="contact" className="px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-blue-700 px-7 py-14 text-white shadow-2xl shadow-blue-900/15 sm:px-12 lg:px-16 lg:py-16"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">READY TO TAKE THE NEXT STEP?</p><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Give your child the specialist care they deserve.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">Get clear, compassionate guidance from an experienced Consultant Child Specialist & Neonatologist in Multan.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={phone} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"><Phone size={18}/> Call 03142227878</a><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/15"><MessageCircle size={18}/> WhatsApp</a></div></div></div></section>

      <footer className="border-t border-slate-100 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8"><div><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white"><HeartPulse size={19}/></div><div><div className="font-extrabold">ARHAM CHILDCARE CLINIC</div><div className="text-xs font-semibold text-blue-600">Specialist Pediatric & Neonatal Care</div></div></div><p className="mt-5 max-w-md leading-7 text-slate-500">Evidence-based, compassionate care for newborns, children and adolescents in Model Town, Multan.</p></div><div><h4 className="font-extrabold">Contact</h4><div className="mt-4 space-y-3 text-sm text-slate-600"><a href={phone} className="block hover:text-blue-600">03142227878</a><a href={whatsapp} className="block hover:text-blue-600">WhatsApp</a><a href="tel:+923357236622" className="block hover:text-blue-600">Emergency: 03357236622</a><a href="mailto:nishtarian20@yahoo.com" className="block hover:text-blue-600">nishtarian20@yahoo.com</a></div></div><div><h4 className="font-extrabold">Location</h4><p className="mt-4 text-sm leading-6 text-slate-600">Near Pak Turk School,<br/>Multan Public School Road,<br/>Model Town, Multan</p><a href={maps} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600">Open in Maps <ArrowRight size={15}/></a></div></div><div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} Arham Childcare Clinic. All rights reserved. · Medical information on this website does not replace professional medical advice.</div></footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur lg:hidden"><div className="grid grid-cols-3 gap-2"><a href={phone} className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white"><Phone size={15}/> Call</a><a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 py-3 text-xs font-bold text-blue-700"><MessageCircle size={15}/> WhatsApp</a><a href="#contact" className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white"><CalendarCheck size={15}/> Book</a></div></div>
    </main>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <p className={`text-xs font-black tracking-[0.2em] ${light ? "text-blue-200" : "text-blue-600"}`}>{children}</p>; }
function Stat({ value, label }: { value: string; label: string }) { return <div className="px-3 text-center"><div className="text-2xl font-black text-blue-700 sm:text-3xl">{value}</div><div className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">{label}</div></div>; }
function Concern({ title, text }: { title: string; text: string }) { return <div className="rounded-3xl border border-slate-200 bg-white p-6"><div className="h-2 w-10 rounded-full bg-blue-600"/><h3 className="mt-5 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>; }
function Credential({ title, text }: { title: string; text: string }) { return <div className="rounded-2xl bg-slate-50 p-4"><div className="font-extrabold text-slate-900">{title}</div><div className="mt-1 text-sm text-slate-500">{text}</div></div>; }
