export default function About() {
    return (
 <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <p className="primary-text text-sm font-medium tracking-widest uppercase">
          Contact / About me 
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Let's <span className="primary-text">build</span> something meaningful <span className="primary-text">together</span>.
        </h2>

        <p className="paragraph mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
          I'm currently open to opportunities in <span className="secondary-text">game development</span>,
          Feel free to reach out through any of the platforms below.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        <a
          href="https://github.com/Kaizzendev"
          target="_blank"
          className="group rounded-3xl border border-zinc-200 card p-8 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
        >
          <p className="text-sm uppercase tracking-wide secondary-text">
            Development
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            GitHub
          </h3>

          <p className="paragraph mt-4 leading-relaxed">
            Explore my projects, experiments, and development workflow.
          </p>

          <p className="primary-text mt-8 text-sm font-medium">
            View Profile →
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/miguel-garc%C3%ADa-garc%C3%ADa-1a105420b/"
          target="_blank"
          className="group rounded-3xl border border-zinc-200 card p-8 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
        >
          <p className="text-sm uppercase tracking-wide secondary-text">
            Professional
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            LinkedIn
          </h3>

          <p className="paragraph mt-4 leading-relaxed">
            Connect with me professionally and follow my journey into game development.
          </p>

          <p className="primary-text mt-8 text-sm font-medium">
            Connect →
          </p>
        </a>

        <a
          href="https://kaizzendev.itch.io/"
          target="_blank"
          className="group rounded-3xl border border-zinc-200 card p-8 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
        >
          <p className="text-sm uppercase tracking-wide secondary-text">
            Games
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            itch.io
          </h3>

          <p className="paragraph mt-4 leading-relaxed">
            Play my games, prototypes, and interactive experiments.
          </p>

          <p className="primary-text mt-8 text-sm font-medium">
            Play Games →
          </p>
        </a>

      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row">

        <p>
          Based in Spain · Open to relocation
        </p>

        <a
          href="mailto:kaizzendev.business@gmail.com"
          className="transition hover:text-zinc-900"
        >
          kaizzendev.business@gmail.com
        </a>

      </div>

    </section>
    );
}