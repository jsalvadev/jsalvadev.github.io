/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Typography System
      fontFamily: {
        display: ['"Helvetica Now Display"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Helvetica Now Text"', 'system-ui', '-apple-system', 'sans-serif']
      },
      fontSize: {
        // H1 - Main section titles
        'display-lg': ['56px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-md': ['48px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        // H2
        'heading-lg': ['36px', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-md': ['32px', { lineHeight: '1.4', fontWeight: '500' }],
        // H3
        'heading-sm': ['28px', { lineHeight: '1.4', fontWeight: '500' }],
        'heading-xs': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        // Body text
        'body-lg': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        // UI / Notes
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }]
      },
      // Color System - Light Mode
      colors: {
        light: {
          bg: {
            primary: '#F7F7F7',
            surface: '#FFFFFF'
          },
          text: {
            primary: '#1A1A1A',
            secondary: '#6A6A6A'
          },
          border: {
            subtle: '#E4E4E4'
          },
          accent: {
            primary: '#3A7AFE',
            soft: '#E6EEFF'
          }
        },
        dark: {
          bg: {
            primary: '#0F0F0F',
            surface: '#1C1C1C'
          },
          text: {
            primary: '#EDEDED',
            secondary: '#A0A0A0'
          },
          border: {
            subtle: '#2A2A2A'
          },
          accent: {
            primary: '#3A7AFE',
            hover: '#2A3550'
          }
        }
      },
      // Spacing optimization for minimalist design
      spacing: {
        'section': '6rem',
        'section-sm': '4rem'
      }
    }
  },
  plugins: []
};
