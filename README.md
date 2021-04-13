# MoFo Infographics

Add each interactive graphic to its own folder, they'll be hosted on AWS automatically.


# Contributing

1. Be a trusted Mozilla Foundation contractor
2. Verify your infographic passes the following requirements:
    * Works when embedded in an iframe
    * Has an index.html entry point that includes other necessary resources via relative paths.
    * Dynamically resizes to fill the iframe (either listens for container width and height changes or is 100% wide and tall and responsive)
    * No embedded fonts (only use fonts.google.com)
    * Doesn't link to pages outside foundation.mozilla.org
    * Doesn't fetch data from any external APIs
    * Unpackaged source code is available (see below)
3. Clone the mofo-infographics repository
4. Submit a pull request adding your packaged files to the `/project/<launch date>-<project-name-with-hypens>/` folder
5. In your pull request message, include a link to the repository containing the full, unpackaged source of your infographic.
