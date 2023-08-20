import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
        <h1 className="text-SoftOrange text-4xl font-bold">Nuevo</h1>
        <NewArticle 
            title='Opciones para primer auto.'
            text='Aquí te damos las mejores opciones para primer auto.'
        />
        <NewArticle 
            title='¿Cómo solucionar problemas de un primer auto?'
            text='El primer auto puede que tenga estas fallas.'
        />
        <NewArticle 
            title='Mejores consejos al manejar un auto.'
            text='Para mejorar al manejar, estos son los mejores consejos.'
        />
    </aside>
  )
}
