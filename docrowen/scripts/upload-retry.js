const https = require("https");

const WP_URL = "https://cms.docrowen.com/wp-json/wp/v2";
const AUTH = Buffer.from("engkimbs:iHy2 kxQ3 GQaC eyP9 OEi8 fSlF").toString("base64");

const retryPosts = [
  { postId: 105, photo: "photo-1606265752439-1f18756aa5fc", alt: "Dental clinic in Tenmabashi" },
  { postId: 70,  photo: "photo-1576091160550-2173dba999ef", alt: "Medical implant consultation" },
  { postId: 53,  photo: "photo-1550751827-4bd374c3f58b", alt: "Cyber safety and online protection" },
];

function downloadImage(photoId) {
  return new Promise((resolve, reject) => {
    const url = `https://images.unsplash.com/${photoId}?w=1200&h=800&fit=crop&q=80`;

    function follow(targetUrl, depth) {
      if (depth > 5) return reject(new Error("Too many redirects"));
      const mod = targetUrl.startsWith("https") ? https : require("http");
      mod.get(targetUrl, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return follow(res.headers.location, depth + 1);
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const buf = Buffer.concat(chunks);
          if (buf.length < 1000) return reject(new Error(`Too small: ${buf.length} bytes`));
          resolve(buf);
        });
        res.on("error", reject);
      }).on("error", reject);
    }
    follow(url, 0);
  });
}

function uploadToWordPress(imageBuffer, filename, altText) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${WP_URL}/media`);
    const req = https.request({
      hostname: url.hostname, path: url.pathname, method: "POST",
      headers: {
        "Authorization": `Basic ${AUTH}`,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Type": "image/jpeg",
        "Content-Length": imageBuffer.length,
      },
    }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const body = Buffer.concat(chunks).toString();
        if (res.statusCode === 201) resolve(JSON.parse(body));
        else reject(new Error(`Upload failed ${res.statusCode}: ${body.slice(0, 200)}`));
      });
    });
    req.on("error", reject);
    req.write(imageBuffer);
    req.end();
  });
}

function wpPost(endpoint, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${WP_URL}${endpoint}`);
    const data = JSON.stringify(body);
    const req = https.request({
      hostname: url.hostname, path: url.pathname, method: "POST",
      headers: {
        "Authorization": `Basic ${AUTH}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
      },
    }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(res.statusCode));
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  for (const { postId, photo, alt } of retryPosts) {
    try {
      console.log(`Post ${postId}: Downloading ${photo}...`);
      const buf = await downloadImage(photo);
      console.log(`  Downloaded ${(buf.length / 1024).toFixed(0)}KB`);

      console.log(`  Uploading...`);
      const media = await uploadToWordPress(buf, `featured-${postId}.jpg`, alt);
      console.log(`  Media ID: ${media.id}`);

      await wpPost(`/media/${media.id}`, { alt_text: alt });
      const status = await wpPost(`/posts/${postId}`, { featured_media: media.id });
      console.log(`  ✓ Set featured image (status ${status})`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 500));
  }
}

main();
