import React from "react";
import { RichText } from "prismic-reactjs";

const QuoteSlice = ({ slice }) => (
  <section className="container quote">
    <blockquote>{RichText.asText(slice.primary.quotetext)}</blockquote>
    {slice.variation === "quoteReference" ? (
      <div>
        <cite>
          <RichText render={slice.primary.reference} />
        </cite>
      </div>
    ) : null}
  </section>
);

export default QuoteSlice;
