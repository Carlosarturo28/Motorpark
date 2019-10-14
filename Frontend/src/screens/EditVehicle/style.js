import styled from 'styled-components'
import Select from 'react-select'

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 12px 16px;
text-align: center;
`

export const Label = styled.label`
font-size: 12pt;
font-weight: 700;
display: flex;
width: 100%;
margin: 0 auto;
margin-top: 4px;
color: white;
`

export const InputContainer = styled.div`
flex-direction: column;
width: 48%;
`
export const DoubleInput = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;
`

export const InputText = styled.input`
border-radius: 6px;
margin: 10px 0;
padding: 9px 8px;
width: 100%;
box-sizing: border-box;
font-family: inherit;
display: flex;
border-width: 0;
font-size: 12pt;
background-color: white;
`

export const InputSelect = styled(Select)`
margin: 10px auto;
font-family: inherit;
border-radius: 6px;
width: 100%;
`

export const Space = styled.div`
margin: 18px 0;
`


export const UpdateButton = styled.button`
border-radius: 6px;
cursor: pointer;
border-width: 0;
height: 40px;
padding: 0 16px;
width: 100%;
margin-top: 10px;
margin-bottom: ${props => props.delete ? '14px' : '8px'}
font-family: inherit;
text-align: center;
background-color: ${props => props.delete ? '#aa0114' : '#1AA3E9'};
color: white;
font-size: 14px;
`

export const Content = styled.div`
align-self: center;
@media (min-width: 590px) {
   width: 570px; 
  }
max-width: 520px;
width: 100%;
background-color: #006047;
border-radius: 8px;
padding: 10px 20px;
margin: 35px 0;
`

export const Picture = styled.img`
border-radius: 50%;
height: 16vh;
margin: 0 0 24px 0;
-webkit-box-shadow: 0px 11px 23px -5px rgba(0,68,50,1);
-moz-box-shadow: 0px 11px 23px -5px rgba(0,68,50,1);
box-shadow: 0px 11px 23px -5px rgba(0,68,50,1);
`