const BREAKPOINTS = {
  mobile: "480px",
  tablet: "834px",
  laptop: "1440px",
};
const QUERIES = {
  mobileAndLower: `max-width:${BREAKPOINTS.mobile}`,
  tabletAndLower: `max-width:${BREAKPOINTS.tablet}`,
  laptopAndLower: `max-width:${BREAKPOINTS.laptop}`,
};
export { BREAKPOINTS, QUERIES };
