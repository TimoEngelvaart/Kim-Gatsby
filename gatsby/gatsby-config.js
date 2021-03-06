// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    siteUrl: `https://kimwesterlink.nl`,
    description: "Best site on the web",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "rbhcbzxq",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
};
