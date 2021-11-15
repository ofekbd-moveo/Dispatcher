import ContentLoader from "react-content-loader";

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width="90%"
    height="20%"
    // viewBox="0 0 90% 20%"
    backgroundColor="#d1d1d1"
    foregroundColor="#e4e2e2"
    {...props}
  >
    <rect x="4" y="1" rx="10" ry="10" width="105" height="121" />
    <rect x="84" y="1" rx="0" ry="0" width="26" height="121" />
    <rect x="124" y="21" rx="4" ry="4" width="60%" height="15" />
    <rect x="127" y="47" rx="0" ry="0" width="80%" height="8" />
    <rect x="126" y="63" rx="0" ry="0" width="85%" height="8" />
    <rect x="127" y="78" rx="0" ry="0" width="40%" height="6" />
    <rect x="60%" y="91" rx="10" ry="10" width="200" height="26" />
  </ContentLoader>
);

export default MyLoader;
