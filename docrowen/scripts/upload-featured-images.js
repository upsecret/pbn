const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const WP_URL = "https://cms.docrowen.com/wp-json/wp/v2";
const WP_USER = "engkimbs";
const WP_APP_PASS = "iHy2 kxQ3 GQaC eyP9 OEi8 fSlF";
const AUTH = Buffer.from(`${WP_USER}:${WP_APP_PASS}`).toString("base64");

// Post ID -> { unsplash photo ID, alt text }
const postImages = [
  { postId: 50, photo: "photo-1570172619644-dfd03ed5d881", alt: "Summer skincare treatment in Korea" },
  { postId: 131, photo: "photo-1588776814546-1ffcf47267a5", alt: "Modern dental clinic in Incheon" },
  { postId: 123, photo: "photo-1629909613654-28e377c37b09", alt: "Gangnam plastic surgery clinic" },
  { postId: 115, photo: "photo-1580281657702-257584239a55", alt: "Laser eye surgery procedure" },
  { postId: 113, photo: "photo-1606811841689-23dfddce3e95", alt: "Dental implant procedure" },
  { postId: 111, photo: "photo-1556228578-0d85b1a4d571", alt: "Dermatology skincare treatment" },
  { postId: 109, photo: "photo-1571019613454-1cb2f99b2d8b", alt: "Fitness and body wellness" },
  { postId: 107, photo: "photo-1487412947147-5cebf100ffc2", alt: "Lip beauty cosmetic treatment" },
  { postId: 105, photo: "photo-1629909615957-be38d6d06c28", alt: "Dental clinic interior" },
  { postId: 103, photo: "photo-1598256989800-fe5f95da9787", alt: "Dental care equipment" },
  { postId: 101, photo: "photo-1551884170-09fb70a3a2ed", alt: "Eye lens implant surgery" },
  { postId: 64,  photo: "photo-1579684385127-1ef15d508118", alt: "Medical surgery preparation" },
  { postId: 99,  photo: "photo-1609840114035-3c981b782dfe", alt: "Dental implant treatment" },
  { postId: 87,  photo: "photo-1590650153855-d9e808231d41", alt: "Men eye surgery consultation" },
  { postId: 75,  photo: "photo-1616394584738-fc6e612e71b9", alt: "Winter skincare routine products" },
  { postId: 68,  photo: "photo-1551076805-e1869033e561", alt: "Eyelid surgery for adults" },
  { postId: 66,  photo: "photo-1631815588090-d4bfec5b1ccb", alt: "Korean plastic surgery technology" },
  { postId: 70,  photo: "photo-1666214280557-091f08a7601a", alt: "Breast augmentation implants" },
  { postId: 61,  photo: "photo-1612349317150-e413f6a5b16d", alt: "Rhinoplasty nose surgery guide" },
  { postId: 59,  photo: "photo-1560750588-73207b1ef5b8", alt: "Non surgical face lifting treatment" },
  { postId: 53,  photo: "photo-1563986768609-322da13575f2", alt: "Cyber safety and mental health" },
  { postId: 42,  photo: "photo-1556742049-0cfed4f6a45d", alt: "Personalized supplement vitamins" },
  { postId: 36,  photo: "photo-1490645935967-10de6ba17061", alt: "Intermittent fasting healthy food" },
  { postId: 33,  photo: "photo-1581595220892-b0739db3ba8c", alt: "Robotic surgery technology" },
  { postId: 15,  photo: "photo-1532187863486-abf9dbad1b69", alt: "Innovative biological medicine" },
];

function downloadImage(photoId) {
  const url = `https://images.unsplash.com/${photoId}?w=1200&h=800&fit=crop&q=80`;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        const redirectUrl = res.headers.location;
        https.get(redirectUrl, { headers: { "User-Agent": "Mozilla/5.0" } }, (res2) => {
          const chunks = [];
          res2.on("data", (c) => chunks.push(c));
          res2.on("end", () => resolve(Buffer.concat(chunks)));
          res2.on("error", reject);
        }).on("error", reject);
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function uploadToWordPress(imageBuffer, filename, altText) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${WP_URL}/media`);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: "POST",
      headers: {
        "Authorization": `Basic ${AUTH}`,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Type": "image/jpeg",
        "Content-Length": imageBuffer.length,
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const body = Buffer.concat(chunks).toString();
        if (res.statusCode === 201) {
          const data = JSON.parse(body);
          resolve(data);
        } else {
          reject(new Error(`Upload failed ${res.statusCode}: ${body.slice(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
    req.write(imageBuffer);
    req.end();
  });
}

function setFeaturedImage(postId, mediaId) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${WP_URL}/posts/${postId}`);
    const body = JSON.stringify({ featured_media: mediaId });
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: "POST",
      headers: {
        "Authorization": `Basic ${AUTH}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(Buffer.concat(chunks).toString()));
        } else {
          reject(new Error(`Set featured failed ${res.statusCode}`));
        }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function updateAltText(mediaId, altText) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${WP_URL}/media/${mediaId}`);
    const body = JSON.stringify({ alt_text: altText });
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: "POST",
      headers: {
        "Authorization": `Basic ${AUTH}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve());
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function processPost(item, index) {
  const { postId, photo, alt } = item;
  const filename = `featured-${postId}.jpg`;

  try {
    console.log(`[${index + 1}/${postImages.length}] Post ${postId}: Downloading ${photo}...`);
    const imageBuffer = await downloadImage(photo);
    console.log(`  Downloaded ${(imageBuffer.length / 1024).toFixed(0)}KB`);

    console.log(`  Uploading to WordPress...`);
    const media = await uploadToWordPress(imageBuffer, filename, alt);
    console.log(`  Uploaded as media ID ${media.id}`);

    await updateAltText(media.id, alt);

    console.log(`  Setting as featured image for post ${postId}...`);
    await setFeaturedImage(postId, media.id);
    console.log(`  ✓ Done!`);
    return { postId, mediaId: media.id, success: true };
  } catch (err) {
    console.error(`  ✗ Failed for post ${postId}: ${err.message}`);
    return { postId, success: false, error: err.message };
  }
}

async function main() {
  console.log(`Processing ${postImages.length} posts without featured images...\n`);

  const results = [];
  for (let i = 0; i < postImages.length; i++) {
    const result = await processPost(postImages[i], i);
    results.push(result);
    // Small delay between requests
    await new Promise(r => setTimeout(r, 500));
  }

  console.log("\n=== Summary ===");
  const success = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  console.log(`✓ Success: ${success.length}`);
  console.log(`✗ Failed: ${failed.length}`);
  if (failed.length > 0) {
    failed.forEach(f => console.log(`  - Post ${f.postId}: ${f.error}`));
  }
}

main().catch(console.error);
