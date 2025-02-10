import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['hu', 'es', 'fr', 'de','en'],

	// Used when no locale matches
	defaultLocale: 'hu',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(hu|es|de|fr|en)/:path*'],
};
