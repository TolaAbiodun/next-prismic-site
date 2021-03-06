import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";

const FeaturedImage = ({ slice }) => (
  <section className="highlight container">
    <div>
      <RichText render={slice.primary.title} />
      <RichText render={slice.primary.headline} />
      <p>
        <a href={Link.url(slice.primary.link)}>
          <span>{slice.primary.linkLabel}</span>
        </a>
      </p>
    </div>
    <div>
      <img
        className="featured-image"
        src={slice.primary.featuredImage.url}
        alt={slice.primary.featuredImage.alt}
      />
    </div>
  </section>
);

export default FeaturedImage;
