// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = "https://cbadger85.github.io/blog/";
export const SITE_TITLE = "Charles Badger | charlesbadger.dev";
export const SITE_DESCRIPTION = "A tech blog for Charles Badger.";

export const LINKEDIN_URL = "https://www.linkedin.com/in/charles-badger/";
export const GITHUB_URL = "https://github.com/cbadger85/";

const CONFIGURED_BASE_URL = import.meta.env.BASE_URL;

export const BASE_URL =
  CONFIGURED_BASE_URL === "/" ? CONFIGURED_BASE_URL : CONFIGURED_BASE_URL + "/";
