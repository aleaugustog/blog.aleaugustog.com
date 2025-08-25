import Image from "next/image";

export default function Hero() {
  return (
    <div className="mb-16">
      <section className="px-4 py-24 bg-gray-100 dark:bg-slate-900">
        <h2 className="font-bold text-5xl text-center mb-4">
          Hello, my name is Alejandro González.
        </h2>
        <h3 className="text-4xl text-center font-light mb-12">
          I am a Full Stack Software Engineer.
        </h3>
        <div className="flex justify-center space-x-8">
          {[
            ["GitHub", "https://github.com/aleaugustog"],
            ["LinkedIn", "https://linkedin.com/in/aleaugustog"],
            ["Twitter", "https://x.com/aleaugustog"],
          ].map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="uppercase font-bold text-sm hover:text-gray-500"
            >
              {name}
            </a>
          ))}
        </div>
      </section>
      <Image
        alt="Alejandro González"
        src="/me-small.jpg"
        srcSet="/me-small.jpg, /me.jpg 2x"
        width={128}
        height={128}
        className="mx-auto -mt-16 rounded-full border-8 border-white dark:border-slate-800"
      />
    </div>
  );
}
