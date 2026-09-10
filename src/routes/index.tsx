import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Baby, BookOpen, CalendarCheck, Check, CheckCircle2, ChevronDown, Clock, HeartPulse, MapPin, MessageCircle, Menu, Phone, ShieldCheck, Stethoscope, Syringe, X } from "lucide-react";
import { useState } from "react";
import drAteeq from "@/assets/dr-ateeq.jpg.asset.json";
import neonatal from "@/assets/neonatal-care.jpg.asset.json";

const SITE = "https://drateeqpediatrics.com";
const TITLE = "Dr. Ateeq Ur Rehman | Child Specialist & Neonatologist, Multan";
const DESCRIPTION = "Consultant Child Specialist & Neonatologist in Model Town, Multan. FCPS Pediatrics. Newborn, neonatal and child care at Arham Childcare Clinic.";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Arham Childcare Clinic",
          url: SITE,
          telephone: "+92-314-2227878",
          email: "nishtarian20@yahoo.com",
          medicalSpecialty: ["Pediatric", "Neonatal"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Multan Public School Road, Near Pak Turk School, Model Town",
            addressLocality: "Multan",
            addressCountry: "PK",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:00", closes: "22:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
          ],
          physician: {
            "@type": "Physician",
            name: "Dr. Ateeq Ur Rehman",
            medicalSpecialty: ["Pediatric", "Neonatal"],
            description: "Consultant Child Specialist & Neonatologist, MBBS, FCPS (Pediatrics). PMDC Registration No. 74532-P.",
          },
        }),
      },
    ],
  }),
});

const phone = "tel:+923142227878";
const whatsapp = "https://wa.me/923142227878";
const maps = "https://maps.app.goo.gl/gZuh8u1VD2PDE2FX9?g_st=aw";

const neonatalGroup = {
  title: "Neonatal & Newborn Care",
  intro: "Specialist support for babies from their first examination through early follow-up.",
  benefit: "Reassurance and a clear plan during the early stages of life.",
  items: ["Comprehensive newborn examination", "Sick newborn assessment", "Neonatal jaundice assessment and management", "Feeding and breastfeeding problems", "Prematurity follow-up", "Low-birth-weight baby follow-up", "Neonatal infection assessment", "Newborn growth monitoring", "Developmental follow-up", "Counselling for newborn care and warning signs"],
};

const serviceGroups = [
  { icon: Stethoscope, title: "Pediatric Care", intro: "Assessment and treatment for common childhood illnesses and ongoing concerns.", benefit: "Understand the problem, what needs attention, and what to do next.", items: ["Comprehensive pediatric consultation", "Fever and infections", "Cough, cold and respiratory infections", "Wheezing and asthma", "Pneumonia", "Diarrhea and vomiting", "Constipation", "Abdominal pain and gastrointestinal problems", "Allergic conditions", "Skin problems in children", "Recurrent infections", "Anemia and nutritional deficiencies", "Seizures and febrile seizures", "Pediatric endocrine and metabolic problems", "Chronic and recurrent illnesses"] },
  { icon: HeartPulse, title: "Growth & Development", intro: "Track physical growth and developmental milestones with context and clarity.", benefit: "Identify concerns early and understand when further assessment is needed.", items: ["Weight and height assessment", "BMI assessment", "Growth chart interpretation", "Poor weight gain assessment", "Failure-to-thrive assessment", "Short stature assessment", "Developmental assessment", "Identification of developmental delays", "Guidance on physical and developmental milestones"] },
  { icon: Baby, title: "Nutrition & Feeding", intro: "Practical counselling for feeding, nutrition and healthy growth at every stage.", benefit: "Replace feeding confusion with practical, individualized guidance.", items: ["Breastfeeding counselling", "Complementary feeding and weaning counselling", "Infant and child nutrition assessment", "Nutritional deficiency assessment and management", "Dietary counselling", "Poor weight gain management", "Underweight and malnutrition management", "Childhood overweight and obesity counselling"] },
  { icon: ShieldCheck, title: "Preventive Child Healthcare", intro: "Support your child's long-term wellbeing, not only the illness of the day.", benefit: "Build healthier routines with monitoring, prevention and parent education.", items: ["Routine child health assessments", "Growth and developmental surveillance", "Nutritional counselling", "Parent education", "Preventive healthcare counselling", "Guidance regarding childhood illnesses and warning signs"] },
  { icon: Stethoscope, title: "In-Clinic Assessment & Support", intro: "Focused clinical assessment and supportive services available at the clinic.", benefit: "Get useful measurements and clinical assessment during the same visit.", items: ["Nebulization", "Growth assessment", "Pulse oximetry", "Developmental assessment", "Comprehensive pediatric clinical examination", "Newborn examination", "Nutritional assessment", "Weight, height and BMI assessment", "Growth chart assessment", "Feeding assessment", "Clinical assessment of respiratory illness", "Parent counselling and health education"] },
];

const concerns: [string, string][] = [
  ["Fever & infections", "Persistent fever, recurrent infections and common childhood illnesses."],
  ["Breathing concerns", "Cough, wheezing, asthma and other respiratory symptoms."],
  ["Growth concerns", "Poor weight gain, short stature, BMI and development questions."],
  ["Newborn worries", "Jaundice, feeding, prematurity and newborn warning signs."],
  ["Feeding difficulties", "Breastfeeding, weaning and nutritional concerns."],
  ["Digestive problems", "Vomiting, diarrhea, constipation and abdominal discomfort."],
  ["Allergies & skin", "Allergic conditions and common skin problems in children."],
  ["Development questions", "Milestones, developmental concerns and delays."],
];

const outcomes: [string, string][] = [
  ["Clear answers", "Understand what may be happening and what the next step should be."],
  ["Healthy growth", "Keep track of weight, height, nutrition and developmental milestones."],
  ["Appropriate treatment", "Receive evidence-based care with rational use of medicines and investigations."],
  ["Confident parenting", "Get practical counselling for feeding, prevention, warning signs and follow-up."],
];

const approach: [string, string][] = [
  ["Accurate assessment", "Start with symptoms, history and clinical findings."],
  ["Evidence-based care", "Use appropriate treatment guided by clinical judgement."],
  ["Clear parent counselling", "Know what matters, what to watch for and what comes next."],
  ["Child-friendly environment", "Keep the clinical experience calm and reassuring."],
  ["Growth & development", "Look beyond today's illness to longer-term health."],
  ["Rational treatment", "Avoid unnecessary tests and medicines when not needed."],
];

const resources: [string, string][] = [
  ["Child Fever Guide", "What parents should know when a child develops a fever."],
  ["Newborn Care Basics", "Practical guidance for feeding, jaundice and early warning signs."],
  ["Healthy Child Growth", "Understanding growth, nutrition and developmental milestones."],
];

const faqs: [string, string][] = [
  ["What does a pediatrician treat?", "Pediatric care covers newborns, infants, children and adolescents, including common childhood illnesses, respiratory symptoms, digestive concerns, allergies, growth concerns and developmental concerns."],
  ["Does Dr. Ateeq provide newborn and neonatal care?", "Yes. Dr. Ateeq Ur Rehman is a Consultant Child Specialist and Neonatologist and provides newborn and neonatal assessment and follow-up."],
  ["Does the clinic provide vaccination services?", "Vaccination services are not currently provided at Arham Childcare Clinic. Parents can still consult Dr. Ateeq about age-appropriate vaccination schedules, catch-up vaccination and vaccine-related counselling."],
  ["Can I consult about poor weight gain or nutrition?", "Yes. Growth, nutrition, weight, height, BMI and feeding assessment are part of the clinic's services."],
  ["Can I bring my child for cough, wheezing or breathing problems?", "Yes. Children can be clinically assessed for respiratory symptoms, wheezing, asthma and other respiratory illnesses."],
  ["How can I book an appointment?", "Call or WhatsApp 03142227878 to schedule your visit."],
  ["Where is Arham Childcare Clinic located?", "The clinic is near Pak Turk School on Multan Public School Road, Model Town, Multan."],
  ["What are the clinic timings?", "Monday to Saturday: 6:00 PM–10:00 PM. Sunday: 10:00 AM–2:00 PM."],
  ["Is emergency care available?", "For emergency-related assistance, call 03357236622. For serious or life-threatening situations, seek immediate emergency medical care rather than waiting for a clinic appointment."],
];

const reviews = [
  { name: "Tuba Khan", rating: 5, date: "2 months ago", text: "Dr Ateeq is highly professional, knowledgeable, and compassionate. He listened patiently to all my concerns, explained everything clearly, and provided excellent treatment. The clinic was well-managed, and the staff was courteous. I highly recommend Dr. Ateeq to anyone seeking quality medical care." },
  { name: "Rao Hamza", rating: 5, date: "2 months ago", text: "Dr. Ateeq Ur Rehman is an excellent child specialist. He is kind, patient, and listens carefully to parents' concerns. He explains the diagnosis and treatment clearly and provides the best care for children. His professionalism and friendly attitude make every visit comfortable. I highly recommend him to anyone looking for a trustworthy pediatrician." },
  { name: "Nadia Ahmad", rating: 5, date: "2 months ago", text: "I had a great experience with Dr.Ateeq, highly professional and compassionate child specialist. What I appreciated most is his calm attitude and the way he gives proper time to each patient without Rushing. His diagnosis is accurate and treatment is effective. It's an honor to learn from and work with such a senior. Highly recommended for paediatric care!!" },
  { name: "Aqsa Jan", rating: 5, date: "2 months ago", text: "Dr Ateeq is an exceptional paediatrician who treats children with genuine care, kindness and professionalism. He takes the time to explain every aspect of a child's condition clearly to parents, ensuring they feel informed, supported and reassured. His compassion, dedication and expertise make a real difference during challenging times. We are truly grateful for the outstanding care and attention he has provided. Highly recommended." },
];

const navLinks: [string, string][] = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Pediatric Services", "#services"],
  ["Neonatal Care", "#neonatal"],
  ["Parent Resources", "#resources"],
  ["Testimonials", "#testimonials"],
  ["FAQs", "#faq"],
  ["Contact", "#contact"],
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background pb-24 text-foreground lg:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-primary-foreground"><HeartPulse size={20} /></span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-semibold text-navy">Dr. Ateeq Ur Rehman</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Arham Childcare Clinic</span>
            </span>
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 text-[13px] font-medium text-muted-foreground xl:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-navy">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={phone} className="hidden items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-navy-soft sm:inline-flex">
              <CalendarCheck size={16} /> Book Appointment
            </a>
            <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy xl:hidden">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background xl:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-mist">{label}</a>
              ))}
              <a href={phone} onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-4 py-3 text-sm font-semibold text-primary-foreground">
                <CalendarCheck size={16} /> Book an Appointment
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-border bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 border-l-2 border-teal pl-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
              Consultant Child Specialist &amp; Neonatologist
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.06] text-navy sm:text-[3.4rem] lg:text-[4rem]">
              Expert Pediatric &amp; Neonatal Care You Can Trust
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-muted-foreground">
              Compassionate, evidence-based care for newborns, infants, children and adolescents — focused on accurate diagnosis, healthy growth, nutrition and development.
            </p>
            <p className="mt-6 font-display text-xl text-navy">Dr. Ateeq Ur Rehman</p>
            <p className="text-sm font-medium text-muted-foreground">MBBS, FCPS (Pediatrics) · Arham Childcare Clinic, Model Town, Multan</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phone} className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft">
                <CalendarCheck size={18} /> Book an Appointment
              </a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/20 bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal">
                <MessageCircle size={18} /> WhatsApp the Clinic
              </a>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck size={17} className="text-teal" /> Specialist care from the newborn nursery through adolescence.
            </p>
            <dl className="mt-8 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
              <Stat term="10+ Years" detail="Clinical experience" />
              <Stat term="MBBS · FCPS" detail="Pediatric medicine" />
              <Stat term="Specialist" detail="Child &amp; neonatal care" />
            </dl>
          </div>
          <figure className="relative m-0">
            <img
              src={neonatal.url}
              width={1536}
              height={1152}
              alt="A doctor in a white coat gently holding a calm, healthy swaddled newborn in a bright clinical room"
              className="aspect-[4/5] w-full rounded-md object-cover object-[70%_center] shadow-lg sm:aspect-[5/4] lg:aspect-[4/4.4]"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">Illustrative photograph. Not a patient of Dr. Ateeq Ur Rehman or Arham Childcare Clinic.</figcaption>
          </figure>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <Eyebrow>What parents really want</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Not just treatment. Confidence.</h2>
          </div>
          <p className="max-w-2xl text-[17px] leading-8 text-muted-foreground">
            When a child is unwell, parents need careful assessment, understandable answers, practical guidance and a clear plan for what happens next.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(([title, text], i) => (
            <article key={title} className="bg-card p-7">
              <div className="font-display text-sm text-teal">0{i + 1}</div>
              <h3 className="mt-6 font-display text-xl text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Concerns */}
      <section className="bg-navy text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow light>The concerns we help with</Eyebrow>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">You want to know what&apos;s actually wrong.</h2>
              <p className="mt-5 max-w-xl text-[17px] leading-8 text-sky">
                From illness and breathing problems to feeding, growth, newborn and developmental concerns, start with a careful specialist assessment.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {concerns.map(([title, text]) => (
                <div key={title} className="border-t border-white/15 pt-4">
                  <div className="flex items-center gap-2.5 font-semibold"><CheckCircle2 size={17} className="shrink-0 text-teal-soft" />{title}</div>
                  <p className="mt-2 text-sm leading-6 text-sky/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the doctor */}
      <section id="about" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.68fr_1.32fr] lg:items-start">
            <div>
              <img src={drAteeq.url} alt="Portrait of Dr. Ateeq Ur Rehman, Consultant Child Specialist and Neonatologist" loading="lazy" className="aspect-[4/4.8] w-full rounded-md border border-border object-cover object-top" />
              <div className="mt-4 rounded-md border border-border bg-mist p-4 text-sm text-muted-foreground">
                PMDC Registration No. <span className="font-semibold text-navy">74532-P</span>
              </div>
            </div>
            <div>
              <Eyebrow>About Dr. Ateeq</Eyebrow>
              <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Dr. Ateeq Ur Rehman</h2>
              <p className="mt-3 text-[15px] font-semibold text-teal">MBBS, FCPS (Pediatrics) · Consultant Child Specialist &amp; Neonatologist</p>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-muted-foreground">
                Dr. Ateeq Ur Rehman is a Consultant Child Specialist and Neonatologist with experience caring for newborns, infants, children and adolescents. He has worked as a Registrar at Mukhtar A Sheikh Hospital, Multan and Nishtar Hospital, Multan, gaining strong experience in tertiary pediatric and neonatal care.
              </p>
              <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                His mission is to provide evidence-based, compassionate child healthcare, focusing on accurate diagnosis, prevention, nutrition, growth and development. His approach emphasizes child-friendly care, parental counselling and avoiding unnecessary tests and medications while ensuring timely, guideline-based treatment.
              </p>
              <div className="mt-9 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                <Credential title="MBBS" text="Bachelor of Medicine & Bachelor of Surgery" />
                <Credential title="FCPS (Pediatrics)" text="Fellow of College of Physicians & Surgeons Pakistan" />
                <Credential title="Ex-Registrar" text="Mukhtar A Sheikh Hospital, Multan" />
                <Credential title="Ex-Registrar" text="Nishtar Hospital, Multan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neonatal */}
      <section id="neonatal" className="border-y border-border bg-teal-soft/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
            <div>
              <Eyebrow>Specialized neonatal care</Eyebrow>
              <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Dedicated care for your newborn.</h2>
              <p className="mt-5 max-w-xl text-[17px] leading-8 text-muted-foreground">{neonatalGroup.intro}</p>
              <p className="mt-4 flex items-start gap-2 text-sm font-semibold text-teal"><CheckCircle2 size={17} className="mt-0.5 shrink-0" />{neonatalGroup.benefit}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={phone} className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"><Phone size={17} /> Call the Clinic</a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/20 bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"><MessageCircle size={17} /> Ask on WhatsApp</a>
              </div>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {neonatalGroup.items.map((item) => (
                <li key={item} className="flex gap-2.5 bg-card p-5 text-sm leading-6 text-muted-foreground">
                  <Check size={15} className="mt-1 shrink-0 text-teal" /><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pediatric services */}
      <section id="services" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Eyebrow>Pediatric services</Eyebrow>
              <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">A complete approach to your child&apos;s healthcare.</h2>
              <p className="mt-5 text-[17px] leading-8 text-muted-foreground">Open a category to see the detailed services included at Arham Childcare Clinic.</p>
            </div>
            <a href={phone} className="inline-flex w-fit items-center gap-2 rounded-md border border-navy/20 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal">Talk to the Clinic <ArrowRight size={16} /></a>
          </div>
          <div className="mt-12 overflow-hidden rounded-md border border-border">
            {serviceGroups.map((service, index) => {
              const Icon = service.icon;
              const isOpen = expanded === index;
              return (
                <article key={service.title} className="border-b border-border last:border-b-0">
                  <h3>
                    <button type="button" onClick={() => setExpanded(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-start gap-5 bg-card p-6 text-left transition-colors hover:bg-mist sm:p-7">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist text-teal"><Icon size={21} /></span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-4">
                          <span className="font-display text-xl text-navy sm:text-2xl">{service.title}</span>
                          <ChevronDown size={20} className={`shrink-0 text-teal transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </span>
                        <span className="mt-2 block max-w-3xl text-sm leading-7 text-muted-foreground">{service.intro}</span>
                        <span className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-teal"><CheckCircle2 size={15} /> {service.benefit}</span>
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="border-t border-border bg-mist px-6 py-7 sm:px-7">
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {service.items.map((item) => (
                          <div key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground"><Check size={15} className="mt-1 shrink-0 text-teal" /><span>{item}</span></div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-border bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <Eyebrow>The care approach</Eyebrow>
              <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Care that looks beyond the symptom.</h2>
              <p className="mt-5 text-[17px] leading-8 text-muted-foreground">Every child is assessed as an individual, with attention to accurate diagnosis, prevention, nutrition, growth and development.</p>
              <a href={phone} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal">Discuss your child&apos;s concern <ArrowRight size={16} /></a>
            </div>
            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {approach.map(([title, text]) => (
                <div key={title} className="bg-card p-6">
                  <CheckCircle2 className="text-teal" size={19} />
                  <h3 className="mt-4 font-display text-lg text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic facilities */}
      <section id="clinic" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Clinic experience</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Comfortable for children. Practical for parents.</h2>
            <p className="mt-5 text-[17px] leading-8 text-muted-foreground">A calm, child-friendly environment helps families focus on understanding their child&apos;s health and next steps.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {["Comfortable waiting area", "Child-friendly consultation environment", "Air-conditioned clinic", "Parking availability", "Wheelchair access", "Nebulization facility", "Pulse oximetry", "Nearby pharmacy facilities"].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card p-6">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
                <p className="text-sm font-medium text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination + steps */}
      <section className="border-y border-border bg-mist">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="rounded-md border border-border bg-card p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Eyebrow>Vaccination guidance</Eyebrow>
                <h2 className="mt-4 font-display text-3xl text-navy">Need help understanding your child&apos;s vaccines?</h2>
              </div>
              <Syringe className="shrink-0 text-teal" size={26} />
            </div>
            <p className="mt-5 leading-8 text-muted-foreground">Vaccination services are not currently provided at the clinic. Parents can still consult Dr. Ateeq regarding age-appropriate vaccination schedules, catch-up vaccination and vaccine-related counselling.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">Ask about vaccination guidance <ArrowRight size={16} /></a>
          </div>
          <div className="rounded-md bg-navy p-8 text-primary-foreground">
            <Eyebrow light>How it works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl">Three simple steps to get started.</h2>
            <div className="mt-8 space-y-6">
              <Step number="01" title="Book your visit" text="Call or WhatsApp 03142227878." />
              <Step number="02" title="Get a comprehensive assessment" text="Your child's symptoms, history, growth and overall health are carefully reviewed." />
              <Step number="03" title="Leave with a clear plan" text="Receive appropriate treatment, counselling and follow-up recommendations." />
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Parent resources</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Helpful answers for everyday child-health questions.</h2>
            <p className="mt-5 text-[17px] leading-8 text-muted-foreground">Short guidance notes on the questions parents ask most often between visits.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {resources.map(([title, text], i) => (
              <article key={title} className="bg-card p-7">
                <BookOpen size={22} className="text-teal" />
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Guide 0{i + 1}</p>
                <h3 className="mt-2 font-display text-xl text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">Ask about this <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-y border-border bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Parent testimonials</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Trusted by parents across Multan.</h2>
            <p className="mt-5 text-[17px] leading-8 text-muted-foreground">Real Google reviews from parents and patients who have shared their experience with Dr. Ateeq.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-md border border-border bg-card p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-0.5 text-teal" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, i) => <span key={i} aria-hidden="true">★</span>)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Google review</span>
                </div>
                <p className="mt-5 text-[15px] leading-7 text-muted-foreground">“{review.text}”</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <p className="font-semibold text-navy">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <a href={maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-navy/20 bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal">See all Google reviews <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-24">
          <div>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Questions parents often ask.</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-md border border-border">
            {faqs.map(([q, a], i) => (
              <div key={q} className="border-b border-border last:border-b-0">
                <h3>
                  <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="flex w-full items-center justify-between gap-6 bg-card p-5 text-left transition-colors hover:bg-mist sm:p-6">
                    <span className="text-[15px] font-semibold text-navy sm:text-base">{q}</span>
                    <ChevronDown size={19} className={`shrink-0 text-teal transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                {openFaq === i && <p className="bg-mist px-5 pb-6 pt-1 text-sm leading-7 text-muted-foreground sm:px-6">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <Eyebrow light>Contact</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Give your child the specialist care they deserve.</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-8 text-sky">Whether you are concerned about an illness, newborn health, feeding, growth or development, start with a careful specialist assessment.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phone} className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-semibold text-navy"><Phone size={17} /> Call 03142227878</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-primary-foreground"><MessageCircle size={17} /> WhatsApp the Clinic</a>
            </div>
            <p className="mt-6 text-sm text-sky">Email: <a href="mailto:nishtarian20@yahoo.com" className="underline underline-offset-4">nishtarian20@yahoo.com</a></p>
          </div>
          <div className="rounded-md border border-white/15 p-7">
            <div className="flex items-center gap-3"><MapPin size={20} className="text-teal-soft" /><h3 className="font-display text-xl">Visit Arham Childcare Clinic</h3></div>
            <p className="mt-4 leading-7 text-sky">Near Pak Turk School,<br />Multan Public School Road,<br />Model Town, Multan</p>
            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-soft"><Clock size={14} /> Clinic hours</p>
              <p className="mt-2 leading-7">Monday–Saturday: <strong>6 PM–10 PM</strong><br />Sunday: <strong>10 AM–2 PM</strong></p>
            </div>
            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-soft">Emergency contact</p>
              <p className="mt-2 font-semibold">03357236622</p>
            </div>
            <a href={maps} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Get Directions <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-muted-foreground">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.9fr_.9fr]">
            <div>
              <p className="font-display text-lg text-navy">Dr. Ateeq Ur Rehman</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">Arham Childcare Clinic</p>
              <p className="mt-5 max-w-sm text-sm leading-7">Specialist pediatric and neonatal care in Multan with a focus on accurate assessment, healthy growth and clear guidance for parents.</p>
            </div>
            <div>
              <p className="font-semibold text-navy">Explore</p>
              <div className="mt-4 grid gap-2 text-sm">
                <a href="#about">About Dr. Ateeq</a>
                <a href="#services">Pediatric Services</a>
                <a href="#neonatal">Neonatal Care</a>
                <a href="#resources">Parent Resources</a>
                <a href="#faq">FAQs</a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-navy">Contact</p>
              <div className="mt-4 grid gap-2 text-sm">
                <a href={phone}>03142227878</a>
                <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
                <a href="mailto:nishtarian20@yahoo.com" className="break-all">nishtarian20@yahoo.com</a>
                <span>Emergency: 03357236622</span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-navy">Location</p>
              <p className="mt-4 text-sm leading-7">Near Pak Turk School<br />Multan Public School Road<br />Model Town, Multan</p>
              <a href={maps} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal">Get Directions <ArrowRight size={15} /></a>
            </div>
          </div>
          <p className="mt-10 border-t border-border pt-6 text-xs leading-6">© {new Date().getFullYear()} Arham Childcare Clinic. All rights reserved. Medical information on this website is for general education and does not replace professional medical assessment.</p>
        </div>
      </footer>

      {/* Mobile actions */}
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 gap-2 rounded-md border border-border bg-background/95 p-2 shadow-lg backdrop-blur lg:hidden">
        <a href={phone} className="flex items-center justify-center gap-1.5 rounded-md bg-navy py-3 text-xs font-semibold text-primary-foreground"><Phone size={15} /> Call</a>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 rounded-md bg-teal py-3 text-xs font-semibold text-accent-foreground"><MessageCircle size={15} /> WhatsApp</a>
        <a href={maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 rounded-md border border-border py-3 text-xs font-semibold text-navy"><MapPin size={15} /> Directions</a>
      </div>
    </main>
  );
}

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${light ? "text-teal-soft" : "text-teal"}`}>{children}</p>;
}
function Stat({ term, detail }: { term: string; detail: string }) {
  return <div className="bg-card px-5 py-4"><dt className="font-display text-lg text-navy">{term}</dt><dd className="mt-1 text-xs text-muted-foreground">{detail}</dd></div>;
}
function Credential({ title, text }: { title: string; text: string }) {
  return <div className="bg-card p-5"><p className="font-semibold text-navy">{title}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>;
}
function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return <div className="flex gap-4"><span className="font-display text-sm text-teal-soft">{number}</span><div><p className="font-semibold">{title}</p><p className="mt-1 text-sm leading-6 text-sky">{text}</p></div></div>;
}
