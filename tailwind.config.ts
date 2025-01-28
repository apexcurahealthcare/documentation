import { heroui } from "@heroui/react";
import plugin from "tailwindcss/plugin";
import type { PluginAPI, Config } from "tailwindcss/types/config";

export default {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      boxShadow: {
        projectCard: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      }
    },
  },
  darkMode: "class",
  plugins: [
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: PluginAPI["addUtilities"];
    }) {
      addUtilities({
        ".d-center": {
          "@apply flex flex-col items-center justify-center": {},
        },
      });
    }),
    heroui({
      themes: {
        light: {
          colors: {
            background: "#fff",
            primary: "#3E4BBF"
          },
        },
      },
    }),
  ],
} satisfies Config;
