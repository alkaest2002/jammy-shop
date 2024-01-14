/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  safelist: [
    "bg-slate-200",
    "bg-slate-300",
    "bg-red-200",
    "bg-green-200",
    "rounded-full",
    "px-3",
    "hidden",
    "md:block",
    "table-auto",
    "animate-bounce",
    "animate-pulse"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

