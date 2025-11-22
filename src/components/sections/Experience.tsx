"use client";

import { experience } from "@/lib/data";
import { Badge } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <SectionHeading>Experience</SectionHeading>

      <div className="space-y-16">
        {experience.map((job) => (
          <div
            key={job.id}
            className="group relative border-l border-zinc-800 pl-8 md:pl-12 transition-colors hover:border-accent/50"
          >
            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-zinc-800 rounded-full group-hover:bg-accent transition-colors duration-300" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <span className="font-mono text-sm text-zinc-500 mt-2 sm:mt-0">
                {job.period}
              </span>
            </div>

            <ul className="space-y-3 mb-6 text-zinc-400 text-lg font-light">
              {job.description.map((item, idx) => (
                <li
                  key={`${item.substring(0, 10)}-${idx}`}
                  className="flex items-start"
                >
                  <span className="mr-3 mt-2 w-1.5 h-1.5 bg-accent/50 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag} className="text-[10px] py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
