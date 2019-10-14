import React from 'react'
import logo from "../../logo.svg"

import { HeaderContainer, Logo, LinkTo } from './style'

const Header = () => (
        <LinkTo to='/'>
        <HeaderContainer>
          <Logo src={logo} alt="logo" />
        </HeaderContainer>
        </LinkTo>
)

export default Header