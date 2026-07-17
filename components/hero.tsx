  import Link from "next/link";

  export function Hero() {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-bold text-center">
        Hi, I'm <span className="primary-text">Miguel García.</span>
        </h1>
        <div className="my-10">
          <h1 className="text-xl font-bold text-center mt-6">
            <span className="secondary-text">Gameplay Programmer | Software Engineer</span>
          </h1>
          <h1 className="text-m font-bold text-center">
            <span className="paragraph italic">Building clean, maintainable gameplay systems with Unity and C#</span>
          </h1> 
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center gap-28">
            <p className="text-lg paragraph text-center md:text-left max-w-2xl leading-relaxed">
             Software Engineer with 3 years of professional experience, currently focused on Gameplay Programming. 
             Passionate about designing gameplay systems that are clean, maintainable and fun to build.
            </p>
            <img src="/perfil.jpg" alt="Logo Image" className="w-52 md:w-76 rounded-full object-cover shadow-lg transition hover:scale-105 duration-300" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-18 mt-12 justify-center">
          <Link href="/portfolio" className="primary-text text-xl transition hover:scale-105 duration-300"> View projects</Link>
          <span className="secondary-text">|</span>
          <Link href="/about" className="primary-text text-xl transition hover:scale-105 duration-300"> Contact me!</Link>
        </div>
      </section>
      );
  }