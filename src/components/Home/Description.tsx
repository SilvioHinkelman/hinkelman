"use client";

import { bungee } from "@/app/fonts";
import { EmployeerType, Jobs, Tasks } from "@/constants/header";
import { date, dateDiference } from "@/utils/date";

export default function Description() {
  return (
    <div className="w-full max-w-[1620px] text-xl md:text-2xl">
      <h1 className={`${bungee.className}  text-2xl md:text-4xl`}>
        Experiências
      </h1>
      <div className="gap-7 mt-4 flex flex-col">
        {Jobs.map((job: EmployeerType) => {
          return (
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay={500}
              className="dark:bg-gray-900 bg-gray-300 p-2 md:p-5 rounded-lg shadow-sm"
              key={job.key}
            >
              <h1 className="font-extrabold text-xl md:text-3xl">{job.name}</h1>
              <h1>{job.position}</h1>
              <h1>Por: {dateDiference(job.enterDate, job.finishDate)}</h1>
              <h1>De: {date(job.enterDate, job.finishDate)}</h1>

              <h1 className="font-extrabold text-xl md:text-3xl mt-3">
                Responsabilidades
              </h1>
              {job.tasks.map((task: Tasks) => {
                return (
                  <h1 key={task.key} className="mt-2">
                    -{task?.text}
                  </h1>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
