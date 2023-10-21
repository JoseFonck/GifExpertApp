import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const GifGrid = ({category}) => {
  
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGif(category)
        setImages(newImages)
    }

    useEffect(()=>{
        getImages()
    },[category])

    return(
        <>
            <h3>{category}</h3>
            <div>
                {images.map( ({id, title, img}) => (
                    <>
                        <li key={id}>{title}</li>
                        <img key={id} src={img} alt="GIF" />
                    </>
                ))}
            </div>
        </>
    )

}
