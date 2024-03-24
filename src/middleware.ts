import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'fr'];
export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|fr)/:path*'],
};
