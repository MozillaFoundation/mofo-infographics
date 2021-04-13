# MoFo Infographics

Add each interactive graphic to its own folder, they'll be hosted on AWS automatically.


# Contributing

1. Be a trusted Mozilla Foundation contractor
2. Understand an reference the [Mozilla Foundation Brand Identity](https://foundation.mozilla.org/en/docs/brand/design/) and [Agency Assets](https://foundation.mozilla.org/en/docs/brand/agency-assets/) when building the infographic. For expanded color palettes, contact the Mozilla Foundation design team.
3. Verify your infographic passes the following requirements:
    * Works when embedded in an iframe
    * Has an index.html entry point that includes other necessary resources via relative paths.
    * Dynamically resizes to fill the iframe (either listens for container width and height changes or is 100% wide and tall and responsive)
    * No embedded fonts (only use fonts.google.com)
    * Doesn't link to pages outside foundation.mozilla.org
    * Doesn't fetch data from any external APIs
    * Unpackaged source code is available (see below)
4. Clone the mofo-infographics repository
5. Submit a pull request adding your packaged files to the `/projects/<launch date>-<project-name-with-hypens>/` folder
6. In your pull request message, include a link to the repository containing the full, unpackaged source of your infographic.
7. The Engineering team will review your code for security issues and approve your PR
8. Your code will be live at `https://mofo-infographics.s3.amazonaws.com/projects/<launch date>-<project-name-with-hypens>/index.html`
