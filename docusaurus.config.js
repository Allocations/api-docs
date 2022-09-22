// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Allocations API",
  tagline: "Powering Alternative Investment Applications",
  url: "https://developer.allocations.come",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://assets.website-files.com/60de06ef89c60667f2d7bc65/60ef960e88e6d6cda2ae4ddf_favicon-32x32.png",
  organizationName: "allocations", // Usually your GitHub org/user name.
  projectName: "api-docs", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "openapi.json",
          routeBasePath: "api",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "Allocations API",
        logo: {
          alt: "Allocations API Logo",
          src: "/rocket.gif",
        },
        items: [
          {
            type: "doc",
            docId: "tutorials/intro",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "doc",
            docId: "concepts/intro",
            position: "left",
            label: "Concepts",
          },
          { to: "/api", label: "API", position: "left" },
          { to: "/demo", label: "Request a Demo", position: "right" },
          {
            label: "API Dashboard",
            href: "https://developer.allocations.app",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/allocations",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/allocationsinc",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Allocations Home",
                href: "https://allocations.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/allocations/api-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Allocations, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
