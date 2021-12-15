module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        geo: ["eka"]
      },
      boxShadow: {
        'reverse': '0px 30px 30px 30px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
