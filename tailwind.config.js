module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.{html,ts}']
    },
    theme: {
        extend: {
            spacing: {
                '72': '18rem',
                '80': '20rem',
            },
            padding: {
                '5/6': '83.3333333%'
            }
        },
    },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ]
}
