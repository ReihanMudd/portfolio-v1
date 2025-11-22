"use client";

import { personalInfo, skills } from "@/lib/data";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="text-lg text-zinc-400 leading-relaxed space-y-6 font-light">
          <p>{personalInfo.about}</p>
          <div className="pt-4">
            <p className="mb-4 text-foreground font-medium">
              Technologies I use:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.languages
                .concat(skills.frameworks)
                .slice(0, 15)
                .map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
            </div>
          </div>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Aesthetic Profile Representation */}
          <div className="relative w-full max-w-md aspect-square group">
            <div className="absolute inset-0 border-2 border-accent translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
              <Image
                src="/IMG_1105.JPG"
                alt="Reihan Mudajanto"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
