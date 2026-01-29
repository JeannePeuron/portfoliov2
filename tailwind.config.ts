import withMT from "@material-tailwind/react/utils/withMT";
import type { Config } from "tailwindcss";

const config: Config = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

export default config;
