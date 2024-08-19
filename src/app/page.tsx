"use client";

import Description from "@/components/Home/Description";
import Profile from "@/components/Home/Profile";

export default function Home() {
  return (
    <main className="flex gap-10 flex-col items-center justify-between p-2 md:p-5">
      <Profile />
      <Description />
    </main>
  );
}
