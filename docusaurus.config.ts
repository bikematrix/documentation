import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Bike Matrix",
  tagline: "Compatibility Sorted",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.bike-matrix.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bikematrix", // Usually your GitHub org/user name.
  projectName: "bikematrix.webcomponents", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem"
        },

        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          bikeMatrix: {
            specPath: "api/swagger.yaml",
            outputDir: "docs/api-endpoints",
            sidebarOptions: {
              groupPathsBy: "tag"
            }
          } satisfies OpenApiPlugin.Options
        }
      }
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "Bike Matrix Logo",
        src: "img/logo.png",
        srcDark: "img/white-logo.png"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "right",
          label: "Documentation"
        },
        {
          href: "https://github.com/bikematrix/web-components",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Bike Matrix, Inc.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
