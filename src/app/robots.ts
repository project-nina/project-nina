import type { MetadataRoute } from "next";

// Pitch preview: keep out of search until Kiri says otherwise.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
