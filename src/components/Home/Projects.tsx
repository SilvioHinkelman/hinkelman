"use client";

import { projects } from "@/constants/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <div className="w-full max-w-[1620px]">
      <h1 className="text-xl md:text-4xl font-bold mb-8">Projetos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.key}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-6 flex flex-col h-full">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold rounded-full">
                  {project.company}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-colors duration-200"
                  >
                    <Github size={16} />
                    Código
                  </a>
                )}
              </div>
            </div>

            <div className="absolute inset-0 border border-blue-500/0 rounded-xl group-hover:border-blue-500/50 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
