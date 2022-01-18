import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";

const ImgGallerySlice = ({ slice }) => (
  <>
  <section className="image-gallery container">
    <div className="text-center">
      <RichText render={slice.primary.galleryTitle} />
    </div>
    <div className="gallery">
      {slice?.items?.map((item, i) => (
        <div key={i} className="gallery-item">
          <img className="img-gallery" src={item.image.url} alt={item.image.alt} />
          <RichText render={item.imageDescription} />
          <p>
            <a className="gallery-link" href={Link.url(item.link)}>
              <span>{item.linkLabel}</span>
            </a>
          </p>
        </div>
      ))}
    </div>
  </section>
  </>
);

export default ImgGallerySlice;
