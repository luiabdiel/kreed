import { CardActivity } from "../../molecules/CardActivity"

import * as S from "./styles"

import HeroImg from "../../assets/hero.svg"

export const ProductStats = () => {
    return(
        <S.ProductStats>
          <CardActivity/>

          <img src={HeroImg} alt="Uma mulher, sentada, fazendo uma pesquisa no tablet" />
        </S.ProductStats>
    )
}