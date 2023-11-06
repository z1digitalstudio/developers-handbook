import {useRouter} from "next/router";

export default {
  project: {
    link: 'https://github.com/z1digitalstudio/developers-handbook',
  },
    docsRepositoryBase: 'https://github.com/z1digitalstudio/developers-handbook/blob/master',
    logo: <span className="mr-2 font-extrabold hidden md:inline flex gap-1.5"><img src="/logo.svg" alt="Z1 Logo" width="1.875rem"/>Z1 Developers Handbook</span>,
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '👋 %s – Z1 Developers Handbook'
        }
      }
    },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content="Z1 Developers Handbook" />
      <meta name="apple-mobile-web-app-title" content="Z1 Developers Handbook" />
    </>
  ),
    footer: {
      text: <span>
        {new Date().getFullYear()} © Z1 digital studio
      </span>,
    }
}
