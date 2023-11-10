/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          color: "#0D354E",
          light: {
            1: "#2595DA",
            2: "#51AAE1",
            3: "#7CBFE9",
            4: "#A8D4F0",
            5: "#D3EAF8",
          },
          dark: {
            1: "#1E77AE",
            2: "#165983",
            3: "#0F3B57",
            4: "#0B2D41",
            5: "#040F16",
          },
        },
        secondary: {
          color: "#CCD1D7",
          light: {
            1: "#707E8F",
            2: "#8D98A5",
            3: "#A9B2BC",
            4: "#C6CBD2",
            5: "#E2E5E9",
          },
          dark: {
            1: "#5A6572",
            2: "#434C56",
            3: "#2D3239",
            4: "#22262B",
            5: "#0B0D0E",
          },
        },
        accent: {
          color: "#BE2D3E",
          light: {
            1: "#CF3043",
            2: "#D85A69",
            3: "#E2838E",
            4: "#ECACB4",
            5: "#F5D6D9",
          },
          dark: {
            1: "#A52736",
            2: "#7C1D28",
            3: "#53131B",
            4: "#3E0F14",
            5: "#150507",
          },
        },
        text: {
          color: "#0D0D0D",
          light: {
            1: "#7E7E81",
            2: "#98989A",
            3: "#B2B2B3",
            4: "#CBCBCD",
            5: "#E5E5E6",
          },
          dark: {
            1: "#656567",
            2: "#4C4C4D",
            3: "#323234",
            4: "#262627",
            5: "#0D0D0D",
          },
        },
        surface: {
          color: "#F2F2F2",
          light: {
            1: "#7E7E81",
            2: "#98989A",
            3: "#B2B2B3",
            4: "#CBCBCD",
            5: "#E5E5E6",
          },
          dark: {
            1: "#656567",
            2: "#4C4C4D",
            3: "#323234",
            4: "#262627",
            5: "#0D0D0D",
          },
        },
        success: {
          color: "#2ecc71",
          light: {
            1: "#2fd072",
            2: "#59d98e",
            3: "#82e3aa",
            4: "#acecc7",
            5: "#d5f6e3",
          },
          dark: {
            1: "#26a65b",
            2: "#1c7d44",
            3: "#13532e",
            4: "#0e3e22",
            5: "#05150b",
          },
        },
        error: {
          color: "#E74C3C",
          light: {
            1: "#e3301c",
            2: "#e95949",
            3: "#ee8377",
            4: "#f4aca4",
            5: "#f9d6d2",
          },
          dark: {
            1: "#b62616",
            2: "#881d11",
            3: "#5b130b",
            4: "#440e08",
            5: "#170503",
          },
        },
        warning: {
          color: "#E67E22",
          light: {
            1: "#e67919",
            2: "#eb9447",
            3: "#f0ae75",
            4: "#f5c9a3",
            5: "#fae4d1",
          },
          dark: {
            1: "#b86114",
            2: "#8a480f",
            3: "#5c300a",
            4: "#452408",
            5: "#170c03",
          },
        },
      },
    },
  },
  plugins: [],
};
