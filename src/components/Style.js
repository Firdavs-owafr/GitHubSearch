import styled from "styled-components";

const Display = styled.div`
    display: flex;
    align-items: center;
`

const HEader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: #222731;
`
const Second = styled.div`
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


const DarkText = styled.div`
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 2.5px;
    color: #697C9A;
    margin-right: 16px;
    text-transform: uppercase;
`

const SearchInput = styled(Display)`
    width: 100%;
    height: 69px;    
    padding: 0 10px 0 32px;
    justify-content: space-between;
    background: #FEFEFE;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    margin-bottom: 24px;
`

const Input = styled.input`
    border: 0;
    outline: none;
    width: 70%;
    background-color: #fff;
    font-family: 'Space Mono', monospace;
    background-color: transparent;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #222731;
    `

const Button = styled.button`
    width: 107px;
    height: 50px;
    background: #0079FF;
    border-radius: 10px;
    font-family: 700px;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border: 0;
    font-family: 'Space Mono', monospace;
    cursor: pointer;
`

export { HEader,Title,Second,DarkText, SearchInput,Input,Button }