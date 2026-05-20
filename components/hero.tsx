  export function Hero() {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-bold text-center">
        Hi, I'm <span className="primary-text">Miguel García</span>, also known as <span className="primary-text">Kaizzendev</span>.
        </h1>
        <div className="mt-12 flex flex-col md:flex-row items-center gap-28">
            <p className="text-lg paragraph text-center md:text-left max-w-2xl leading-relaxed">
            I'm a game developer and programmer based in Spain with a passion for creating immersive and engaging interactive experiences. 
            I specialize in Unity and C#, using them to bring gameplay ideas and systems to life.
            With a strong background in web development and QA, I'm currently transitioning further into game development. 
            My goal is to create unique and memorable experiences that connect with players around the world.
            </p>
            <img src="/logo.png" alt="Logo Image" className="w-72 md:w-96 rounded-full object-cover shadow-lg transition hover:scale-105 duration-300" />
        </div>
      </section>
      );
  }