const IG = "https://www.instagram.com/pocas_pulgas20/";
const WA = "https://wa.me/56975530779?text=" + encodeURIComponent("Hola! Quiero agendar una hora para mi mascota.");

const WhatsAppIcon = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.003 3Zm0 23.7c-1.95 0-3.86-.53-5.53-1.52l-.4-.24-3.96 1.02 1.06-3.86-.26-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16 21.9 26.7 16.003 26.7Zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" />
  </svg>
);

const servicios = [
  { icon: "🩺", t: "Consulta veterinaria", d: "Revisión completa de tu mascota, con tiempo para resolver tus dudas." },
  { icon: "💉", t: "Vacunación", d: "Plan de vacunas para cachorros y adultos, en mi casa o en la tuya." },
  { icon: "🛁", t: "Peluquería canina", d: "Corte, baño y cuidado de oídos y uñas, con cariño y paciencia." },
  { icon: "🚗", t: "Atención a domicilio", d: "Voy hasta tu casa en Lago Rapel, la zona de Peumo y Las Cabras, y Santiago." },
];

const incluye = [
  "Corte de pelo",
  "Limpieza de oído externo",
  "Corte de uñas",
  "Baño sanitario (solo si se requiere)",
  "Drenaje de glándula anal (solo si se requiere)",
];

const precios = [
  { t: "Perros pequeños", p: "$20.000", e: "🐩" },
  { t: "Perros medianos", p: "$25.000", e: "🐕" },
  { t: "Perros de raza grande", p: "$30.000", e: "🦮" },
];

const domicilio = [
  ["El Estero", "$4.000"],
  ["El Manzano", "$5.000"],
  ["El Carmen", "$5.000"],
  ["Llallauquén", "$5.000"],
  ["Las Cabras", "$6.000"],
  ["La Esperanza", "$7.000"],
  ["Peumo", "$8.000"],
  ["San Vicente", "$9.000"],
  ["Santiago", "Consultar"],
];

const Paw = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
    <ellipse cx="32" cy="42" rx="14" ry="11" />
    <ellipse cx="14" cy="26" rx="6" ry="8" />
    <ellipse cx="26" cy="15" rx="6" ry="8" />
    <ellipse cx="38" cy="15" rx="6" ry="8" />
    <ellipse cx="50" cy="26" rx="6" ry="8" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#2E1065]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap');
        .display { font-family: 'Baloo 2', 'Nunito', sans-serif; }
        a:focus-visible, button:focus-visible { outline: 3px solid #EC4899; outline-offset: 3px; }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      `}</style>

      {/* Barra superior */}
      <div className="bg-[#5B21B6] text-white text-sm py-2 px-4 text-center">
        Atención en Lago Rapel y a domicilio. Escríbeme por{" "}
        <a href={WA} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-pink-200">
          WhatsApp
        </a>{" "}
        o{" "}
        <a href={IG} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-pink-200">
          Instagram
        </a>
      </div>

      {/* Navegación */}
      <nav className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Paw className="w-8 h-8 text-pink-500" />
            <span className="display text-2xl font-extrabold text-[#4C1D95] leading-none">Pocas Pulgas</span>
          </a>
          <div className="hidden md:flex gap-7 text-sm font-bold text-purple-900">
            <a href="#servicios" className="hover:text-pink-500 transition">Servicios</a>
            <a href="#peluqueria" className="hover:text-pink-500 transition">Peluquería</a>
            <a href="#domicilio" className="hover:text-pink-500 transition">Domicilio</a>
            <a href="#donde" className="hover:text-pink-500 transition">Dónde estoy</a>
          </div>
          <a href={WA} target="_blank" rel="noreferrer" className="bg-pink-500 text-white px-5 py-2 rounded-full font-bold hover:bg-pink-600 transition shadow-md shadow-pink-200 flex items-center gap-2">
            <WhatsAppIcon className="w-5 h-5" />
            Agendar hora
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#EDE3FF] to-[#FAF5FF]">
        <Paw className="absolute -top-4 left-6 w-24 h-24 text-purple-200 rotate-[-20deg]" />
        <Paw className="absolute bottom-6 left-1/3 w-16 h-16 text-pink-200 rotate-[15deg]" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="display font-extrabold leading-[0.95] text-[#4C1D95] text-6xl md:text-7xl">
              Pocas Pulgas
              <span className="block mt-3">
                <span className="inline-block bg-pink-500 text-white rounded-[2rem] px-6 py-1 -rotate-2 shadow-lg shadow-pink-200 text-4xl md:text-5xl">
                  veterinaria
                </span>
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-purple-900/80 max-w-md">
              Cuidado, higiene y amor para tu mejor amigo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="bg-[#16A34A] text-white px-7 py-3 rounded-full font-bold hover:bg-[#15803D] shadow-lg shadow-green-200 transition flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="bg-[#5B21B6] text-white px-7 py-3 rounded-full font-bold hover:bg-[#4C1D95] shadow-lg shadow-purple-200 transition">
                Agendar por Instagram
              </a>
              <a href="#peluqueria" className="bg-white border-2 border-[#5B21B6] text-[#5B21B6] px-7 py-3 rounded-full font-bold hover:bg-purple-50 transition">
                Ver precios de peluquería
              </a>
            </div>
          </div>

          {/* Reemplaza este bloque por una foto tuya: <img src="/foto.jpg" className="rounded-[3rem] ..." /> */}
          <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-gradient-to-br from-pink-300 to-purple-400 shadow-2xl shadow-purple-300" />
            <div className="absolute inset-0 flex items-center justify-center text-[9rem] md:text-[12rem]">🐶</div>
            <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-4 py-2 shadow-lg display font-bold text-[#5B21B6] -rotate-6">Tu peludito lo merece</div>
          </div>
        </div>
      </header>

      {/* Servicios */}
      <section id="servicios" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="display text-4xl md:text-5xl font-extrabold text-[#4C1D95] text-center">Lo que tu mascota necesita</h2>
        <p className="text-center text-purple-900/70 mt-3 mb-12">Atención cercana, sin filas y sin apuro.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <div
              key={s.t}
              className={`p-7 bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 transition ${
                i % 2 ? "rounded-[2rem_2rem_0.75rem_2rem]" : "rounded-[2rem_0.75rem_2rem_2rem]"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-3xl mb-4">{s.icon}</div>
              <h3 className="display text-xl font-bold text-[#4C1D95]">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-purple-900/75">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Peluquería */}
      <section id="peluqueria" className="bg-[#EDE3FF] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="display text-4xl md:text-5xl font-extrabold text-[#4C1D95] text-center">Peluquería canina</h2>
          <p className="text-center text-purple-900/70 mt-3 mb-12">Cuidado, higiene y amor para tu mejor amigo.</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg shadow-purple-200/60">
              <h3 className="display text-2xl font-bold text-[#5B21B6] mb-5">Incluye</h3>
              <ul className="space-y-3">
                {incluye.map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center">
                      <Paw className="w-4 h-4" />
                    </span>
                    <span className="font-semibold">{x}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm bg-pink-50 text-pink-800 rounded-2xl px-4 py-3">
                Cada peluquería puede tener un cargo adicional según la condición de cada paciente.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg shadow-purple-200/60">
              <h3 className="display text-2xl font-bold text-[#5B21B6] mb-5">Precios desde</h3>
              <div className="space-y-4">
                {precios.map((p) => (
                  <div key={p.t} className="flex items-center justify-between gap-4 rounded-3xl bg-[#FAF5FF] px-5 py-4">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{p.e}</span>
                      <span className="display text-lg font-bold">{p.t}</span>
                    </div>
                    <span className="display text-2xl font-extrabold text-white bg-pink-500 rounded-full px-5 py-1">{p.p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domicilio */}
      <section id="domicilio" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="display text-4xl md:text-5xl font-extrabold text-[#4C1D95]">Voy a tu casa</h2>
            <p className="mt-4 text-purple-900/80 leading-relaxed">
              Tu mascota se queda tranquila en su propio hogar. El valor de la visita depende de la localidad y se suma a la atención.
            </p>
            <p className="mt-3 text-sm text-purple-900/60">Para horas en Santiago, escríbeme y coordinamos.</p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
            {domicilio.map(([lugar, precio]) => (
              <div key={lugar} className="flex items-center justify-between bg-white rounded-2xl border border-purple-100 px-5 py-3">
                <span className="font-semibold">📍 {lugar}</span>
                <span className="display font-bold text-pink-600">{precio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dónde estoy */}
      <section id="donde" className="px-4 pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] text-white rounded-[3rem] p-10 md:p-14 text-center relative overflow-hidden">
          <Paw className="absolute -right-6 -bottom-6 w-40 h-40 text-white/10 rotate-[20deg]" />
          <h2 className="display text-4xl md:text-5xl font-extrabold">¡Agenda ahora!</h2>
          <p className="mt-4 text-lg text-purple-100">
            Voy a tu domicilio en Lago Rapel, Peumo y Las Cabras. Escríbeme por WhatsApp o Instagram y coordinamos la hora.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className="bg-[#16A34A] hover:bg-[#22C55E] transition px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-purple-900/30 flex items-center gap-2">
              <WhatsAppIcon className="w-6 h-6" />
              Escríbeme por WhatsApp
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="bg-pink-500 hover:bg-pink-400 transition px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-purple-900/30">
              Instagram @pocas_pulgas20
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-purple-100 py-8 text-center text-sm text-purple-900/70">
        <p className="display text-lg font-bold text-[#4C1D95]">Pocas Pulgas</p>
        <p>Veterinaria en Lago Rapel. Tu peludito lo merece.</p>
        <p className="mt-1">WhatsApp: +56 9 7553 0779</p>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-xl shadow-green-900/30 hover:bg-[#15803D] hover:scale-105 transition"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
