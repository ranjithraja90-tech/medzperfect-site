# Medzperfect

Static website for Medzperfect, a US-focused medical billing, revenue-cycle management and denial-recovery company with delivery operations in India.

The site includes a landing page, leadership page, contact page and cookie policy. It is exported to `dist/client` and deployed through GitHub Actions to GitHub Pages.

## Analytics publication prerequisite

Microsoft Clarity project `yoxwn5nx27` must have global Consent Mode enabled (Settings → Setup → turn the default Cookies setting OFF) before publishing this integration. The visitor's explicit acceptance grants analytics storage only; advertising storage remains denied. The project tag configuration should report `track: false` before release. See [Microsoft's Consent Mode documentation](https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-mode).

The loader is limited to `medzperfect.com` and `www.medzperfect.com`; local previews never send analytics to the live project. Declining keeps the SDK unloaded. Withdrawal clears known first-party analytics storage and refreshes open tabs to stop the SDK, including cookieless activity. The contact form is masked from recordings.

## Verification and performance

Run the production build, `node --test tests/*.test.mjs`, and lint before release. Verify all exported routes, `CNAME` and `.nojekyll`, then verify the public domain after the Pages workflow succeeds.

Fonts are self-hosted with their license files, only two critical fonts are preloaded, route prefetching is disabled, and below-fold leadership photos are lazy-loaded. Motion respects reduced-motion preferences. Local performance measurements are lab estimates; real loading time depends on hosting, network latency and visitor devices.
