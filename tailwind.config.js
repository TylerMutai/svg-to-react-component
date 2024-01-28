/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,html,mdx}", // Note the addition of the `app` directory.
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": {
          1000: "var(--primary-color-1000)",
        },
      },
      boxShadow: {
        bs: "var(--box-shadow-bs)",
        bs3: "var(--box-shadow-bs3)",
        bs1: "var(--box-shadow-bs1)",
        bs2: "var(--box-shadow-bs2)",
      },
      backgroundImage: {
        gradient: "var(--background-image-gradient)",
        gradient1: "var(--background-image-gradient1)",
      },
    },
  },
  plugins: [],
};
