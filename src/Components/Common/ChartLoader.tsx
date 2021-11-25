import React from "react";
import ContentLoader from "react-content-loader";

const ChartLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={199}
    viewBox="0 0 287 199"
    backgroundColor="#d1d1d1"
    foregroundColor="#e4e2e2"
  >
    <rect x="53" y="94" rx="5" ry="5" width="10%" height="110" />
    <rect x="3" y="121" rx="5" ry="5" width="10%" height="82" />
    <rect x="196" y="84" rx="5" ry="5" width="10%" height="120" />
    <rect x="100" y="40" rx="5" ry="5" width="10%" height="164" />
    <rect x="148" y="4" rx="5" ry="5" width="10%" height="202" />
    <rect x="244" y="39" rx="5" ry="5" width="10%" height="164" />
  </ContentLoader>
);

export default ChartLoader;
