// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { pathToFileURL } = require("node:url");
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github,
  darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GraphQL-Markdown",
  url: "https://graphql-markdown.dev",
  baseUrl: "/demo-docusaurus/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "graphql-markdown", // Usually your GitHub org/user name.
  projectName: "graphql-markdown-demo", // Usually your repo name.
  plugins: [
    [
      "@graphql-markdown/docusaurus", // See .graphqlrc for configuration
      {
        formatter: pathToFileURL(require.resolve("./lib/formatter.mjs")).href,
      },
    ],
    // Markdown copies: `formatter` must be set in the plugin options, as the
    // plugin's --formatter default overrides `formatter` from .graphqlrc.
    [
      "@graphql-markdown/docusaurus",
      {
        id: "markdown",
        formatter: pathToFileURL(
          require.resolve("./lib/markdown-copy.mjs"),
        ).href,
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({ hashed: true, docsRouteBasePath: "/", indexBlog: false }),
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: "/",
        },
        theme: {
          customCss: ["./src/css/custom.css"],
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true
      },
      navbar: {
        title: "GraphQL-Markdown",
        logo: {
          alt: "graphql-markdown",
          src: "img/graphql-markdown.svg"
        },
        items: [
          {
            to: "/intro",
            label: "Reference",
            position: "left"
          },
          {
            href: "https://github.com/graphql-markdown/graphql-markdown",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "light",
        links: [],
        copyright: `Generated with <a href="https://graphql-markdown.dev">GraphQL-Markdown</a> · <a href="https://github.com/graphql-markdown/graphql-markdown">⭐ Star on GitHub</a><br />Copyright © ${new Date().getFullYear()} GraphQL-Markdown, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
