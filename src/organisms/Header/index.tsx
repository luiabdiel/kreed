import { Button } from "../../atoms/Button"
import { Logo } from "../../molecules/Logo"
import { Menu } from "../Menu"

import * as S from "./style"

export const Header = () => {
    return(
        <S.Header>
            <Logo/>
            <Menu/>
            <Button/>
        </S.Header>
    )
}