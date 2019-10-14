import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const CardContainer = styled.button`
background-color: #fff;
cursor: pointer;
border-width: 0;
width: 100%;
font-family: inherit;
border-radius: 8px;
padding: 12px 8px;
margin: 10px 0;
text-align: left;
display: flex;
-webkit-box-shadow: 0px 11px 23px -5px rgba(0,107,78,1);
-moz-box-shadow: 0px 11px 23px -5px rgba(0,107,78,1);
box-shadow: 0px 11px 23px -5px rgba(0,107,78,1);
`

export const LinkTo = styled(Link)`
text-decoration: none;
`

export const CarImage = styled.img`
height: 14vh;
`

export const InfoContainer = styled.div`
flex-direction: column;
display: flex;
align-self: center;
padding: 0 10px;
`

export const BottomCard = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
`

export const Brand = styled.p`
font-size: 16px;
font-weight: 700;
margin: 0 0 3px 0;
justify-content: left;
color: #777;
`

export const Model = styled.p`
font-size: 16px;
font-weight: 500;
margin: 0 0 3px 4px;
justify-content: left;
color: #777;
`

export const Year = styled.p`
font-size: 14px;
font-weight: 400;
margin: 3px 0 3px 0;
color: #777;
`

export const Plate = styled.p`
font-size: 14px;
font-weight: 400;
margin: 3px 0 0 0;
justify-content: left;
color: #777;
`

export const Color = styled.p`
font-size: 14px;
font-weight: 400;
margin: 3px 0 3px 0;
justify-content: left;
color: #777;
`