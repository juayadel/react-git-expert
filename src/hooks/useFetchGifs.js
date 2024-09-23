//un hoks es una funcion que retorna alago
import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  //Otra forma de hace el llamado asincrono en una funcion
  const getImages = async () => {
    const imgs = await getGif(category);
    setImages(imgs);
    setIsLoading(false);
  };

  //useEffect recive unicamente funciones
  useEffect(() => {
    getImages();
    //     getGif(category)
    //     .then(imgs => setImages(imgs));
  }, []);
  return { images: images, isLoading: isLoading };
};