import styled from "styled-components"

export const CardChart = styled.div`
    position: absolute;
    left: -10px;

    bottom: 0;

    width: 210px;
    height: 210px;
    
    border-radius: 16px;

    background-color: #fff;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 30px 25px;

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        strong{
            font-size: 16px;
            font-weight: 600;
        }
    }
`

function generateBars() {
    const amountBars = [...Array(12).keys()]
    
    let styleSpan: any = []

    amountBars.forEach((item) => {
        styleSpan.push(`
            div:nth-child(${item + 1}) {
                
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

                div{
                background-color: #EFF3FE;
    
                height: 91px;
                width: 3px;
    
                border-radius: 4px;
    
                display: flex;
                justify-content: flex-end;

            span{
                
                display: block;

                background-color: #5236FF;
                
                height: 0;
                animation: animationHeight 1s linear forwards;
                max-height: ${Math.ceil(Math.random() * 100)}px;
                width: 4px;
                border-radius: 4px;
            }
        }   

        small{
            color: #BACCFD;
            font-size: 8px;
            margin-top: 5px;
        }
        }
        `
    )})

    return styleSpan.join("")
}

export const Chart = styled.div`
    margin-top: 20px;
        ${generateBars()}

    @keyframes animationHeight {
        from{
            height: 0px;    
        } 
        to{
            height: 91px;
        }
    }
`
