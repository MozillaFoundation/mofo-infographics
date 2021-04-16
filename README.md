# MoFo Infographics

A repository for all Mozilla Foundation interactive graphics used in publications on foundation.mozilla.org.


# Contributing

## Development 
1. Be a trusted Mozilla Foundation contractor
2. Understand an reference the [Mozilla Foundation Brand Identity](https://foundation.mozilla.org/en/docs/brand/design/) and [Agency Assets](https://foundation.mozilla.org/en/docs/brand/agency-assets/) when building the graphic. For expanded color palettes, or other branding questions, contact the Mozilla Foundation design team.
3. Verify your infographic passes the following requirements:
    * Works when embedded in an iframe
    * Has an index.html entry point that includes other necessary resources via relative paths.
    * Dynamically resizes to fill the iframe (either listens for container width and height changes or is 100% wide and tall and responsive)
    * No embedded fonts (only use fonts.google.com)
    * Doesn't link to pages outside foundation.mozilla.org
    * Doesn't fetch data from any external APIs
    * Unpackaged source code is available (see below)
4. Host a version of the infographic on GitHub Pages or your own personal site for the Mozilla Foundation Design Team and other stakeholders to review.

## Deployment 
Once the final graphic is approved for deployment:
1. Clone the mofo-infographics repository
2. Submit a pull request adding your packaged files to the `/projects/<launch date>-<project-name-with-hypens>/` folder
3. In your pull request message, include a link to the repository containing the full, unpackaged source of your infographic.
4. The Engineering team will review your code for security issues and approve your PR
5. Your code will be live at `https://mofo-infographics.s3.amazonaws.com/projects/<launch date>-<project-name-with-hypens>/index.html`
