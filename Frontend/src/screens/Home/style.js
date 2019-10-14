import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 12px 16px;
text-align: center;
`

export const LinkTo = styled(Link)`
text-decoration: none;
`

export const InputText = styled.input`
border-radius: 6px;
margin: 10px 0;
width: 100%;
box-sizing: border-box;
font-family: inherit;
display: flex;
border-width: 0;
font-size: 12pt;
background-color: white;
`

export const Inline = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 18px 0;
`

export const Message = styled.p`
font-size: 14px;
color: white;
font-weight: 400;
text-align: center;
`

export const Button = styled.button`
background-color: white;
cursor: pointer;
border-width: 0;
`

export const SearchButton = styled.div`
border-radius: 6px;
padding: 0 12px;
border-width: 0;
height: 40px;
align-items: center;
text-align: center;
background-color: white;
display: flex;
`

export const AddButton = styled.button`
border-radius: 6px;
cursor: pointer;
border-width: 0;
height: 40px;
padding: 0 16px;
width: 100%;
font-family: inherit;
text-align: center;
background-color: white;
color: #999;
font-size: 14px;
`

export const Content = styled.div`
align-self: center;
@media (min-width: 590px) {
   width: 570px; 
  }
max-width: 520px;
width: 100%;
`