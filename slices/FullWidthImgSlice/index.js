import React from "react";

const FullWidthImgSlice = ({ slice }) => (
  <section className="container">
    <img className="full-img" src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
);

export default FullWidthImgSlice;
