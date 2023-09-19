// Sitemap.js

import React from 'react';

function Sitemap() {
  // Generate your sitemap content here
  const sitemapXml = `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.labelxai.com/</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/industry</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/Services</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/company</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/pricing</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/blog</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/faq</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/contactus</loc>
    </url>
    <url>
      <loc>https://www.labelxai.com/freesample</loc>
    </url>
  </urlset>`;

  // Set the content type header to XML
  const headers = { 'Content-Type': 'application/xml' };

  // Send the sitemap XML as a response
  return (
    <pre style={headers}>
      {sitemapXml}
    </pre>
  );
}

export default Sitemap;
