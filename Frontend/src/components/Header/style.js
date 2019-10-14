import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: #008261;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LinkTo = styled(Link)`
text-decoration: none;
`

export const Logo = styled.img`
height: 10vh;
`