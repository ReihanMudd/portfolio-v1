"use client";

import { Folder, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading>Projects</SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-zinc-900/30 border border-white/5 hover:border-accent/30 p-8 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start mb-8">
              <Folder className="text-accent w-10 h-10 stroke-1 group-hover:scale-110 transition-transform duration-500" />
              <div className="flex gap-3">
                {/* Placeholder Links */}
                <ExternalLink className="w-5 h-5 text-zinc-500 hover:text-foreground transition-colors cursor-pointer" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-accent/70 mb-4 uppercase tracking-widest">
              {project.company}
            </p>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  className="text-xs font-mono bg-white/5 border-white/10 text-zinc-400 hover:text-foreground"
                >
                  #{tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
