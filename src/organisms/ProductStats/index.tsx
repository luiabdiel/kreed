import { CardActivity } from "../../molecules/CardActivity"

import * as S from "./styles"

import HeroImg from "../../assets/hero.svg"
import { CardChart } from "../../molecules/CardChart"

export const ProductStats = () => {
    return(
        <S.ProductStats >
          <CardActivity />
          <CardChart />

          <img src={HeroImg} alt="Uma mulher, sentada, fazendo uma pesquisa no tablet" />
        </S.ProductStats >
    )
}