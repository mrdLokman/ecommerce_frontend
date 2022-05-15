module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth:{
        '280':'280px'
      },
      height:{
        '87':'350px'
      },
      backgroundImage: {
        'register': "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
 },
  plugins: [],
}
