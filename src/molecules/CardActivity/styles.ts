import styled from "styled-components"

export const CardActivity = styled.div`
    position: absolute;

    top: 105px;
    left: 20px;

    background-color: #CA95FF;
    color: #fff;

    width: 154px;
    height: 74px;

    border-radius: 16px;

    text-align: left;

    padding: 12px;

    /* OVERFLOW HIDDEN PARA CORTAR O ICON/IMAGE  */
    overflow: hidden;

    small{
        font-size: 12px;
    }

        >div{

            display: flex;
            align-items: center;
            gap: 5px;
            
            strong{
                font-size: 18px;
                font-weight: 400;
            }

            img{
                width: 13px;
            }
        }

    i{
        position: absolute;

        width: 157px;
        height: 77px;

        border-radius: 50px;

        &.circle-1{
            left: 105px;
            top: -20px;

            background: rgba(255, 255, 255, 0.3);
        }

        &.circle-2{
            background:  rgba(255, 255, 255, 0.2);
            transform: rotate(45deg);

            left: 80px;
            bottom: -50px;
        }

        &.circle-3{
            border: 1px solid rgba(255, 255, 255, 0.3);
            transform: rotate(-72.7deg);

            left: 37px;
            top: -64px;
        }
    } 
`