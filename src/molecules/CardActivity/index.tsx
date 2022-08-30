import * as S from "./styles"

import arrow from "../../assets/arrow.svg"

export const CardActivity = () => {
    return(
        <S.CardActivity>
            <small>Activity</small>
            <div>
                <strong>18</strong>
                <img src={arrow} />
            </div>
            
            <i className="circle-1"></i>
            <i className="circle-2"></i>
            <i className="circle-3"></i>
        </S.CardActivity>
    )
}