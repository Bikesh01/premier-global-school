import { ArrowRight, Mail, MapPin, Menu, Phone } from "lucide-react";
const programs = [
  {
    title: "+2 Hotel Management (General)",
    image: "/images/hotel-general.jpg",
    description:
      "Build a strong foundation in hospitality management, hotel operations, food production and guest services.",
    href: "/programs/hotel-management-general",
  },
  {
    title: "+2 Hotel Management (Combo)",
    image: "/images/hotel-combo.jpg",
    description:
      "Combine +2 Hotel Management (NEB) with a Diploma in Hotel Management (ETVA).",
    href: "/programs/hotel-management-combo",
  },
];

const testimonials = [
  {
    name: "Ansh Gurung",
    quote:
      "Its really good college. There are ACs in all the classes and teachers are really friendly. The teaching method is also really good.",
  },
  {
    name: "Mitra Pokhrel",
    quote:
      "Premier Global School in Itahari, Nepal, is known for its emphasis on quality education and modern teaching methods.",
  },
  {
    name: "Sagar Ojha",
    quote: "Looking for a better future? Come to Premier and be a Premierian.",
  },
  {
    name: "Anjana Karki",
    quote:
      "A good choice for those who are planning to build their career in hospitality management.",
  },
  {
    name: "Pratikshya Parajuli",
    quote: "Offers both quality education and a quality environment.",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academic Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty & Staff", href: "/faculty" },
  { label: "Student Life", href: "/student-life" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Contact bar */}
      <div className="bg-[#143c32] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 text-sm">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="mailto:info@premierglobalcollege.edu.np"
              className="flex items-center gap-2 hover:text-amber-300"
            >
              <Mail size={15} />
              info@premierglobalcollege.edu.np
            </a>
            <a
              href="tel:025588778"
              className="flex items-center gap-2 hover:text-amber-300"
            >
              <Phone size={15} />
              025-588778 / 9802737214
            </a>
          </div>

          <div className="flex gap-4 font-medium">
            <a href="/notices" className="hover:text-amber-300">
              Notice Board
            </a>
            <a href="/results" className="hover:text-amber-300">
              Result Check
            </a>
            <a href="/contact" className="hover:text-amber-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#143c32] text-xl font-bold text-white">
              P
            </div>
            <div>
              <div className="font-bold tracking-wide text-[#143c32]">
                PREMIER GLOBAL
              </div>
              <div className="text-xs tracking-[0.25em] text-slate-500">
                SCHOOL
              </div>
            </div>
          </a>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-emerald-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/admissions"
              className="rounded-lg bg-[#143c32] px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#f3f7f2]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-900">
              Learn Today. Lead Tomorrow.
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#143c32] sm:text-5xl lg:text-6xl">
              Welcome to Premier Global School
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Premier Global School, located in Itahari, provides +2 Hotel
              Management education designed to build practical skills,
              professional confidence and future career opportunities in
              hospitality.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-[#143c32] px-6 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Learn More <ArrowRight size={18} />
              </a>
              <a
                href="/programs"
                className="rounded-lg border border-[#143c32] px-6 py-4 font-semibold text-[#143c32] transition hover:bg-white"
              >
                Explore Programs
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Quality education · Practical learning · Career development
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/school-hero.jpg"
              alt="Students learning hospitality skills"
              className="h-[320px] w-full rounded-3xl object-cover shadow-xl sm:h-[430px]"
            />
            <div className="absolute -bottom-5 -left-3 rounded-xl bg-white p-5 shadow-lg sm:-left-6">
              <p className="text-2xl font-extrabold text-[#143c32]">
                10+ Years
              </p>
              <p className="text-sm text-slate-500">Educational experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-14 sm:grid-cols-3">
        {[
          { value: "10+", label: "Years of Experience" },
          { value: "200+", label: "Current Students" },
          { value: "2k+", label: "Passed-out Students" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-100 p-7 text-center shadow-sm"
          >
            <p className="text-4xl font-extrabold text-[#26704d]">
              {item.value}
            </p>
            <p className="mt-2 text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Programs */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">
              Academic Programs
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#143c32] sm:text-4xl">
              Programs Offered
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Creating pathways to success through our hotel management
              programs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#143c32]">
                    {program.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {program.description}
                  </p>
                  <a
                    href={program.href}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-600"
                  >
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">
            Student Experiences
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#143c32] sm:text-4xl">
            Students Say About Premier
          </h2>
          <p className="mt-4 text-slate-600">
            Hear about the learning experience from our students.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-100 p-7 shadow-sm"
            >
              <p className="text-3xl text-emerald-700">“</p>
              <p className="leading-7 text-slate-600">{item.quote}</p>
              <h3 className="mt-6 font-bold uppercase tracking-wide text-[#143c32]">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">Student</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact call to action */}
      <section className="bg-[#143c32] px-5 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">
              Shape Your Future with Premier
            </h2>
            <p className="mt-3 text-emerald-100">
              Explore our programs and contact our admissions team.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-lg bg-white px-6 py-4 font-bold text-[#143c32] hover:bg-emerald-50"
          >
            Contact Admissions <ArrowRight className="ml-2 inline" size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102e27] px-5 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-extrabold">PREMIER GLOBAL SCHOOL</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Shaping future hospitality leaders through education and practical
              learning.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Contact Us</h3>
            <p className="mt-4 flex gap-2 text-sm text-slate-300">
              <MapPin size={18} className="shrink-0" />
              Biratnagar Line, Itahari, Nepal
            </p>
            <a
              href="tel:9802737214"
              className="mt-3 flex gap-2 text-sm text-slate-300 hover:text-white"
            >
              <Phone size={18} /> 025-588778, 9802737214
            </a>
            <a
              href="mailto:info@premierglobalcollege.edu.np"
              className="mt-3 flex gap-2 break-all text-sm text-slate-300 hover:text-white"
            >
              <Mail size={18} /> info@premierglobalcollege.edu.np
            </a>
          </div>

          <div>
            <h3 className="font-bold">About School</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <a href="/about">Learn About Us</a>
              <a href="/facilities">Facilities</a>
              <a href="/programs">Programs Offered</a>
              <a href="/faculty">Faculty & Staff</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <a href="/results">Result Check</a>
              <a href="/notices">Notice Board</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact Us</a>
            </div>
            <div className="mt-5 flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <span className="text-xl font-bold">f</span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="0.5" fill="currentColor" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition hover:bg-white/20"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-sm text-slate-400">
          © 2026 Premier Global School. All rights reserved.
          <span className="mt-2 block">Designed by Bardali Creations.</span>
        </div>
      </footer>
    </main>
  );
}
