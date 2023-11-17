import styled from 'styled-components'

export const Container = styled.div`

        min-height: 100vh;
        height: 100%;
        background: #0A0A10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`

export const Image = styled.img`
    margin-bottom: 40px;
    width: 15vw;

`

export const H1 = styled.h1`    
    margin-bottom: 100px;
    color: #FFFFFF;
`

export const Pedido = styled.div`
    border-radius: 14px;
    border: none;
    width: 342px;
    height: 101px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    padding: 10px 20px;
    outline: none;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    div{
        display: flex;
        color: aliceblue;
        font-weight: 300;
    }

    .nome{
        color: aliceblue;
        font-weight: 700;
    }


    button{
        background: transparent;
        border: none;
        display: flex;
        justify-content: end;
        cursor: pointer;
    }
`

export const Button = styled.button`
    display: flex;
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    cursor: pointer;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px; /* 14.706% */
    border: none;
`