"use client";

import { personalInfo } from "@/lib/data";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 text-center max-w-3xl mx-auto px-6">
      <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter">
        Let's Work Together
      </h2>
      <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
        I'm always open to new opportunities and interesting projects. Have an
        idea? Let's turn it into reality.
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-background bg-foreground hover:bg-accent transition-all duration-300 rounded-sm hover:scale-105"
      >
        Say Hello
      </a>
    </section>
  );
};
