import React from "react";
import ContentLoader from "react-content-loader";

const SmallScreenLoader = () => (
  <ContentLoader
    speed={2}
    width={392}
    height={280}
    viewBox="0 0 392 280"
    backgroundColor="#d1d1d1"
    foregroundColor="#e4e2e2"
  >
    <rect x="-1" y="7" rx="20" ry="20" width="393" height="76" />
    <rect x="-1" y="59" rx="0" ry="0" width="412" height="24" />
    <rect x="5" y="113" rx="4" ry="4" width="224" height="10" />
    <rect x="11" y="134" rx="3" ry="3" width="85" height="5" />
    <rect x="9" y="157" rx="4" ry="4" width="369" height="7" />
    <rect x="10" y="173" rx="4" ry="4" width="266" height="7" />
    <rect x="10" y="189" rx="4" ry="4" width="325" height="6" />
    <rect x="111" y="245" rx="8" ry="8" width="186" height="33" />
    <rect x="10" y="205" rx="4" ry="4" width="380" height="7" />
  </ContentLoader>
);

export default SmallScreenLoader;
