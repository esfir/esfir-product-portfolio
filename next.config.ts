import type { NextConfig } from "next";
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/esfir-product-portfolio" : "";
const config: NextConfig = {
  poweredByHeader: false,
  ...(isPages ? { output: "export", trailingSlash: true, basePath, images: { unoptimized: true } } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default config;
