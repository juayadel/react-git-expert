import { useState } from "react";
//Lo que se conoce como archivos de barril
//por defecta apunta al index.js de esa carpeta (components)
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {
      // const newCategorie = [...categories];
      // newCategorie.push("Friends");
      //setCategories(newCategorie);
      //Otra forma mas directa de hacerlo es:
      //setCategories([...categories,'Friends']);
      //Otra forma mas directa de hacerlo es:
      //setCategories(cat => [...cat, 'Friends']);
      //Otra forma mas directa de hacerlo es al inicio:
      //setCategories(cat => ['Friends',...cat ]);
        if(categories.includes(value)) return;
        setCategories([value, ...categories]);
    };
    return (
      <>
        {/*titulo */}
        <h1>GifEpertApp</h1>

        {/*Inputs */}
        <AddCategory 
        // setCategories={setCategories} 
        onNewCategory = {value => onAddCategory(value) }

        />
        {/*Listado gif */}
        {/* {<button onClick={onAddCategory}>Agregar</button>} */}
        <ol>
          {/*No Se debe usar el index en el .map, directiva de react */}
          {
            categories.map((category) => (              
            <GifGrid 
              key = {category}
              category={category} />)
            )
          }
        </ol>
        {/*Git Item*/}
      </>
    );
}