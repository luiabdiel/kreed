import Logotipo from "../../assets/kreed-logo.svg"

export const Logo = () => {
    return(
       <div>
         <img 
            aria-details="Um quadrado, azul claro, arredondado nas bordas com um K branco ao centro"
            src={Logotipo} 
            alt="Logo da Kreed"
         />
       </div>
    )
}