import * as S from "./styles"

import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"
import { useCallback, useMemo } from "react"

export const CardChart = () => {
    const amountBars = Array.from(Array(12).keys())

    const fillZeros = useCallback((value: number) => {
        const number = (value + 1).toString()

        return number.padStart(2, "0")
    }, [])

    return(
        <S.CardChart>
            <div>
                <img src={arrowLeft} />
                <strong>Stats</strong>
                <img src={arrowRight} />
            </div>

            <S.Chart>
                {amountBars.map((item) => (
                    <div key={String(item)}>
                        <div>
                            <span></span>
                        </div>

                        <small>{fillZeros(item)}</small>
                    </div>
                ))}
            </S.Chart>
        </S.CardChart>
    )
}