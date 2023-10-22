import { useState, useEffect } from "react";

import { getGif } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={images.id}
            {...image}
            // title={image.title}
            // img={image.img}
          />
        ))}
      </div>
    </>
  );
};
