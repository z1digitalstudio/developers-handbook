export default {
    github: 'https://github.com/z1digitalstudio/developers-handbook',
    docsRepositoryBase: 'https://github.com/z1digitalstudio/developers-handbook/blob/master',
    titleSuffix: ' – Z1 Developers Handbook',
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">Z1 Developers Handbook</span>
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
         {/*   <meta name="description" content="Nextra: the Next.js site builder" />
            <meta name="og:description" content="Nextra: the Next.js site builder" />*/}
            <meta name="twitter:card" content="summary_large_image" />
           {/* <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
            <meta name="twitter:site:domain" content="nextra.vercel.app" />
            <meta name="twitter:url" content="https://nextra.vercel.app" />*/}
            <meta name="og:title" content="Z1 Developers Handbook" />
            <meta name="apple-mobile-web-app-title" content="Z1 Developers Handbook" />
        </>
    ),
    search: true,
    prevLinks: true,
    nextLinks: true,
    footer: true,
    footerEditLink: 'Edit this page on GitHub',
    footerText: <>{new Date().getFullYear()} © Z1 digital studio.</>,
    unstable_faviconGlyph: '👋',
}
