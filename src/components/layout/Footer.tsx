import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-zinc-500 text-sm bg-background relative z-10">
      <div className="flex justify-center gap-8 mb-8">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors hover:scale-110 duration-300"
        >
          <Github size={22} strokeWidth={1.5} />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors hover:scale-110 duration-300"
        >
          <Linkedin size={22} strokeWidth={1.5} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:text-accent transition-colors hover:scale-110 duration-300"
        >
          <Mail size={22} strokeWidth={1.5} />
        </a>
      </div>
      <div className="flex flex-col gap-2 opacity-60">
        <p className="font-light">Designed & Built by {personalInfo.name}</p>
        <p className="text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
