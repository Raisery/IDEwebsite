/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        fontWeight: {
            thin: '100',
            hairline: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            'extra-bold': '800',
            black: '900',
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                max: '50px -80px 200px 100px rgb(87,217,173,0.20),50px -80px 200px 200px rgb(23,85,83,0.30), inset 0 0 0 ',
                inside: 'inset 0 2px 500px 0 rgb(0 0 0 / 0.05)',
            },
            width: {
                custom: 'calc(33.333333vw - 3.5rem - 1px);',
                custom2: 'calc(33.333333vw - 3.5rem + 10px);',
                custom3: 'calc(25vw - 3.5rem + 20px)',
            },
            screens: {
                tablet: '768px',
                laptop: '1024px',
                desktop: '1280px',
                desktop_xl: '1536px',
                smartphone_landscape: {
                    raw: '(max-height: 600px) and (orientation:landscape)',
                },
                tablet_landscape: {
                    raw: '(max-height: 800px) and (min-height: 600px) and (orientation:landscape)',
                },
            },
        },
    },
    plugins: [],
};
