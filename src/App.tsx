import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
} from 'lucide-react';
import {
  HeroIllustration,
  AboutIllustration,
  CytometryFigure,
  HeatmapFigure,
  TCellFigure,
  TeachingFigure,
  OutreachFigure,
  DnaFigure,
} from '@/components/Illustrations';

const expertise = [
  {
    figure: TCellFigure,
    title: 'Inmunología neonatal & materno-infantil',
    short: 'Desarrollo del sistema inmunitario en las primeras etapas de la vida.',
    tags: ['Neonatal', 'Materno-infantil', 'Células T'],
  },
  {
    figure: CytometryFigure,
    title: 'Citometría de flujo',
    short: 'Poblaciones y respuestas celulares: diseño de paneles e interpretación.',
    tags: ['FACS', 'Inmunofenotipificación'],
  },
  {
    figure: HeatmapFigure,
    title: 'Transcriptómica & RNA-seq',
    short: 'Procesamiento y análisis de datos transcriptómicos para mecanismos inmunológicos.',
    tags: ['RNA-seq', 'DESeq2', 'Expresión diferencial'],
  },
  {
    figure: DnaFigure,
    title: 'R & Bioconductor',
    short: 'Flujos de trabajo reproducibles para datos ómicos y visualización.',
    tags: ['R', 'Bioconductor', 'Reproducibilidad'],
  },
];

const skills = [
  { label: 'Inmunología celular', level: 95 },
  { label: 'Citometría de flujo', level: 90 },
  { label: 'RNA-seq & transcriptómica', level: 88 },
  { label: 'R & Bioconductor', level: 92 },
  { label: 'Análisis de datos ómicos', level: 85 },
  { label: 'Docencia & divulgación', level: 80 },
];

const stats = [
  { value: '2', label: 'Disciplinas integradas' },
  { value: 'R', label: 'Lenguaje principal' },
  { value: '∞', label: 'Preguntas biológicas' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const d = el.dataset.delay ? Number(el.dataset.delay) : 0;
            el.style.animationDelay = `${d}ms`;
            el.classList.add('is-visible');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setW(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return w;
}

export default function App() {
  const rootRef = useReveal();
  const progress = useScrollProgress();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-hidden">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* ===== Hero ===== */}
      <header className="relative min-h-screen flex flex-col justify-center grain overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-teal-200/40 blur-3xl drift-anim" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-emerald-100/60 blur-3xl drift-anim" style={{ animationDirection: 'alternate-reverse' }} />

        <nav className="relative z-10 flex items-center justify-between px-6 md:px-14 py-6">
          <span className="font-serif text-xl font-semibold tracking-tight text-teal-900">
            LC<span className="text-teal-600">.</span>
          </span>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-teal-900/60">
            <a href="#sobre-mi" className="hover:text-teal-700 transition-colors">Perfil</a>
            <a href="#areas" className="hover:text-teal-700 transition-colors">Áreas</a>
            <a href="#habilidades" className="hover:text-teal-700 transition-colors">Habilidades</a>
            <a href="#contacto" className="hover:text-teal-700 transition-colors">Contacto</a>
          </div>
        </nav>

        <div className="relative z-10 px-6 md:px-14 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-teal-800 ring-1 ring-teal-200">
              Investigadora · Inmunología & Bioinformática
            </div>

            <h1 className="reveal font-serif font-semibold leading-[1.05] tracking-tight mt-7 text-[3rem] sm:text-7xl md:text-[5.5rem] text-teal-950" data-delay="80">
              Linda
              <br />
              <span className="text-gradient">Calanis</span>
            </h1>

            <p className="reveal mt-7 max-w-lg text-lg leading-relaxed text-teal-900/75 font-light" data-delay="160">
              Inmunología neonatal y bioinformática. Integro evidencia experimental
              y computacional para comprender el sistema inmunitario en las primeras
              etapas de la vida.
            </p>

            <div className="reveal mt-9 flex flex-wrap items-center gap-4" data-delay="240">
              <a
                href="#sobre-mi"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-800 hover:bg-teal-900 px-6 py-3 text-sm font-medium transition-all hover:shadow-lg hover:shadow-teal-800/20"
                style={{ color: 'var(--cream)' }}
              >
                Conocer mi trabajo
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur ring-1 ring-teal-200 hover:ring-teal-400 px-6 py-3 text-sm font-medium text-teal-900 transition-all"
              >
                Contacto
              </a>
            </div>

            {/* mini stats */}
            <div className="reveal mt-12 flex gap-10" data-delay="320">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-teal-800">{s.value}</div>
                  <div className="text-xs text-teal-900/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal hidden md:flex justify-center" data-delay="200">
            <HeroIllustration className="w-full max-w-md drop-shadow-xl" />
          </div>
        </div>

        <div className="reveal absolute bottom-8 left-1/2 -translate-x-1/2 text-teal-900/40 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </header>

      {/* ===== Sobre mí ===== */}
      <section id="sobre-mi" className="relative px-6 md:px-14 py-24 md:py-32 bg-[var(--sand)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 reveal flex justify-center" data-delay="0">
            <AboutIllustration className="w-full max-w-sm" />
          </div>
          <div className="md:col-span-7">
            <p className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-teal-700">Sobre mí</p>
            <h2 className="reveal font-serif text-4xl md:text-5xl mt-3 leading-tight text-teal-950" data-delay="60">
              Lo experimental y lo computacional, en un mismo lugar
            </h2>
            <div className="reveal mt-6 space-y-4 text-lg leading-relaxed text-teal-900/80 font-light" data-delay="120">
              <p>
                Investigadora en inmunología y bioinformática. Mi foco: el desarrollo
                del sistema inmunitario en la etapa neonatal y materno-infantil.
              </p>
              <p>
                Combino trabajo de laboratorio —citometría de flujo, poblaciones
                celulares, células T— con análisis de datos transcriptómicos y RNA-seq
                usando R y Bioconductor.
              </p>
              <p>
                Mi objetivo: integrar evidencia experimental y computacional para
                responder preguntas biológicas con una ciencia más accesible,
                reproducible y colaborativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Áreas de experiencia (tarjetas interactivas) ===== */}
      <section id="areas" className="relative px-6 md:px-14 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-teal-700">Áreas de experiencia</p>
            <h2 className="reveal font-serif text-4xl md:text-5xl mt-3 leading-tight text-teal-950" data-delay="60">
              Donde la biología encuentra los datos
            </h2>
            <p className="reveal mt-4 text-teal-900/60 font-light" data-delay="100">
              Pasa el cursor sobre cada tarjeta para explorar.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {expertise.map((item, i) => (
              <article
                key={item.title}
                className="reveal group relative rounded-3xl bg-white/70 backdrop-blur ring-1 ring-teal-900/5 p-7 hover:bg-white hover:shadow-2xl hover:shadow-teal-900/8 hover:-translate-y-1 transition-all duration-400 cursor-default overflow-hidden"
                data-delay={i * 80}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl text-teal-950 leading-snug">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-teal-900/65 font-light">{item.short}</p>
                  </div>
                  <div
                    className="shrink-0 w-28 h-28 rounded-2xl bg-teal-50/60 ring-1 ring-teal-100 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-teal-50 group-hover:ring-teal-300"
                    style={{ opacity: activeCard === i ? 1 : 0.7 }}
                  >
                    <item.figure className="w-full h-full p-1.5 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100 transition-all group-hover:bg-teal-800 group-hover:text-cream group-hover:ring-teal-700" style={{ color: undefined }}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Habilidades (barras animadas) ===== */}
      <section id="habilidades" className="relative px-6 md:px-14 py-24 md:py-32 bg-[var(--sand)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-teal-700">Habilidades clave</p>
            <h2 className="reveal font-serif text-4xl md:text-5xl mt-3 leading-tight text-teal-950" data-delay="60">
              Herramientas que uso a diario
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {skills.map((s, i) => (
              <div key={s.label} className="reveal" data-delay={i * 60}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-teal-900">{s.label}</span>
                  <span className="text-xs font-mono text-teal-700/60">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-teal-900/8 overflow-hidden">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-teal-800 to-teal-500"
                    style={{ width: `${s.level}%`, animationDelay: `${i * 80}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Docencia & divulgación ===== */}
      <section className="relative px-6 md:px-14 py-24 md:py-32 bg-teal-950 overflow-hidden" style={{ color: 'var(--cream)' }}>
        <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-teal-700/30 blur-3xl float-slow" />
        <div className="pointer-events-none absolute bottom-10 left-10 w-64 h-64 rounded-full bg-emerald-600/20 blur-3xl float-slow" style={{ animationDelay: '3s' }} />

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="reveal" data-delay="0">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 w-fit">
              <TeachingFigure className="w-48" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mt-6 leading-tight">Docencia</h2>
            <p className="mt-4 leading-relaxed font-light" style={{ color: 'rgba(250,248,243,0.75)' }}>
              Enseño bioinformática, programación y análisis de datos con R. Mi enfoque:
              conceptos científicos y computacionales de forma accesible y práctica, para
              estudiantes que se inician en ciencia y tecnología.
            </p>
          </div>

          <div className="reveal" data-delay="120">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 w-fit">
              <OutreachFigure className="w-48" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mt-6 leading-tight">Divulgación científica</h2>
            <p className="mt-4 leading-relaxed font-light" style={{ color: 'rgba(250,248,243,0.75)' }}>
              Participo en iniciativas de difusión del conocimiento en inmunología, para
              acercar la ciencia a diferentes públicos y hacerla más comprensible.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Objetivo ===== */}
      <section className="relative px-6 md:px-14 py-24 md:py-32 bg-[var(--sand)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal flex justify-center mb-6" data-delay="0">
            <DnaFigure className="w-20 h-32" />
          </div>
          <p className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-teal-700" data-delay="60">Mi objetivo</p>
          <p className="reveal font-serif text-2xl md:text-4xl leading-snug mt-5 text-teal-950" data-delay="120">
            Seguir desarrollándome en la intersección entre inmunología experimental,
            bioinformática y análisis de datos —integrando evidencia para responder
            preguntas biológicas y contribuir a una ciencia más{' '}
            <span className="text-gradient font-semibold">accesible, reproducible y colaborativa</span>.
          </p>
        </div>
      </section>

      {/* ===== Contacto ===== */}
      <footer id="contacto" className="relative px-6 md:px-14 py-20 bg-teal-950" style={{ color: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-teal-400">Hablemos</p>
            <h2 className="reveal font-serif text-3xl md:text-4xl mt-3 leading-tight" data-delay="60">
              Linda Calanis
            </h2>
            <p className="reveal mt-2 font-light" data-delay="120" style={{ color: 'rgba(250,248,243,0.65)' }}>
              Inmunología & Bioinformática
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:linda.calanis@email.com" className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 px-5 py-3 text-sm font-medium transition-all" data-delay="100">
              <Mail className="w-4 h-4 text-teal-300" /> Email
            </a>
            <a href="#" className="reveal inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition-all" data-delay="160">
              <Linkedin className="w-5 h-5 text-teal-300" />
            </a>
            <a href="#" className="reveal inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition-all" data-delay="220">
              <Github className="w-5 h-5 text-teal-300" />
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-14 pt-6 border-t border-white/10 flex items-center justify-between text-xs" style={{ color: 'rgba(250,248,243,0.4)' }}>
          <span>© {new Date().getFullYear()} Linda Calanis</span>
          <span>Ciencia · Reproducible · Colaborativa</span>
        </div>
      </footer>
    </div>
  );
}
