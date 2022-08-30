import { ButtonContact } from '../atoms/ButtonContact'
import { Frontend } from '../templates/frontend'

import HeroImg from "../assets/hero.svg"

import * as S from "./styles"
import { CardActivity } from '../molecules/CardActivity'

export function Main() {
  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <p>We are a full service digital agency that builds immesive user experience.</p>
          <ButtonContact/>
        </div>

        <S.ContainerImage>
          <CardActivity/>

          <img src={HeroImg} alt="Uma mulher, sentada, fazendo uma pesquisa no tablet" />
        </S.ContainerImage>
      </S.Container>
    </Frontend>
  )
}