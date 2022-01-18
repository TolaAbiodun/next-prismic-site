import React from "react";
import { RichText } from "prismic-reactjs";

const TextSlice = ({ slice }) => (
  <section className={`container ${slice.variation}`}>
    <RichText render={slice.primary.text} />
  </section>
);

export default TextSlice;
