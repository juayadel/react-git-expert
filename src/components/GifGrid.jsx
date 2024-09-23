// rafc shorcut for create 
import { GitItme } from "./GitItme";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>) 
        //otra forma de hacerlo
        /* isLoading ? (<h2>Cargando...</h2>) : null */
      }
      <div className="card-grid">
        {images.map((image) => (
          <GitItme
            key={image.id}
            // title={image.title}
            // url={image.url}
            //otra forma de esparcir todas las propiedades del objeto
            {...image}
          />
        ))}
      </div>
    </>
  );
}
