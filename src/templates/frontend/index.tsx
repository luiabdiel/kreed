import { Header } from "../../organisms/Header"

import * as S from "./styles"

type FrontendProps = {
    children: React.ReactNode

}

export const Frontend = ({ children }: FrontendProps) => {
    return(
        <S.Container>
            <Header/>
            <main>{children}</main>
        </S.Container>
    )
}