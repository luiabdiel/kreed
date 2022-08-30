import { ButtonContact } from '../atoms/ButtonContact'
import { Frontend } from '../templates/frontend'

import HeroImg from "../assets/hero.svg"

import * as S from "./styles"

export function Main() {
  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <p>We are a full service digital agency that builds immesive user experience.</p>
          <ButtonContact/>
        </div>

        <div>
          <img src={HeroImg} alt="Uma mulher, sentada, fazendo uma pesquisa no tablet" />
        </div>
      </S.Container>
    </Frontend>
  )
}