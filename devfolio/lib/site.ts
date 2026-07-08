// Central site config so canonical URLs, the sitemap, and metadata stay in sync.
// Override the production URL via NEXT_PUBLIC_SITE_URL if the domain ever changes.
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zackyuan.dev",
  name: "Zack Yuan",
  title: "Zack Yuan — Full-Stack Web Developer & UX/UI Designer",
  description:
    "Zack Yuan is a full-stack web developer and UX/UI designer based in Tulsa, OK, building fast, design-minded web and mobile apps with React, Next.js, and TypeScript.",
} as const;
