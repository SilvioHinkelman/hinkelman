"use client";

import Description from "@/components/Home/Description";
import Profile from "@/components/Home/Profile";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="flex gap-10 flex-col items-center justify-between p-2 md:p-5">
      <Profile />
      <Description />
    </main>
  );
}
