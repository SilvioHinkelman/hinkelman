"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { ArrayHardSkills, HardSkill } from "@/constants/header";

export default function HardSkills() {
  return (
    <div className="w-full max-w-[1620px] text-xl md:text-2xl">
      <h1 className="text-xl md:text-4xl font-bold">Hard skills</h1>
      <div className="flex gap-4 mt-2 flex-wrap">
        {ArrayHardSkills?.map((skill: HardSkill) => {
          return (
            <Tooltip key={skill.key}>
              <TooltipTrigger asChild>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={skill.key * 100}
                  className="bg-gray-300 p-2 rounded-md flex items-center justify-center min-w-10 min-h-10 group dark:bg-gray-900"
                >
                  <div className="group-hover:animate-bounce">
                    {skill?.icon}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{skill?.text}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
