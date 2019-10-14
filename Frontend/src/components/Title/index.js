import React from 'react'
import PropTypes from 'prop-types'
import { TitleText } from './style'

const Text = ({ title, color, ...textProps }) => (
  <TitleText color={color} {...textProps}>
    {title}
  </TitleText>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
}

Text.defaultProps = {
    title: 'Título',
    color: '#fff'
}

export default Text