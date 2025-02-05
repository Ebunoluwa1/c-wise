/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       backgroundImage: {
            'security-pattern': "url('https://cowrywise.com/images/illos/security.svg')",
           'hero-pattern': "url('https://cowrywise.com/images/patterns/home/home-device-section.svg')",
           'phone-image': "url('./src/Assets/phone.png')",
       },
      gridTemplateColumns: {
        flexible: "54% 1fr",
      },
      boxShadow: {
        'lg': " 1px 3px 4px rgba(8,37,82,.04)",
      },
      
    },
  },
  plugins: [],
};
