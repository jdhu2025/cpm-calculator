const defaultSiteUrl = "https://www.cpm-calculator.xyz";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function getSiteUrl() {
  if (!configuredSiteUrl) return defaultSiteUrl;

  try {
    const url = new URL(configuredSiteUrl);
    const isLocalDevelopment = ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
    if (url.protocol === "https:" || isLocalDevelopment) {
      return configuredSiteUrl.replace(/\/+$/, "");
    }
  } catch {
    // Fall back to the verified production origin below.
  }

  // A localhost/HTTP value accidentally left in a hosting environment makes
  // Google reject or ignore the URLs in the generated sitemap.
  return defaultSiteUrl;
}

export const siteUrl = getSiteUrl();
