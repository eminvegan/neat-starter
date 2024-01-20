const plugin = require("tailwindcss/plugin");

const FlipCard = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('xtendui/tailwind.preset'),
  ],
	content: [
    './**/*.{html,webc,liquid}',
    './node_modules/xtendui/src/*.mjs',
    './node_modules/preline/dist/*.js',
    // './node_modules/flowbite/**/*.js',
    './assets/js/card-carousel-modal.js',
    './assets/js/contact-modal.js',
    './assets/js/dynamic-contact-modal.js',
    './assets/js/email-carousel-modal.js',
    './assets/js/individual-offer-modal.js',
    './assets/js/insurance-recommendation-modal.js',
    './assets/js/judgement-list-modal.js',
    './assets/js/list-modal-1.js',
    './assets/js/list-modal-2.js',
    './assets/js/list-modal-3.js',
    './assets/js/pdf-modal.js',
    './assets/js/place-order-modal.js',
    './assets/js/portale-google-intro-contact-modal.js',
    './assets/js/portale-google-intro-modal.js',
    './assets/js/portale-google-modal-1.js',
    './assets/js/portale-google-modal-2.js',
    './assets/js/portale-google-modal-3.js',
    './assets/js/portale-google-modal-4.js',
    './assets/js/portale-google-modal-5.js',
    './assets/js/portale-google-modal-6.js',
    './assets/js/switch-page-modal.js',
    './assets/js/utils.js',
    './site/**/*.{njk,html,webc,md,js,liquid}',
    './assets/js/review-calculator-v2.js',
  ],
  variants: {
    extend: {},
  },
	plugins: [
    require('@tailwindcss/typography'),
    require('tailgrids/plugin'),
    require('flowbite/plugin'),
    require('preline/plugin'),
    FlipCard,
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '280px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },

    extend: {
      extend: {
        fontFamily: {
          "_1-em-regular-font-family": "Roboto-Regular, sans-serif",
        },
        fontSize: {
          "_1-em-regular-font-size": "16px",
        },
        fontWeight: {
          "_1-em-regular-font-weight": "400",
        },
        lineHeight: {
          "_1-em-regular-line-height": "120%",
        },
        borderRadius: {},
        colors: {
          "primary-000-54": "rgba(0, 0, 0, 0.54)",
          "google-green": "#58a55c",
          "google-yellow": "#f2be42",
          "google-red": "#d95140",
          "google-blue": "#5186ec",
        },
        spacing: {},
        width: {},
        minWidth: {},
        maxWidth: {},
        height: {},
        minHeight: {},
        maxHeight: {},
      },
      animation: {
        progress: 'progress 1s infinite linear',
      },
      keyframes: {
        progress: {
          '0%': { transform: ' translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.4)' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translate(0, 2rem)', opacity: 0 },
          '100%': { transform: 'translate(0, 0)', opacity: 1 },
        },
      },
      transformOrigin: {
        'left-right': '0% 50%',
      },

      colors: {
        primary: {
          "50":"#eff6ff",
          "100":"#dbeafe",
          "200":"#bfdbfe",
          "300":"#93c5fd",
          "400":"#60a5fa",
          "500":"#3b82f6",
          "600":"#2563eb",
          "700":"#1d4ed8",
          "800":"#1e40af",
          "900":"#1e3a8a",
          "950":"#172554",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "picture:not(.custom-prose)": {
              marginTop: "0px !important",
              marginBottom: "16px !important",
            },
          },
        },
      },
    },
  },
};

