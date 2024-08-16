import { Bungee, Nunito } from "next/font/google";

export const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
});

export const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
