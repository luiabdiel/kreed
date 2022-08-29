import * as S from "./styles"

type FrontendProps = {
    children: React.ReactNode

}

export const Frontend = ({ children }: FrontendProps) => {
    return(
        <S.Container>Teste frontend {children}</S.Container>
    )
}