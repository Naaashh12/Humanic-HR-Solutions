/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand color system
        'brand': {
          'red-dark': '#8c0415',      // primary deep crimson
          'red-light': '#bf0614',     // vivid red accents
          'red-neon': '#ff1a2e',      // neon glow
          'red-ultra': '#5c0010',     // ultra-dark red
          'black': '#000000',         // pure black
          'black-alt': '#0a0a0a',     // slight variation
          'gray-light': '#e6eaed',    // text on dark
        },
      },
      backgroundColor: {
        'dark': '#000000',
        'dark-alt': '#0a0a0a',
      },
      textColor: {
        'brand': '#e6eaed',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'rotate-slow': 'rotate 60s linear infinite',
        'float-up': 'floatUp 0.5s ease-out',
        'glow-bounce': 'glowBounce 0.6s ease-out',
        'glitch': 'glitch 0.3s ease-out',
        'scan': 'scan 8s linear infinite',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(140, 4, 21, 0.5), 0 0 40px rgba(140, 4, 21, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(191, 6, 20, 0.8), 0 0 60px rgba(140, 4, 21, 0.4)',
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowBounce: {
          '0%': { 
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 rgba(191, 6, 20, 0.5)',
          },
          '100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 30px rgba(191, 6, 20, 0.8)',
          },
        },
        glitch: {
          '0%, 100%': { 
            transform: 'translateX(0)',
            clip: 'rect(0, 900px, 0, 0)',
          },
          '20%': { 
            transform: 'translateX(-2px)',
            clip: 'rect(0, 900px, 17px, 0)',
          },
          '40%': { 
            transform: 'translateX(2px)',
            clip: 'rect(0, 900px, 51px, 0)',
          },
          '60%': { 
            transform: 'translateX(-2px)',
            clip: 'rect(0, 900px, 99px, 0)',
          },
          '80%': { 
            transform: 'translateX(0)',
          },
        },
        scan: {
          '0%': { 
            backgroundPosition: '0 0',
          },
          '100%': { 
            backgroundPosition: '0 100%',
          },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)',
            opacity: '1',
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '0.5',
          },
        },
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(140, 4, 21, 0.5), 0 0 40px rgba(140, 4, 21, 0.2)',
        'glow-red-bright': '0 0 30px rgba(191, 6, 20, 0.8), 0 0 60px rgba(140, 4, 21, 0.4)',
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
      },
    },
  },
  plugins: [],
};

