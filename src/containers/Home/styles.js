import styled from 'styled-components'

export const Container = styled.div`

        height: 100vh;
        background: #0A0A10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`

export const Image = styled.img`
    margin-bottom: 30px;
    width: 20vw;

`

export const H1 = styled.h1`    
    margin-bottom: 100px;
    color: #FFFFFF;
`

export const InputLabel = styled.label`
    color: #EEE;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.408px;
    margin-right: 200px;

`

export const Input = styled.input`
    border-radius: 14px;
    border: none;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    padding: 19px 139px 18px 15px;
    align-items: center;
    outline: none;
    margin-bottom: 90px;
    font-weight: 700;
`

export const Button = styled.button`
    display: flex;
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    background: #D93856;
    color: #fff;
    cursor: pointer;
    border: none;
    font-weight: 700;
`