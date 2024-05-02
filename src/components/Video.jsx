import Script from "next/script";
const Video = () => {
  return (
    <>
      <Script src="https://embed.dyntube.com/v1.0/dyntube.js" />
      <div data-dyntube-key="MA43NcbECiuBsA5vaEqg"></div>
    </>
  );
};

export default Video;
