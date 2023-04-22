/* eslint-disable react/react-in-jsx-scope */
import InformationBlock from './infoBlocks'

function MainInfoBlocks() {
  return (
    <div>
      <InformationBlock
        img="https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg"
        title="Privacidad para Chrome"
        text="Navega como siempre y nosotros nos encargamos
        del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una "
        link="https://duckduckgo.com/app"
        text2="extensión de Chrome."
      />

      <InformationBlock
        img="https://duckduckgo.com/assets/home/landing/icons/search.svg"
        title="Motor de Búsqueda de Privacidad"
        text="Busca de forma privada con nuestra app 
        o extension, añade búsqueda web privada a tu navegador preferido o busca en "
        link="https://duckduckgo.com/"
        text2="duckduckgo.com."
      />

      <InformationBlock
        img="https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg"
        title="Navegador Primario"
        text="Nuestro navegador privado para móviles 
        viene equipado con nuestro motor de búsqueda, 
        bloqueador de rastreadores, mejora de encriptación y más. Disponible para "
        link="https://duckduckgo.com/app"
        text2="iOS & Android"
      />
    </div>
  )
}

export default MainInfoBlocks
