# HIMSSwire

Independent healthcare technology coverage published by Upsecret. The public frontend runs on Vercel at `https://www.himsswire.com`. WordPress on Hostinger serves the editorial dashboard at `https://cms.himsswire.com/wp-admin/` and the REST API. The build does not require a CMS connection.

## Frontend

Use a supported Node.js version and run `npm ci`, `npm run check`, and `npm run build`. Copy the public settings from `.env.example` to `.env.local` when a separate development CMS is needed. Vercel uses the `upsecret/pbn` repository, root directory `himsswire`, and Next.js framework preset. Confirm the preview is access-controlled before loading editorial drafts into it.

Set `HIMSSWIRE_INDEXING=enabled` for the production environment at public cutover and rebuild. The default returns a noindex header and a restrictive robots.txt while the site is being commissioned.

The public pages request published posts from WordPress on each visit. The same published-post filter covers articles, topic lists, search, RSS and the sitemap. The backend REST responses and frontend HTML/XML use no-store. Keep the CMS post endpoints uncached at the Hostinger CDN. Backend failures surface as errors without serving an earlier article.

## WordPress commissioning

1. Create the separate CMS website in the verified Hostinger account. Confirm its DNS, HTTPS certificate, WordPress dashboard and exact SSH installation path. Set the permalink structure to Post name, disable search visibility for the CMS, and set up an editor through the existing account administrator.
2. Verify the installation identity with `wp --path=<verified-path> option get siteurl`. Take and check the DB/config backup with the existing PBN maintenance runbook. Keep credentials in the existing private store.
3. Install `wordpress/himsswire-editorial.php` in the CMS `wp-content/mu-plugins` directory. Set `HIMSSWIRE_FRONTEND` in the CMS configuration to the active authenticated preview URL for staging, then change it to `https://www.himsswire.com` after the production switch. Editors use the WordPress Preview action to open a 10-minute, post-scoped link.
4. Copy this project’s `wordpress`, `content` and `public/images` folders to a private directory on the CMS host, preserving that layout. Run `wp --path=<verified-path> eval-file <private-directory>/wordpress/seed.php` as the hosting account. The seed creates five drafts with source links and preserves existing slugs. Review those drafts in WordPress before publication. The lead image is an original generated editorial illustration, labeled in its alt text. Archive source files and record the backup location outside the public repo.
5. Verify the full draft → publish → edit → private sequence in WordPress and in a signed-out browser. Check the detail, home, topic, search, feed and sitemap. A CMS outage must return an error without serving the previous story.

## Migration and cutover

See [the migration checklist](migration/README.md). Preserve the Builder installation and its DNS records as a recovery option. Deploy first on the protected Vercel preview, then use the DNS values displayed by the Vercel project to route the public hostnames. Add an apex-to-www permanent redirect in Vercel and verify that it preserves path and query. Leave CMS, email and validation records in place. If a public release fails, restore the previous DNS records from the private snapshot after confirming the Builder still hides the archived articles.

