import { ButtonContact } from "../../atoms/ButtonContact"

import * as S from "./styles"

export const ProductInformation = () => {
    return(
        <S.ProductInformation>
          <h1>Design driven development of your web product</h1>
          <p>We are a full service digital agency that builds immesive user experience.</p>
          <ButtonContact/>
        </S.ProductInformation>
    )
}